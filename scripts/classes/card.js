import { attributes } from "../../stats/attributes.js"
import { CardEvent } from "./cardEvent.js"

export default class Card {
    constructor(blueprint) {
        this.blueprint = Object.freeze(structuredClone(blueprint))
        
        if (this.blueprint.name === undefined) {
            throw Error("Card has no internal name!")
        }
        this.name = this.blueprint.name
        
        if (this.blueprint.cardType === undefined) {
            throw Error("Card has no cardType!")
        }
        this.cardType = this.blueprint.cardType
        
        if (this.blueprint.type === undefined) {
            throw Error("Card has no type!")
        }
        this.type = this.blueprint.type
        
        if (this.blueprint.cost === undefined) {
            throw Error("Card has no cost!")
        }
        this.cost = this.blueprint.cost
        
        if (this.blueprint.copies === undefined) {
            throw Error("Card has no specified number of copies!")
        }
        this.copies = this.blueprint.copies
        
    }

    /**
     * Returns the display name of the card.
     * @returns {string}
     */
    get displayName() {
        if (this.blueprint.displayName === undefined) {
            return "Unnamed Card"
        }
        return this.blueprint.displayName
    }

    /**
     * Returns the description text lines of the card.
     * @returns {string[]}
     */
    get descriptionTextLines() {
        let lines = []
        if (Array.isArray(this.blueprint.description)) {
            lines = structuredClone(this.blueprint.description)
        }

        this.events.forEach(event => {
            lines.push(`${event.trigger.displayName}: ${event.actionText}`);
        });

        this.attributes.forEach(attribute => {
            // console.log(this.attributes)
            lines.push(attribute.displayName);
        });

        return lines
    }

    /**
     * Returns the description text of the card.
     * @returns {string}
     */
    get descriptionText() {
        return this.descriptionTextLines.join("\n")
    }

    /**
     * Returns the events of the card.
     * @returns {CardEvent[]}
     */
    get events() {
        if (this.blueprint.events === undefined) {
            return []
        }

        const eventArray = []

        for (const event of this.blueprint.events) {
            // console.log(event)
            if (Array.isArray(event)) {
                eventArray.push(new CardEvent(event))
            } else {
                eventArray.push(new CardEvent(["onPlay", event]))
            }
        }

        return eventArray
    }

    /**
     * Returns the damage of the card.
     * @returns {number}
     */
    get damage() {
        return this.blueprint.damage
    }

    /**
     * Returns the delay of the card.
     * @returns {number}
     */
    get delay() {
        return this.blueprint.delay
    }

    /**
     * Returns the shield of the card.
     * @returns {number}
     */
    get shield() {
        return this.blueprint.shield
    }

    /**
     * Returns the attributes of the card.
     * @returns {object[]}
     */
    get attributes() {
        if (this.blueprint.attributes === undefined) {
            return []
        }

        const attributeArray = []

        this.blueprint.attributes.forEach(attributeName => {
            const attributeData = attributes[attributeName]
            attributeData.name = attributeName
            attributeArray.push(attributeData)
        })

        return attributeArray
    }
}