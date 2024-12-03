import {BLOONS, MONKEYS, POWERS} from "../../stats/stats.js";
import Card from "./card.js";

export class Deck {
    constructor(deckName) {
        this.deckName = deckName
        this.deck = []
        this.hero = "Quincy"
        this.updateUiFn = () => {}
    }

    addCard(newCard, setCount = undefined, updateUi = true) {
        let cardInDeck = false
        this.deck.forEach((card) => {
            if (newCard.name === card.name) {
                if (card.count < 3 && !card.hasAttribute("unique")) {
                    if (setCount) {
                        card.count = setCount
                    } else {
                        card.count++
                    }
                }
                cardInDeck = true
            }
        })
        if (!cardInDeck) {
            const newCardTemp = newCard
            if (setCount) {
                newCardTemp.count = setCount
            } else {
                newCardTemp.count = 1
            }
            this.deck.push(newCardTemp)
        }
        this.deleteInvalidHeroCards()
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
            deck: [],
            hero: this.hero
        }


        this.deck.forEach((card) => {
            shrunkObject.deck.push({name: card.name, count: card.count})
        })

        return shrunkObject
    }

    setDeckFromCurrentURL() {
        const queryString = new URLSearchParams(window.location.search);
        let dataString = queryString.get('data');
        if (dataString === null) {
            this.hero = "Quincy"
            this.updateUiFn()
            return;
        }

        // Don't consider version for now
        dataString = dataString.substring(2);

        // Handle hero
        switch (Number(dataString[0])) {
            case 1:
            default:
                this.hero = "Quincy";
                break;
            case 2:
                this.hero = "Gwendolin";
                break;
            case 3:
                this.hero = "Obyn";
                break;
            case 4:
                this.hero = "Amelia";
                break;
            case 5:
                this.hero = "Adora";
                break;
        }
        dataString = dataString.substring(1)

        let currentCardID = ""
        let previousCardID = ""
        const dataStringClone = dataString
        for (const index in dataStringClone) {
            const character = dataStringClone[index]
            if (isNaN(character)) {
                if (character === "_") {
                    break;
                } else {
                    currentCardID += character
                    if (currentCardID.length >= 2) {
                        const fullCard = [...BLOONS, ...MONKEYS, ...POWERS].find(card => card.id === currentCardID)
                        let count = 1
                        const nextChar = dataStringClone[Number(index)+1]
                        if (!isNaN(nextChar)) {
                            count = Number(nextChar)
                        }

                        this.addCard(new Card(fullCard), count, false)
                        previousCardID = currentCardID
                        currentCardID = ""
                    }
                }
            }
            dataString = dataString.substring(1)
        }
        dataString = dataString.substring(1)
        this.deckName = dataString

        this.updateUiFn()
    }

    get length() {
        let totalCount = 0

        this.deck.forEach((card) => {
            totalCount += card.count
        })

        return totalCount
    }

    setHero(newValue) {
        this.hero = newValue
        this.deleteInvalidHeroCards()
        this.updateUiFn()
    }

    deleteInvalidHeroCards() {
        this.deck.forEach((card, index) => {
            if (card.hero !== this.hero && card.hero !== undefined) {
                delete this.deck[index]
            }
        })
    }

    countNumberOfCardsWithPropertyValue(propertyName, propertyValue) {
        let counter = 0

        this.deck.forEach((card) => {
            if (card[propertyName] === propertyValue) {
                counter += card.count
            }
        })

        return counter
    }

    cardCostDistribution() {
        const distribution = [0, 0, 0, 0, 0]

        this.deck.forEach((card) => {
            if (card.cost <= 2) {
                distribution[0] += card.count
            } else if (card.cost <= 4) {
                distribution[1] += card.count
            } else if (card.cost <= 6) {
                distribution[2] += card.count
            } else if (card.cost <= 9) {
                distribution[3] += card.count
            } else {
                distribution[4] += card.count
            }
        })

        return distribution
    }

    bloonCardCostDistribution() {
        const distribution = [0, 0, 0, 0, 0]

        this.deck.forEach((card) => {
            if (card.cardType === "bloon") {
                if (card.cost <= 2) {
                    distribution[0] += card.count
                } else if (card.cost <= 4) {
                    distribution[1] += card.count
                } else if (card.cost <= 6) {
                    distribution[2] += card.count
                } else if (card.cost <= 9) {
                    distribution[3] += card.count
                } else {
                    distribution[4] += card.count
                }
            }
        })

        return distribution
    }
}