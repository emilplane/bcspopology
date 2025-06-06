import { attributes } from "../../stats/attributes.js"
import { CardEvent } from "./cardEvent.js"

export default class Card {
    constructor(blueprint) {
        this.blueprint = Object.freeze(structuredClone(blueprint))

        if (this.blueprint.id === undefined) {
            throw Error("Card has no ID!")
        } else {
            this.id = this.blueprint.id
        }
        
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

        this.purchaseCurrency = "gold"
        if (this.blueprint.purchaseCurrency === "bloontonium") {
            this.purchaseCurrency = "bloontonium"
        }

        if (this.blueprint.copies === undefined) {
            this.copies = 1
        } else {
            this.copies = this.blueprint.copies
        }

        this.hero = this.blueprint.hero
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
            if (this.cardType === "power" && event.trigger.displayName === "On Play") {
                lines.push(event.actionText);
            } else {
                lines.push(`${event.trigger.displayName}: ${event.actionText}`);
            }
        });

        this.attributes.forEach(attribute => {
            lines.push(attribute.displayName);
        });

        if (Array.isArray(this.blueprint.damage)) {
            if (this.blueprint.damage[0] !== 0 && this.blueprint.damage[2] !== 0) {
                lines.push(`Does ${this.blueprint.damage[0]} damage to adjacent bloons.`);
            } else {
                if (this.blueprint.damage[0] !== 0) {
                    lines.push(`Does ${this.blueprint.damage[0]} damage to the previous bloon.`);
                }
                if (this.blueprint.damage[2] !== 0) {
                    lines.push(`Does ${this.blueprint.damage[2]} damage to the next bloon.`);
                }
            }
        }

        if (this.isOnFire) lines.push(`Applies fire: ${this.fire} damage per turn`)

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

        return eventArray;
    }

    /**
     * Returns the damage of the card.
     * @returns {number}
     */
    get damage() {
        if (Array.isArray(this.blueprint.damage)) return this.blueprint.damage[1];
        return this.blueprint.damage;
    }

    /**
     * Returns the ammo of the card.
     * @returns {number}
     */
    get ammo() {
        return this.blueprint.ammo;
    }

    /**
     * Returns the delay of the card.
     * @returns {number}
     */
    get delay() {
        return this.blueprint.delay;
    }

    /**
     * Returns the shield of the card.
     * @returns {number}
     */
    get shield() {
        return this.blueprint.shield;
    }

    /**
     * Returns the defender bonus damage of the card.
     * @returns {number}
     */
    get defender() {
        return this.blueprint.defender;
    }

    /**
     * Returns the armor of the card.
     * @returns {number}
     */
    get armor() {
        return this.blueprint.armor;
    }

    /**
     * Whether this card has the fire property.
     * @returns {boolean}
     */
    get isOnFire() {
        return !!this.blueprint.fire;
    }

    /**
     * Returns the burn damage of this card.
     * @returns {number}
     */
    get fire() {
        return this.blueprint.fire;
    }

    /**
     * Returns the tower of the card, if present.
     * @returns {number}
     */
    get tower() {
        if (this.blueprint.tower === undefined || this.blueprint.cardType !== "monkey") {
            return undefined
        }
        return this.blueprint.tower;
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

    /**
     * Checks whether this card has the given attribute.
     * @param attributeName
     * @returns {boolean}
     */
    hasAttribute(attributeName) {
        if (this.blueprint.attributes === undefined) return false
        return this.blueprint.attributes.includes(attributeName);
    }

    /**
     * Returns the alias names of the card.
     * @returns {*[]}
     */
    get aliases() {
        if (this.blueprint.aliases === undefined) {
            return []
        }
        return this.blueprint.aliases
    }

    searchInCard(query) {
        const propertiesToSearch = [
            this.name, this.displayName, this.tower, ...this.aliases
        ];


        const results = propertiesToSearch.map(property => Number(Card.searchAlgorithm(query, property) || 0));

        const deprioritizedPropertiesToSearch = [
            this.descriptionText, this.type
        ];

        let deprioritizedResults = deprioritizedPropertiesToSearch.map(property => Card.searchAlgorithm(query, property));
            deprioritizedResults = deprioritizedResults           .map(num      => Math.min(num, 1));

        return Math.max(...results, ...deprioritizedResults)
    }

    static searchAlgorithm(query, property) {
        if (property === undefined || query === undefined) return 0;
        const lowerQuery = query.toLowerCase();
        const lowerName = property.toLowerCase();

        // Check for a straightforward, case-insensitive substring match
        if (lowerName.includes(lowerQuery)) {
            return 2; // Direct match, spaces preserved
        }

        // Helper function to check if all letters in query appear in sequence within the name, ignoring spaces
        const matchesShortcut = () => {
            const queryNoSpaces = lowerQuery.replace(/\s+/g, ''); // Remove spaces from query
            const nameNoSpaces = lowerName.replace(/\s+/g, ''); // Remove spaces from property
            let queryIndex = 0;

            for (let char of nameNoSpaces) {
                if (char === queryNoSpaces[queryIndex]) {
                    queryIndex++;
                    if (queryIndex === queryNoSpaces.length) return true;
                }
            }
            return false;
        };

        // Check if it matches as a flexible shortcut
        if (matchesShortcut()) {
            return 1;
        }

        // No match
        return 0;
    }

}