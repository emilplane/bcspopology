import {BLOONS, MONKEYS, POWERS} from "../stats/stats.js";
import Element from "./element.js";
import {popupCard} from "./popupCard.js";
import Card from "./classes/card.js";
import {Deck} from "./classes/deck.js";
import {generateCard} from "./cardGenerator.js";
import UserDecks from "./classes/userDecks.js";

let shiftDown = false
let deckUrl = ""
const deck = new Deck("New Deck")
deck.changeUpdateUiFn(updateUi)
const userDecks = new UserDecks()

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
    if (deck.deckName === "New Deck") {
        promptForDeckName(copyUrl)
    } else {
        copyUrl()
    }
})

function copyUrl() {
    navigator.clipboard.writeText(deckUrl).then(function() {
        console.log("Copied url!")
    }).catch(function(error) {
        console.error("Error copying text: ", error);
    });
}

function updateUi() {
    // Set URL
    deckUrl = `${window.location.origin}${window.location.pathname}?data=${deck.getEncodedString()}`;
    history.pushState(null, '', deckUrl);

    document.getElementById("numberOfCards").innerText = `${deck.length}/40 cards`
    document.getElementById("heroText").innerText = `Hero: ${deck.hero}`

    const listOfCardsElement = document.getElementById("listOfCards")
    listOfCardsElement.innerHTML = ""

    document.getElementById("deckName").innerText = deck.deckName

    let instantIndex = -1
    console.log("updateUi")
    console.log(deck)
    deck.deck.forEach((card, index) => {
        instantIndex++
        const i = instantIndex
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

        // console.log(instantIndex, index)

        if (instantIndex !== 0) {
            buttonContainer.children(
                new Element("button")
                    .class("smallCardButton", "material-symbols-outlined")
                    .text("keyboard_arrow_up")
                    .onclick(() => {
                        console.log(i)
                        deck.swapCardPositionByIndex(i-1, i)
                    })
            )
        }

        if (instantIndex < deck.uniqueCardLength - 1) {
            buttonContainer.children(
                new Element("button")
                    .class("smallCardButton", "material-symbols-outlined")
                    .text("keyboard_arrow_down")
                    .onclick(() => {
                        console.log(i)
                        deck.swapCardPositionByIndex(i, i+1)
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
                .class("smallCardButton", "material-symbols-outlined", "smallCardDeleteButton")
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
}})

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

document.getElementById("searchInput").addEventListener("input", function (event) {
    const input = String(event.target.value)
    const noInput = input === ""
    const resultsElement = document.getElementById("searchResults")
    resultsElement.innerHTML = ""

    if (!noInput) {
        const searchResults = searchCards([...BLOONS, ...POWERS, ...MONKEYS])
        addListOfSearchResults(searchResults["2"])
        addListOfSearchResults(searchResults["1"])

        function handleHeroExclusiveCards(card) {
            if (card.hero === undefined || card.hero === deck.hero) {
                deck.addCard(card)
            } else {
                confirmHeroChangeDialog(card.hero, () => {
                    deck.setHero(card.hero)
                    deck.addCard(card)
                })
            }
        }

        function addListOfSearchResults(list) {
            list.forEach((card) => {
                const searchResultCard = new Element("div")
                    .class("searchResultCard")
                    .children(
                        new Element("h6").text(card.displayName),
                    )
                    .onclick(() => handleHeroExclusiveCards(card))
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

function confirmHeroChangeDialog(heroName, changeFn) {
    const title = new Element("h3").text("Change deck hero?")

    const description = new Element("p").text(`This card is exclusive to ${heroName}. Would you like to change this deck's hero? Any cards exclusive to ${deck.hero} will be removed.`)

    const buttonContainer = new Element("div")
        .class("userInteractionDialogButtonWrapper")
        .children(
            new Element("div")
                .class("userInteractionDialogButtonContainer")
                .children(
                    new Element("button")
                        .id("cancelHeroChangeButton")
                        .text("Cancel"),
                    new Element("button")
                        .class("primaryButton")
                        .id("confirmHeroChangeButton")
                        .text("Change Hero")
                ),
        )

    displayUserInteractionDialog(
        [title, description, buttonContainer],
        [
            new UserInteractionDialogEventListener("cancelHeroChangeButton", (dialog) => {
                dialog.close()
            }),
            new UserInteractionDialogEventListener("confirmHeroChangeButton", (dialog) => {
                changeFn()
                dialog.close()
            })
        ]
    )
}

document.getElementById("heroContainer").addEventListener("click", function () {
    switch (deck.hero) {
        case "Quincy":          deck.setHero("Gwendolin");  break;
        case "Gwendolin":       deck.setHero("Obyn");       break;
        case "Obyn":            deck.setHero("Amelia");     break;
        case "Amelia":          deck.setHero("Adora");      break;
        case "Adora":           deck.setHero("Zee Jay");    break;
        case "Zee Jay":  default: deck.setHero("Quincy");     break;
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

document.getElementById("downloadImageButton").addEventListener("click", function (event) {
    if (deck.length !== 40) {
        deckNotCompleteDialog()
    } else if (deck.deckName === "New Deck") {
        promptForDeckName(generateDeckImage)
    } else {
        generateDeckImage()
    }
})

function generateDeckImage() {
    imageGenInfoDialog()

    try {
        const imagePreviewContainer = document.getElementById("imagePreviewContainer")

        const heroStr = deck.hero.replace(/\s/g, "");

        const imageHeader = new Element("div")
            .class("imageHeader", "imageBoxShadow")
            .children(
                new Element("h2")
                    .class("bcsfont", "imageDeckTitle", `imageDeckTitle-${heroStr}`)
                    .text(deck.deckName)
            )

        const allCards = new Element("div")
            .class("allCards")

        deck.deck.forEach(card => {
            const imageCardImgContainer = new Element("div").class("imageCardImgContainer")
            imageCardImgContainer.element.style.backgroundImage = `url(media/cardArt/${card.name}.png)`

            const shrinkTextInCardsClasses = []
            console.log(deck.uniqueCardLength)
            if (deck.uniqueCardLength > 22) shrinkTextInCardsClasses.push("shrinkCard")
            if (deck.uniqueCardLength > 28) {
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
                new Element("p").class("bcsfont").text("BCS Popology • game version 3.4")
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

        // Download image
        const content = document.getElementById('imageWrapper');
        const rect = content.getBoundingClientRect();
        const pixelRatio = window.devicePixelRatio
        content.style.transform = `scale(${2/pixelRatio})`
        console.log(pixelRatio);
        // Use html2canvas to render the div
        html2canvas(content, {
            // width: rect.width/pixelRatio,
            // height: rect.height/pixelRatio,
            // scale: 2,
            useCORS: true, // Ensure cross-origin resources are loaded properly
            backgroundColor: null,
        }).then(canvas => {
            const imageData = canvas.toDataURL('image/png');

            // Function to convert dataURL to Blob
            function dataURLToBlob(dataURL) {
                const byteString = atob(dataURL.split(',')[1]); // Decode base64
                const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]; // Extract MIME type
                const byteArray = new Uint8Array(byteString.length);

                for (let i = 0; i < byteString.length; i++) {
                    byteArray[i] = byteString.charCodeAt(i);
                }

                return new Blob([byteArray], { type: mimeString });
            }

            // Convert the data URL to a Blob
            const blob = dataURLToBlob(imageData);
            const file = new File([blob], `${deck.deckName}.png`, { type: 'image/png' });

            // Use Web Share API if available and supported
            if (navigator.share && navigator.canShare({ files: [file] }) && !navigator.userAgent.includes("Windows")) {
                navigator.share({
                    title: 'Shared Image',
                    text: `Check out this deck: ${deck.deckName}`,
                    files: [file],
                })
                    .then(() => console.log('Image shared successfully!'))
                    .catch(err => imageGenFailedDialog(err));
            } else {
                // Fallback: Download the image
                console.log('Web Share API not supported or cannot share file. Falling back to download.');

                const link = document.createElement('a');
                link.href = imageData;
                link.download = `${deck.deckName}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }).catch((err) => {imageGenFailedDialog(err)});

        imagePreviewContainer.classList.remove("showImagePreviewContainer")
    } catch (error) {
        imageGenFailedDialog(error)
    }
}

document.getElementById("manageDecksButton").addEventListener("click", displayManageDecksDialog)

function displayManageDecksDialog() {
    const dialog = document.getElementById("manageDecksDialog")
    const dialogContents = document.getElementById("manageDecksDialogContents")
    dialogContents.innerHTML = ""

    const titleContainer = new Element("div")
        .class("manageDecksTitleContainer")
        .children(
            new Element("div")
                .class("manageDecksTitleSubContainer")
                .children(
                    new Element("h3")
                        .text("Your Decks"),
                    new Element("span")
                        .class("material-symbols-outlined", "closeManageDecksDialogButton")
                        .text("close")
                        .onclick(() => { dialog.close() })
                ),
            new Element("div")
                .class("horizontalLine", "strongLineStyle", "thick")
        )

    const deckGrid = new Element("div")
        .class("deckGrid")

    console.log(userDecks)
    userDecks.encodedDeckStrings.forEach((encodedString, index) => {
        const storedDeck = new Deck("Stored Deck")
        storedDeck.setDeckWithEncodedString(encodedString)
        const deckCard = new Element("div")
            .class("deckCard")
            .children(
                new Element("div")
                    .class("deckCardMainContainer")
                    .children(
                        new Element("h5").class("bcsfont").text(storedDeck.deckName),
                        new Element("h6").text(`${storedDeck.hero} - ${storedDeck.length}/40 Cards`),
                    )
                    .onhover(
                        () => {deckCard.element.classList.add("deckCardHover")},
                        () => {deckCard.element.classList.remove("deckCardHover")})
                    .onclick(() => {
                        deck.setDeckWithEncodedString(encodedString)
                        console.log(
                            storedDeck.getEncodedString())
                        dialog.close()
                    }),
                new Element("div").class("deckCardConfigButtonContainer").children(
                    new Element("button").class("smallCardButton", "material-symbols-outlined").text("link")
                        .onclick(() => {
                            const url = `https://bcspopology.com/deckBuilder.html?data=${storedDeck.getEncodedString()}`
                            navigator.clipboard.writeText(url).then(function() {
                                console.log("Copied url!")
                            }).catch(function(error) {
                                console.error("Error copying text: ", error);
                            });
                        }),
                    new Element("button").class("smallCardButton", "smallCardDeleteButton", "material-symbols-outlined").text("delete")
                        .onclick(() => {
                            function deleteDeck() {
                                userDecks.deleteDeckWithIndex(index)
                                displayManageDecksDialog()
                            }

                            if (shiftDown) deleteDeck()
                            else confirmDeckDeletionDialog(deleteDeck)
                        })
                )
            )
        deckGrid.children(deckCard)
    })

    const deckGridWrapper = new Element("div")
        .class("deckGridWrapper")
        .children(deckGrid)

    const mainButtonWrapper = new Element("div")
        .class("deckManagementMainButtonWrapper")
        .children(
            new Element("div")
                .class("horizontalLine"),
            new Element("div")
                .class("deckManagementMainButtonContainer")
                .children(
                    new Element("button")
                        .class("deckManagementButton")
                        .children(
                            new Element("span")
                                .class("material-symbols-outlined")
                                .text("bookmark"),
                            new Element("p")
                                .text("Save Deck")
                        )
                        .onclick(() => {
                            userDecks.addDeckString(deck.getEncodedString())
                            displayManageDecksDialog()
                        }),
                    new Element("button")
                        .class("deckManagementButton")
                        .children(
                            new Element("span")
                                .class("material-symbols-outlined")
                                .text("save"),
                            new Element("p")
                                .text("Backup Decks")
                        )
                        .onclick(() => {
                            backupUserDecks()
                        }),
                    new Element("button")
                        .class("deckManagementButton")
                        .children(
                            new Element("span")
                                .class("material-symbols-outlined")
                                .text("settings_backup_restore"),
                            new Element("p")
                                .text("Restore Decks")
                        )
                        .onclick(() => {
                            triggerFileSelectionToRestoreDecks()
                        })
                )
        )

    dialogContents.appendChild(titleContainer.element);
    dialogContents.appendChild(deckGridWrapper.element);
    dialogContents.appendChild(mainButtonWrapper.element);

    dialog.showModal()
}

function promptForDeckName(thenFn) {
    const title = new Element("h3").text("Name your deck!")

    const input = new Element("label").children(
        new Element("input")
            .setProperty("type", "text")
            .setProperty("value", deck.deckName)
            .setProperty("autocomplete", "off")
            .id("renameDialogInput")
    )

    const buttonContainer = new Element("div")
        .class("userInteractionDialogButtonWrapper")
        .children(
            new Element("div")
                .class("userInteractionDialogButtonContainer")
                .children(
                    new Element("button")
                        .id("dialogCancelButton")
                        .text("Cancel"),
                    new Element("button")
                        .id("continueWithoutNamingButton")
                        .text("Continue without naming"),
                    new Element("button")
                        .id("nameDeckButton")
                        .class("primaryButton")
                        .text("Name deck")
                )
        )

    displayUserInteractionDialog(
        [title, input, buttonContainer],
        [
            new UserInteractionDialogEventListener("dialogCancelButton", (dialog) => {
                dialog.close()
            }),
            new UserInteractionDialogEventListener("continueWithoutNamingButton", (dialog) => {
                dialog.close()
                thenFn()
            }),
            new UserInteractionDialogEventListener("nameDeckButton", (dialog) => {
                updateDeckName(document.getElementById("renameDialogInput").value)
                dialog.close()
                thenFn()
            })
        ]
    )

    setTimeout(() => {
        document.getElementById("renameDialogInput").select();
    }, 0);
}

function deckNotCompleteDialog() {
    const title = new Element("h3").text("Incomplete deck!")

    const description = new Element("p").text("Your deck must have 40 cards in it before you are able to share an image.")

    const buttonContainer = new Element("div")
        .class("userInteractionDialogButtonWrapper")
        .children(
            new Element("div")
                .class("userInteractionDialogButtonContainer")
                .id("deckNotCompleteConfirmButton")
                .children(
                    new Element("button")
                        .text("OK")
                )
        )

    displayUserInteractionDialog(
        [title, description, buttonContainer],
        [
            new UserInteractionDialogEventListener("deckNotCompleteConfirmButton", (dialog) => {
                dialog.close()
            })
        ]
    )
}

function imageGenInfoDialog() {
    const title = new Element("h3").text("Image is being exported")

    const description = new Element("p").text("Generating an image from your deck is still an experimental feature and your experience may vary depening on your device and browser. If you are experiencing issues, please join our Discord server to report them.")

    const buttonContainer = new Element("div")
        .class("userInteractionDialogButtonWrapper")
        .children(
            new Element("div")
                .class("userInteractionDialogButtonContainer")
                .id("imageGenInfoConfirmButton")
                .children(
                    new Element("button")
                        .text("OK")
                )
        )

    displayUserInteractionDialog(
        [title, description, buttonContainer],
        [
            new UserInteractionDialogEventListener("imageGenInfoConfirmButton", (dialog) => {
                dialog.close()
            })
        ]
    )
}

function imageGenFailedDialog(error) {
    const title = new Element("h3").text("Share Image failed")

    const description = new Element("p").text(`The image failed to export. If this issue persists, please join our Discord server to report it.\n\nError info:\n${error}`)

    const buttonContainer = new Element("div")
        .class("userInteractionDialogButtonWrapper")
        .children(
            new Element("div")
                .class("userInteractionDialogButtonContainer")
                .id("imageGenFailedConfirmButton")
                .children(
                    new Element("button")
                        .text("OK")
                )
        )

    displayUserInteractionDialog(
        [title, description, buttonContainer],
        [
            new UserInteractionDialogEventListener("imageGenFailedConfirmButton", (dialog) => {
                dialog.close()
            })
        ]
    )
}

function confirmDeckDeletionDialog(deleteFn) {
    const title = new Element("h3").text("Confirm Deck Deletion")

    const description = new Element("p").text("Are you sure you want to delete this deck?\nHold shift while deleting to avoid this pop-up.")

    const buttonContainer = new Element("div")
        .class("userInteractionDialogButtonWrapper")
        .children(
            new Element("div")
                .class("userInteractionDialogButtonContainer")
                .children(
                    new Element("button")
                        .id("cancelDeckDeletionButton")
                        .text("Cancel"),
                    new Element("button")
                        .id("deleteDeckButton")
                        .class("dangerButton")
                        .text("Delete Deck")
                ),
        )

    displayUserInteractionDialog(
        [title, description, buttonContainer],
        [
            new UserInteractionDialogEventListener("cancelDeckDeletionButton", (dialog) => {
                dialog.close()
            }),
            new UserInteractionDialogEventListener("deleteDeckButton", (dialog) => {
                dialog.close()
                deleteFn()
            })
        ]
    )
}

class UserInteractionDialogEventListener {
    constructor(id, listener) {
        this.id = id; this.listener = listener;
    }
}

function displayUserInteractionDialog(elements, buttonEventListeners) {
    const dialog = document.getElementById("userInteractionDialog")
    const dialogContents = document.getElementById("userInteractionDialogContents")
    dialogContents.innerHTML = ""

    elements.forEach(element => {
        dialogContents.appendChild(element.element);
    })

    dialog.showModal()

    buttonEventListeners.forEach(buttonEventListener => {
        document.getElementById(buttonEventListener.id).addEventListener("click", () => {
            buttonEventListener.listener(dialog)
        })
    })
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case "Shift":
            shiftDown = true
            break;
    }
});
document.addEventListener('keyup', function (event) {
    switch (event.key) {
        case "Shift":
            shiftDown = false
            break;
    }
});


/**
 * Backup the "userDecks" key from localStorage as a plain text file.
 */
function backupUserDecks() {
    const userDecks = localStorage.getItem('userDecks');
    if (!userDecks) {
        alert('No "userDecks" data found to back up.');
        return;
    }

    const blob = new Blob([userDecks], { type: 'text/plain' }); // Handle as plain text
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'userDecksBackup.txt'; // Default filename for plain text
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Clean up the URL object
}

/**
 * Dynamically create and trigger the file input for selecting a file.
 */
function triggerFileSelectionToRestoreDecks() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt'; // Specify accepted file type (plain text)
    fileInput.style.display = 'none'; // Hide the input element

    // Add event listener to handle file selection
    fileInput.addEventListener('change', restoreUserDecks);

    // Append input to the body temporarily and trigger click
    document.body.appendChild(fileInput);
    fileInput.click();

    // Clean up the input element after use
    document.body.removeChild(fileInput);
}

/**
 * Restore the "userDecks" key into localStorage from a plain text file.
 * @param {Event} event - The file input change event.
 */
function restoreUserDecks(event) {
    function decksRestoredErrorDialog() {
        const title = new Element("h3").text("Error while restoring decks")

        const description = new Element("p").text(`There was an issue while restoring your backup file. If this issue persists, please report it on our Discord server.`)

        const buttonContainer = new Element("div")
            .class("userInteractionDialogButtonWrapper")
            .children(
                new Element("div")
                    .class("userInteractionDialogButtonContainer")
                    .id("restoreFailedConfirmButton")
                    .children(
                        new Element("button")
                            .text("OK")
                    )
            )

        displayUserInteractionDialog(
            [title, description, buttonContainer],
            [
                new UserInteractionDialogEventListener("restoreFailedConfirmButton", (dialog) => {
                    dialog.close()
                })
            ]
        )
    }

    try {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function () {
            const data = reader.result;

            // Validate if the data is a string
            if (typeof data !== 'string') {
                decksRestoredErrorDialog()
                return;
            }
            userDecks.restoreDecks(data)
            localStorage.setItem('userDecks', data);
            displayManageDecksDialog()
        };
        reader.readAsText(file);
    } catch {
        decksRestoredErrorDialog()
    }
}