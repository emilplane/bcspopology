import { BLOONS, MONKEYS, POWERS } from "../stats/stats.js";
import Element from "./element.js";
import { popupCard } from "./popupCard.js";
import Card from "./classes/card.js";

class Deck {
    constructor(deckName) {
        this.deckName = deckName
        this.deck = []
        this.updateUiFn = () => {}
    }

    addCard(newCard, updateUi = true) {
        let cardInDeck = false
        this.deck.forEach((card) => {
            if (newCard.name === card.name) {
                if (card.count < 3 && !card.hasAttribute("unique")) card.count++
                cardInDeck = true
            }
        })
        if (!cardInDeck) {
            const newCardTemp = newCard
            newCardTemp.count = 1
            this.deck.push(newCardTemp)
        }

        if (updateUi) this.updateUiFn()
    }

    removeCopy(copyToRemove, updateUi = true) {
        this.deck.forEach((card) => {
            if (copyToRemove.name === card.name) {
                if (card.count > 1) card.count--
            }
        })

        if (updateUi) this.updateUiFn()
    }

    swapCardPositionByIndex(index1, index2, updateUi = true) {
        [this.deck[index1], this.deck[index2]] = [this.deck[index2], this.deck[index1]]

        if (updateUi) this.updateUiFn()
    }

    deleteCardAtIndex(index, updateUi = true) {
        delete this.deck[index]

        if (updateUi) this.updateUiFn()
    }

    getShrunkObject() {
        const shrunkObject = {
            deckName: this.deckName,
            deck: []
        }

        this.deck.forEach((card) => {
            shrunkObject.deck.push({ name: card.name, count: card.count })
        })

        return shrunkObject
    }

    setDeckFromCurrentURL() {
        const queryString = new URLSearchParams(window.location.search);
        const encodedParam = queryString.get('data');

        const decodedData = JSON.parse(decodeURIComponent(encodedParam));

        this.deckName = decodedData.deckName;
        decodedData.deck.forEach((shrunkCard) => {
            console.log(shrunkCard)
            deck.addCard(new Card(
                [...BLOONS, ...MONKEYS, ...POWERS].find(card => card.name === shrunkCard.name),
                false
            ))
        })
    }
}

const deck = new Deck("New Deck")
deck.updateUiFn = updateUi

deck.setDeckFromCurrentURL()

function updateUi() {
    // Set URL
    const shrunkObject = deck.getShrunkObject()
    const jsonString = JSON.stringify(shrunkObject);
    const encodedData = encodeURIComponent(jsonString);
    const newUrl = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;
    history.pushState(null, '', newUrl);
    console.log(newUrl)

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

        buttonContainer.children(
            new Element("button")
                .class("smallCardButton", "material-symbols-outlined")
                .text("keyboard_arrow_up")
                .onclick(() => {
                    deck.swapCardPositionByIndex(index-1, index)
                }),
            new Element("button")
                .class("smallCardButton", "material-symbols-outlined")
                .text("keyboard_arrow_down")
                .onclick(() => {
                    deck.swapCardPositionByIndex(index, index+1)
                })
        )

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

        deckNameElementContainer.innerHTML = "";
        deckNameElementContainer.appendChild(nameElement.element);

        deck.updateUiFn();
    }
}})

document.getElementById("searchInput").addEventListener("input", function(event) {
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