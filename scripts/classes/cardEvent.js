import {events} from "../../stats/events.js"
import {BLOONS, MONKEYS, POWERS} from "../../stats/stats.js"
import Element from "../element.js"
import Card from "./card.js"
import {popupCard} from "../popupCard.js";

export class CardEvent {
    constructor(data) {
        if (data instanceof CardEvent) {
            throw new Error("Cannot create CardEvent from CardEvent")
        }

        this.data = data

        this.trigger = events[data[0]]
        if (this.trigger === undefined) {
            this.trigger = { displayName: data[0], description: "" }
        }
        this.action = data[1]
    }

    get actionText() {
        if (typeof this.action === "string") {
            return this.action
        }
        switch (this.action.type) {
            case "spawn":
                const bloon = BLOONS.find(bloon => bloon.name === this.action.name)
                let name = this.action.name
                if (bloon !== undefined) {
                    name = bloon.displayName
                }
                return `Spawns a ${name}.`
            case "fillYourSide":
                const fillYourSideBloon = BLOONS.find(bloon => bloon.name === this.action.name)
                let fillYourSideName = this.action.name
                if (fillYourSideBloon !== undefined) {
                    fillYourSideName = fillYourSideBloon.displayName
                }
                return `Fills your side with ${fillYourSideName}s.`
            case "fillBothSides":
                const fillBothSidesBloon = BLOONS.find(bloon => bloon.name === this.action.name)
                let fillBothSidesName = this.action.name
                if (fillBothSidesBloon !== undefined) {
                    fillBothSidesName = fillBothSidesBloon.displayName
                }
                return `Fills both sides with ${fillBothSidesName}s.`
            case "drawCard":
                const card = [...BLOONS, ...MONKEYS, ...POWERS].find(bloon => bloon.name === this.action.name)
                let cardName = this.action.name
                if (card !== undefined) {
                    cardName = card.displayName
                }
                return `Draw a ${cardName} card.`
            case "drawCards":
                return `Draw ${this.action.value} card${this.action.value === 1 ? '' : 's'}.`
            case "gainGold":
                return `Gain +${this.action.value} gold.`
            case "gainHP":
                return `Gain +${this.action.value} HP.`
            case "gainHeroHP":
                return `Hero +${this.action.value} HP.`
            case "gainBloontonium":
                return `Gain +${this.action.value} Bloontonium.`
            case "gainAttackPower":
                return `Gain +${this.action.value} Attack Power.`
            case "gainAmmo":
                return `Gain +${this.action.value} Ammo.`
            case "gainShield":
                return `Hero +${this.action.value} Shield.`
        }

        return this.action
    }

    get actionElement() {
        const basicTextElement = new Element("p").text(this.actionText)
        if (typeof this.action === "string") {
            return basicTextElement
        }
        
        switch (this.action.type) {
            case "spawn":
                const bloon = BLOONS.find(bloon => bloon.name === this.action.name)
                let name = this.action.name
                if (bloon !== undefined) {
                    name = bloon.displayName
                }
                
                const toCardLink = new Element("span")
                    .class("openCardLink")
                    .text(name)

                toCardLink.onclick(() => popupCard(new Card(bloon)))

                return new Element("p").children(
                    new Element("span").text("Spawns a "),
                    toCardLink,
                    new Element("span").text(".")
                )
            case "fillYourSide":
                const fillYourSideBloon = BLOONS.find(bloon => bloon.name === this.action.name)
                let fillYourSideName = this.action.name
                if (fillYourSideBloon !== undefined) {
                    fillYourSideName = fillYourSideBloon.displayName
                }
                const fillYourSideToCardLink = new Element("span")
                    .class("openCardLink")
                    .text(fillYourSideName)

                fillYourSideToCardLink.onclick(() => popupCard(new Card(fillYourSideBloon)))
                return new Element("p").children(
                    new Element("span").text("Fills both sides with "),
                    fillYourSideToCardLink,
                    new Element("span").text("s.")
                )
            case "fillBothSides":
                const fillBothSidesBloon = BLOONS.find(bloon => bloon.name === this.action.name)
                let fillBothSidesName = this.action.name
                if (fillBothSidesBloon !== undefined) {
                    fillBothSidesName = fillBothSidesBloon.displayName
                }
                const fillBothSidesToCardLink = new Element("span")
                    .class("openCardLink")
                    .text(fillBothSidesName)

                fillBothSidesToCardLink.onclick(() => popupCard(new Card(fillBothSidesBloon)))
                return new Element("p").children(
                    new Element("span").text("Fills your side with "),
                    fillBothSidesToCardLink,
                    new Element("span").text("s.")
                )
            case "drawCards":
                return new Element("p").children(
                    new Element("span").text("Draw "),
                    new Element("span").text(this.action.value),
                    new Element("span").text(` card${this.action.value === 1 ? '' : 's'}.`)
                )
            case "gainGold":
                return new Element("p").children(
                    new Element("span").text("Gain +"),
                    new Element("span").text(this.action.value),
                    new Element("span").text(" gold.")
                )
            case "gainHP":
                return new Element("p").children(
                    new Element("span").text("Gain +"),
                    new Element("span").text(this.action.value),
                    new Element("span").text(" HP.")
                )
            case "gainHeroHP":
                return new Element("p").children(
                    new Element("span").text("Hero +"),
                    new Element("span").text(this.action.value),
                    new Element("span").text(" HP.")
                )
            case "gainBloontonium":
                return new Element("p").children(
                    new Element("span").text("Gain +"),
                    new Element("span").text(this.action.value),
                    new Element("span").text(" Bloontonium.")
                )
            case "gainAttackPower":
                return new Element("p").children(
                    new Element("span").text("Gain +"),
                    new Element("span").text(this.action.value),
                    new Element("span").text(" Attack Power.")
                )
            case "gainAmmo":
                return new Element("p").children(
                    new Element("span").text("Gain +"),
                    new Element("span").text(this.action.value),
                    new Element("span").text(" Ammo.")
                )
            case "gainShield":
                return new Element("p").children(
                    new Element("span").text("Hero +"),
                    new Element("span").text(this.action.value),
                    new Element("span").text(" Shield.")
                )
        }

        return basicTextElement
    }
}
