import { events } from "../../stats/events.js"
import { BLOONS } from "../../stats/stats.js"
import Element from "../element.js"
import { popupCard } from "../popology.js"
import Card from "./card.js"

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
            case "drawCards":
                return `Draw ${this.action.value} card${this.action.value === 1 ? '' : 's'}.`
            case "gainGold":
                return `Gain +${this.action.value} gold.`
            case "gainHP":
                return `Gain +${this.action.value} HP.`
            case "gainBloontonium":
                return `Gain +${this.action.value} Bloontonium.`
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
                
                const element = new Element("p").children(
                    new Element("span").text("Spawns a "),
                    toCardLink,
                    new Element("span").text(".")
                )

                return element
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
            case "gainBloontonium":
                return new Element("p").children(
                    new Element("span").text("Gain +"),
                    new Element("span").text(this.action.value),
                    new Element("span").text(" Bloontonium.")
                )
        }

        return basicTextElement
    }
}
