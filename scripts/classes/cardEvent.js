import {events} from "../../stats/events.js"
import {BLOONS, MONKEYS, POWERS} from "../../stats/stats.js"
import Element from "../element.js"
import Card from "./card.js"
import {popupCard} from "../popupCard.js";
import {ACTIONS, getAction} from "../../stats/actions.js";

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
        return this.#parseAction()
    }

    get actionElement() {
        return this.#parseAction(true)
    }

    #parseAction(asElement = false) {
        if (typeof this.action === "string") {
            if (asElement) return new Element("p").text(this.actionText)
            return this.action
        }

        const cardAction = getAction(this.action.type)

        if (asElement) {
            return cardAction.getElement(this.action)
        }
        return cardAction.getString(this.action)
    }
}