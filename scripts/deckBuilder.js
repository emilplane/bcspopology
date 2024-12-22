import {BLOONS, MONKEYS, POWERS} from "../stats/stats.js";
import Element from "./element.js";
import {popupCard} from "./popupCard.js";
import Card from "./classes/card.js";
import {Deck} from "./classes/deck.js";
import {generateCard} from "./cardGenerator.js";

let deckUrl = ""
const deck = new Deck("New Deck")
deck.updateUiFn = updateUi

document.getElementById("deckNameContainer").appendChild(new Element("h5")
    .id("numberOfCards")
    .class("numberOfCards")
    .text(`${deck.length}/40 cards`)
    .element
)
deck.setDeckFromCurrentURL()

// const all = [...BLOONS, ...POWERS, ...MONKEYS]
// const idlist = []
// all.forEach((card) => {
//     if (idlist.includes(card.id)) {
//         throw new Error(card.id)
//     } else {
//         idlist.push(card.id)
//     }
// })

document.getElementById("copyUrlButton").addEventListener("click", () => {
    navigator.clipboard.writeText(deckUrl).then(function() {
        console.log("Copied url!")
    }).catch(function(error) {
        console.error("Error copying text: ", error);
    });
})

function updateUi() {
    // Set URL
    const shrunkObject = deck.getShrunkObject()
    let dataString = "1_"
    switch (shrunkObject.hero) {
        case "Quincy": default: dataString +=   "1"; break;
        case "Gwendolin":       dataString +=   "2"; break;
        case "Obyn":            dataString +=   "3"; break;
        case "Amelia":          dataString +=   "4"; break;
        case "Adora":           dataString +=   "5"; break;
    }
    shrunkObject.deck.forEach((shrunkCard) => {
        const cardId = [...BLOONS, ...POWERS, ...MONKEYS].find(c => c.name === shrunkCard.name).id
        dataString += cardId
        if (shrunkCard.count > 1) dataString += shrunkCard.count
    })
    dataString += `_${shrunkObject.deckName}`

    const encodedData = encodeURIComponent(dataString);
    deckUrl = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;
    history.pushState(null, '', deckUrl);

    document.getElementById("numberOfCards").innerText = `${deck.length}/40 cards`
    document.getElementById("heroText").innerText = `Hero: ${deck.hero}`

    const listOfCardsElement = document.getElementById("listOfCards")
    listOfCardsElement.innerHTML = ""
    deck.deck.forEach((card, index) => {
        const buttonContainer = new Element("div")
            .class("smallCardButtons")
            .children(
                new Element("button")
                    .class("smallCardButton", "material-symbols-outlined")
                    .text("list ")
                    .onclick(() => {
                        popupCard(card)
                    })
            )

        if (index !== 0) {
            buttonContainer.children(
                new Element("button")
                    .class("smallCardButton", "material-symbols-outlined")
                    .text("keyboard_arrow_up")
                    .onclick(() => {
                        deck.swapCardPositionByIndex(index-1, index)
                    })
            )
        }

        if (index !== deck.deck.length - 1) {
            buttonContainer.children(
                new Element("button")
                    .class("smallCardButton", "material-symbols-outlined")
                    .text("keyboard_arrow_down")
                    .onclick(() => {
                        deck.swapCardPositionByIndex(index, index+1)
                    })
            )
        }

        // Add plus and minus buttons if the card is not unique
        if (!card.hasAttribute("unique")) {
            buttonContainer.children(
                new Element("button")
                    .class("smallCardButton", "material-symbols-outlined")
                    .text("remove")
                    .onclick(() => {
                        deck.removeCopy(card)
                    }),
                new Element("button")
                    .class("smallCardButton", "material-symbols-outlined")
                    .text("add")
                    .onclick(() => {
                        deck.addCard(card)
                    })
            )
        }

        // Delete button
        buttonContainer.children(
            new Element("button")
                .class("smallCardButton", "material-symbols-outlined", "deleteCardButton")
                .text("delete")
                .onclick(() => {
                    deck.deleteCardAtIndex(index)
                })
        )

        const cardInfoContainer = new Element("div")
            .class("smallCardInfoSummaryContainer")
            .children(
                buttonContainer
            )

        const cardElement = new Element("div")
            .class("smallCardInList", `smallCard-${card.cardType}`)
            .id(`smallCard-${card.name}`)
            .children(
                new Element("div").class("smallCardImgContainer").children(
                    new Element("img")
                        .class("smallCardImg")
                        .setProperty("src", `media/cardArt/${card.name}.png`)
                ),
                new Element("div")
                    .class("smallCardTitleContainer")
                    .children(
                        new Element("h5")
                            .class("bcsfont", "smallCardTItle")
                            .text(card.displayName),
                        new Element("h5")
                            .class("bcsfont", "cardCount")
                            .text(`${card.count}x`)
                    ),
                cardInfoContainer
            )

        listOfCardsElement.appendChild(cardElement.element)
    })
}

let enteringNewName = false

const deckNameElement = document.getElementById("deckName")
const deckNameElementContainer = document.getElementById("deckNameContainer")

deckNameElement.innerText = deck.deckName
deckNameElementContainer.addEventListener("click", () => { if (!enteringNewName) {
    enteringNewName = true
    const inputElement = new Element("label").children(
        new Element("input")
            .class("newNameInput")
            .setProperty("type", "text")
            .setProperty("placeholder", deck.deckName)
            .setProperty("autocomplete", "off")
            .id("newNameInput")
    )

    deckNameElementContainer.innerHTML = ""
    deckNameElementContainer.appendChild(inputElement.element)

    const newNameInput = document.getElementById("newNameInput");
    newNameInput.focus()

    newNameInput.addEventListener("blur", (e) => {
        updateDeckName(e.target.value);
    });

    newNameInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            newNameInput.blur();
        }
    });

    function updateDeckName(value) {
        enteringNewName = false

        if (value !== undefined && value !== "") {
            deck.deckName = value;
        }

        const nameElement = new Element("h3")
            .id("deckName")
            .class("bcsfont", "deckName")
            .text(deck.deckName)
        const cardNumberElement = new Element("h5")
            .id("numberOfCards")
            .class("numberOfCards")
            .text(`${deck.length}/40 cards`)

        deckNameElementContainer.innerHTML = "";
        deckNameElementContainer.appendChild(nameElement.element);
        deckNameElementContainer.appendChild(cardNumberElement.element);

        deck.updateUiFn();
    }
}})

document.getElementById("searchInput").addEventListener("input", function (event) {
    const input = String(event.target.value)
    const noInput = input === ""
    const resultsElement = document.getElementById("searchResults")
    resultsElement.innerHTML = ""

    if (!noInput) {
        const searchResults = searchCards([...BLOONS, ...POWERS, ...MONKEYS])
        addListOfSearchResults(searchResults["2"])
        addListOfSearchResults(searchResults["1"])

        function addListOfSearchResults(list) {
            list.forEach((card) => {
                const searchResultCard = new Element("div")
                    .class("searchResultCard")
                    .children(
                        new Element("h6").text(card.displayName),
                    )
                    .onclick(() => deck.addCard(card))
                resultsElement.appendChild(searchResultCard.element)

                const dividingLine = new Element("div").class("horizontalLine", "noLineMargin")
                resultsElement.appendChild(dividingLine.element)
            })
        }
    }

    function searchCards(arrayOfCards) {
        const searchResults = { 1: [], 2: [] }

        arrayOfCards.forEach(bloonCardBlueprint => {
            const card = new Card(bloonCardBlueprint);

            const priority = card.searchInCard(input)

            if (priority > 0) {
                searchResults[priority].push(card)
            }
        })

        return searchResults
    }
});

document.getElementById("heroContainer").addEventListener("click", function () {
    switch (deck.hero) {
        case "Quincy":          deck.setHero("Gwendolin");  break;
        case "Gwendolin":       deck.setHero("Obyn");       break;
        case "Obyn":            deck.setHero("Amelia");     break;
        case "Amelia":          deck.setHero("Adora");      break;
        case "Adora":  default: deck.setHero("Quincy");     break;
    }
});

document.getElementById("heroContainer").addEventListener("keydown", function (event) {
    if (event.key === ' ' || event.key === 'Enter') {
        // Prevent default behavior for space
        if (event.key === ' ') {
            event.preventDefault();
        }

        // Trigger the same logic as the click event
        this.click();
    }
});

document.getElementById("downloadImageButton").addEventListener("click", function (event) { if (deck.length === 40) {
    const imagePreviewContainer = document.getElementById("imagePreviewContainer")

    const imageHeader = new Element("div")
        .class("imageHeader", "imageBoxShadow")
        .children(
            new Element("h2")
                .class("bcsfont", "imageDeckTitle", `imageDeckTitle-${deck.hero}`)
                .text(deck.deckName)
        )

    const allCards = new Element("div")
        .class("allCards")

    deck.deck.forEach(card => {
        const imageCardImgContainer = new Element("div").class("imageCardImgContainer")
        imageCardImgContainer.element.style.backgroundImage = `url(media/cardArt/${card.name}.png)`

        const shrinkTextInCardsClasses = []
        if (deck.deck.length > 24) shrinkTextInCardsClasses.push("shrinkCard")
        if (deck.deck.length > 28) {
            shrinkTextInCardsClasses.push("shrinkCard2")
        }
        allCards.class(...shrinkTextInCardsClasses)

        allCards.children(
            new Element("div")
                .class("smallCardInList", `imageSmallCard-${card.cardType}`, "imageCard", "imageBoxShadow")
                .children(
                    imageCardImgContainer,
                    new Element("h5")
                        .class("bcsfont", "imageCardTitle", ...shrinkTextInCardsClasses)
                        .text(card.displayName),
                    new Element("h5")
                        .class("bcsfont", "imageCardCount", ...shrinkTextInCardsClasses)
                        .text(`${card.count}x`),
                )
        )
    })

    const allCardsContainer = new Element("div")
        .class("allCardsContainer")
        .children(allCards.element)

    const cardDistribution = new Element("div")
        .class("summaryCard", "imageBoxShadow")
        .children(
            new Element("h5")
                .class("summaryCardTitle", "bcsfont")
                .text("Card Distribution"),
            new Element("div").class("costDistributionContainer")
                .children(
                    new Element("div")
                        .class("cardDistributionSubContainer")
                        .children(
                            new Element("h5")
                                .text(deck.countNumberOfCardsWithPropertyValue("cardType", "monkey")),
                            new Element("img")
                                .setProperty("src", `media/monkeyIcon.png`),
                        ),
                    new Element("div")
                        .class("cardDistributionSubContainer")
                        .children(
                            new Element("h5")
                                .text(deck.countNumberOfCardsWithPropertyValue("cardType", "bloon")),
                            new Element("img")
                                .setProperty("src", `media/bloonIcon.png`),
                        ),
                    new Element("div")
                        .class("cardDistributionSubContainer")
                        .children(
                            new Element("h5")
                                .text(deck.countNumberOfCardsWithPropertyValue("cardType", "power")),
                            new Element("img")
                                .setProperty("src", `media/powerIcon.png`),
                        )
                )
        )

    const distributionArray = deck.cardCostDistribution()
    const distributionBars = [
        new Element("div").class("distributionBarValue"),
        new Element("div").class("distributionBarValue"),
        new Element("div").class("distributionBarValue"),
        new Element("div").class("distributionBarValue"),
        new Element("div").class("distributionBarValue")
    ]
    distributionBars.forEach((bar, index) => {
        const percentage = distributionArray[index]/Math.max(...distributionArray)*100
        bar.element.style.height = `${percentage}%`
    })

    const distributionBarContainers = []
    distributionBars.forEach((element, index) => {
        distributionBarContainers.push(
            new Element("div").class("distributionBarContainer").children(
                element,
                new Element("div")
                    .class("distributionBarLabelContainer")
                    .children(
                        new Element("div")
                            .class("distributionBarLabel")
                            .text(distributionArray[index])
                    )
            )
        )
    })

    const barLabelStrings = ["0-2", "3-4", "5-6", "7-9", "10+"]
    const barLabelElements = []
    barLabelStrings.forEach(string => {
        barLabelElements.push(
            new Element("div").class("barLabelContainer").children(
                    new Element("div").class("barLabel").text(string))
        )
    })

    const cardCostDistribution = new Element("div")
        .class("summaryCard", "imageBoxShadow")
        .children(
            new Element("h5")
                .class("summaryCardTitle", "bcsfont")
                .text("Card Cost Distribution"),
            new Element("div")
                .class("cardCostDistributionContainer")
                .children(...distributionBarContainers, ...barLabelElements)
        )

    const bloonCostDistributionArray = deck.bloonCardCostDistribution()
    const bloonCostDistributionBars = [
        new Element("div").class("distributionBarValue"),
        new Element("div").class("distributionBarValue"),
        new Element("div").class("distributionBarValue"),
        new Element("div").class("distributionBarValue"),
        new Element("div").class("distributionBarValue")
    ]
    bloonCostDistributionBars.forEach((bar, index) => {
        const percentage = bloonCostDistributionArray[index]/Math.max(...bloonCostDistributionArray)*100
        bar.element.style.height = `${percentage}%`
    })

    const bloonCostDistributionBarContainers = []
    bloonCostDistributionBars.forEach((element, index) => {
        bloonCostDistributionBarContainers.push(
            new Element("div").class("distributionBarContainer").children(
                element,
                new Element("div")
                    .class("distributionBarLabelContainer")
                    .children(
                        new Element("div")
                            .class("distributionBarLabel")
                            .text(bloonCostDistributionArray[index])
                    )
            )
        )
    })

    const bloonCostbarLabelStrings = ["0-2", "3-4", "5-6", "7-9", "10+"]
    const bloonCostBarLabelElements = []
    bloonCostbarLabelStrings.forEach(string => {
        bloonCostBarLabelElements.push(
            new Element("div").class("barLabelContainer").children(
                new Element("div").class("barLabel").text(string))
        )
    })

    const bloonCostDistribution = new Element("div")
        .class("summaryCard", "imageBoxShadow")
        .children(
            new Element("h5")
                .class("summaryCardTitle", "bcsfont")
                .text("Bloon Cost Distribution"),
            new Element("div")
                .class("cardCostDistributionContainer")
                .children(...bloonCostDistributionBarContainers, ...bloonCostBarLabelElements)
        )






    const summaryCardContainer = new Element("div")
        .class("summaryCardContainer")
        .children(cardDistribution, cardCostDistribution, bloonCostDistribution)

    const imageSummaryContainer = new Element("div")
        .class("imageSummaryContainer")
        .children(
            new Element("h5")
                .class("imageHeroText")
                .text(`Hero: ${deck.hero}`),
            new Element("div")
                .class("summaryContainerDivider"),
            summaryCardContainer
        )

    const extraDetailsContainer = new Element("div").class("extraDetailsContainer")
        .children(
            new Element("p").class("bcsfont").text("BCS Popology • game version 2.0")
        )

    const image = new Element("div")
        .class("imageWrapper")
        .id("imageWrapper")
        .children(
            new Element("div")
                .class("imageContainer")
                .id("imageContainer")
                .children(
                    imageHeader, imageSummaryContainer, allCardsContainer, extraDetailsContainer,
                    new Element("img")
                        .class("imageHeroIcon")
                        .setProperty("src", `media/cardIcons/${deck.hero.toLowerCase()}.png`),
                )
        )

    imagePreviewContainer.innerHTML = ""
    imagePreviewContainer.appendChild(image.element)

    imagePreviewContainer.classList.add("showImagePreviewContainer")

    // generateCard(deck.deck[0], document.getElementById("imageCardContainer"));

    async function inlineSVGImages(svgElement) {
        const images = svgElement.querySelectorAll('image');
        for (const image of images) {
            const href = image.getAttribute('href') || image.getAttribute('xlink:href');
            if (href) {
                // Fetch the image as a Blob
                const response = await fetch(href);
                const blob = await response.blob();
                const reader = new FileReader();

                // Convert Blob to Data URL
                await new Promise(resolve => {
                    reader.onload = resolve;
                    reader.readAsDataURL(blob);
                });

                // Replace href with Data URL
                image.setAttribute('href', reader.result);
            }
        }
    }

    async function embedFontInSVG(svgElement) {
        const fontURL = '/bcsfont.ttf'; // Adjust the path to your font file
        const response = await fetch(fontURL);
        const fontBlob = await response.blob();
        const reader = new FileReader();

        // Convert Blob to Base64
        const fontBase64 = await new Promise(resolve => {
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(fontBlob);
        });

        // Construct @font-face rule with embedded font
        const fontFace = `
        @font-face {
            font-family: 'BCS Font';
            src: url('${fontBase64}') format('truetype');
        }
    `;

        // Find or create a <style> tag within the SVG
        let style = svgElement.querySelector('style');
        if (!style) {
            style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
            svgElement.insertBefore(style, svgElement.firstChild);
        }

        // Add the font-face rule to the <style> tag
        style.textContent = fontFace + style.textContent;
    }

    // Download image
    const content = document.getElementById('imageWrapper');
    const svg = content.querySelector('svg');

    // Inline the images in the SVG
    // await inlineSVGImages(svg);

    // Embed the font directly in the SVG
    // await embedFontInSVG(svg);

    // Use html2canvas to render the div
    html2canvas(content, {
        useCORS: true, // Ensure cross-origin resources are loaded properly
        backgroundColor: null,
    }).then(canvas => {
        const imageData = canvas.toDataURL('image/png');

        // Create a download link
        const link = document.createElement('a');
        link.href = imageData;
        link.download = `${deck.deckName}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });


    imagePreviewContainer.classList.remove("showImagePreviewContainer")
}})