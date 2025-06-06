import {BLOONS, MONKEYS, POWERS} from "./stats.js";
import Element from "../scripts/element.js";
import {popupCard} from "../scripts/popupCard.js";
import Card from "../scripts/classes/card.js";

class CardAction {
    constructor(options) {
        this.options = options;
    }

    #runLogic(action) {
        return this.options.logicFn ? this.options.logicFn(action) : {};
    }

    getElement(action) {
        if (this.options.elementFn && typeof this.options.elementFn === "function") {
            return this.options.elementFn(this.#runLogic(action), action);
        } else {
            return new Element("p").text(this.getString(action));
        }
    }

    getString(action) {
        if (this.options.stringFn && typeof this.options.stringFn === "function") {
            return String(this.options.stringFn(this.#runLogic(action), action));
        }
        return ""
    }
}

export function getAction(actionName) {
    let cardAction = ACTIONS[actionName]
    if (!cardAction) {
        console.warn(`Unknown action ${actionName}`)
        cardAction = ACTIONS.unknownAction
    }
    return cardAction
}

export const ACTIONS = {
    "unknownAction": new CardAction({
        "stringFn": () => {
            return `unknown action.`
        }
    }),
    "if": new CardAction({
        "logicFn": (action) => {
            const conditionData = action.value.condition
            const actionData = action.value.action

            const conditionTrueAction = getAction(actionData.type)
            const condition = getCondition(conditionData.type)

            return {condition, conditionTrueAction};
        },
        "elementFn": (logic, action) => {
            const conditionString = logic.condition.getString(action.value.condition)
            const conditionTrueActionElement = logic.conditionTrueAction.getElement(action.value.action)
            conditionTrueActionElement.element.style.paddingLeft = "12px"

            return new Element("p").children(
                new Element("span").text(`If (${conditionString}):`),
                conditionTrueActionElement
            )
        },
        "stringFn": (logic, action) => {
            const conditionString = logic.condition.getString(action.value.condition)
            const conditionTrueActionString = logic.conditionTrueAction.getString(action.value.action)
            return `If ${conditionString}, then: ${conditionTrueActionString}`
        }
    }),
    "spawn": new CardAction({
        "logicFn": (action) => {
            const bloon = BLOONS.find(bloon => bloon.name === action.name)
            let name = action.name
            if (bloon !== undefined) name = bloon.displayName
            return { bloon, name }
        },
        "elementFn": (logic) => {
            const toCardLink = new Element("span")
                .class("openCardLink")
                .text(logic.name)

            toCardLink.onclick(() => popupCard(new Card(logic.bloon)))

            return new Element("p").children(
                new Element("span").text("Spawns a "),
                toCardLink,
                new Element("span").text("")
            )
        },
        "stringFn": (logic) => {
            return `Spawns a ${logic.name}`
        }
    }),
    "fillYourSide": new CardAction({
        "logicFn": (action) => {
            const bloon = BLOONS.find(bloon => bloon.name === action.name)
            let name = action.name
            if (bloon !== undefined) name = bloon.displayName
            return { bloon, name }
        },
        "elementFn": (logic) => {
            const toCardLink = new Element("span")
                .class("openCardLink")
                .text(logic.name)

            toCardLink.onclick(() => popupCard(new Card(logic.bloon)))
            return new Element("p").children(
                new Element("span").text("Fills your side with "),
                toCardLink,
                new Element("span").text("s")
            )
        },
        "stringFn": (logic) => {
            return `Fills your side with ${logic.name}s`
        }
    }),
    "fillBothSides": new CardAction({
        "logicFn": (action) => {
            const bloon = BLOONS.find(bloon => bloon.name === action.name)
            let name = action.name
            if (bloon !== undefined) name = bloon.displayName
            return { bloon, name }
        },
        "elementFn": (logic) => {
            const toCardLink = new Element("span")
                .class("openCardLink")
                .text(logic.name)

            toCardLink.onclick(() => popupCard(new Card(logic.bloon)))
            return new Element("p").children(
                new Element("span").text("Fills both sides with "),
                toCardLink,
                new Element("span").text("s")
            )
        },
        "stringFn": (logic) => {
            return `Fills both sides with ${logic.name}s`
        }
    }),
    "addCard": new CardAction({
        "logicFn": (action) => {
            const card = [...BLOONS, ...MONKEYS, ...POWERS].find(bloon => bloon.name === action.name)
            let cardName = action.name
            if (card !== undefined) cardName = card.displayName
            return { card, cardName }
        },
        "elementFn": (logic) => {
            const toDrawnCardLink = new Element("span")
                .class("openCardLink")
                .text(logic.cardName)

            toDrawnCardLink.onclick(() => popupCard(new Card(logic.card)))

            return new Element("p").children(
                new Element("span").text("Add a "),
                toDrawnCardLink,
                new Element("span").text(" card to your hand")
            )
        },
        "stringFn": (logic) => {
            return `Add a ${logic.cardName} card to your hand`
        }
    }),
    "drawCards": new CardAction({
        "stringFn": (logic, action) => {
            return `Draw ${action.value} card${action.value === 1 ? '' : 's'}`
        }
    }),
    "gainGold": new CardAction({
        "stringFn": (logic, action) => {
            return `Gain +${action.value} gold`
        }
    }),
    "gainHP": new CardAction({
        "stringFn": (logic, action) => {
            return `Gain +${action.value} HP`
        }
    }),
    "gainHeroHP": new CardAction({
        "stringFn": (logic, action) => {
            return `Hero +${action.value} HP`
        }
    }),
    "gainBloontonium": new CardAction({
        "stringFn": (logic, action) => {
            return `Gain +${action.value} Bloontonium`
        }
    }),
    "gainAttackPower": new CardAction({
        "stringFn": (logic, action) => {
            return `Gain +${action.value} Attack Power`
        }
    }),
    "gainAmmo": new CardAction({
        "stringFn": (logic, action) => {
            return `Gain +${action.value} Ammo`
        }
    }),
    "gainShield": new CardAction({
        "stringFn": (logic, action) => {
            return `Hero +${action.value} Shield`
        }
    }),
    "gainArmor": new CardAction({
        "stringFn": (logic, action) => {
            return `Gain +${action.value} Armor`
        }
    }),
    "armorOtherBloons": new CardAction({
        "stringFn": (logic, action) => {
            return `Other bloons gain +${action.value} Armor`
        }
    }),
    "damageFirstEnemy": new CardAction({
        "stringFn": (logic, action) => {
            return `Deal ${action.value} damage to first enemy Bloon`
        }
    }),
    "reduceDelayLastEnemyBloon": new CardAction({
        "stringFn": (logic, action) => {
            return `Reduce the delay of the last enemy Bloon by ${action.value}`
        }
    }),
    "destroyTargetBloon": new CardAction({
        "stringFn": (logic, action) => {
            return `Destroy targeted Bloon`
        }
    }),
    "bonusDamage": new CardAction({
        "stringFn": (logic, action) => {
            return `Deal +${action.value} bonus damage`
        }
    }),
    "summonAcidPool": new CardAction({
        "stringFn": (logic, action) => {
            if (action.strong) {
                return `Summon Strong Acid Pool on the target Bloon's space`
            }
            return `Summon Acid Pool on the target Bloon's space`
        }
    }),
    "convertTargetBloon": new CardAction({
        "logicFn": (action) => {
            const card = [...BLOONS, ...MONKEYS, ...POWERS].find(bloon => bloon.name === action.name)
            let cardName = action.name
            if (card !== undefined) cardName = card.displayName
            return { card, cardName }
        },
        "elementFn": (logic) => {
            const toDrawnCardLink = new Element("span")
                .class("openCardLink")
                .text(logic.cardName)

            toDrawnCardLink.onclick(() => popupCard(new Card(logic.card)))

            return new Element("p").children(
                new Element("span").text("Convert target Bloon into a "),
                toDrawnCardLink,
                new Element("span").text(".")
            )
        },
        "stringFn": (logic) => {
            return `Convert target Bloon into a ${logic.cardName}.`
        }
    }),
}

export function getCondition(conditionName) {
    let cardCondition = CONDITIONS[conditionName]
    if (!cardCondition) {
        console.warn(`Unknown condition ${conditionName}`)
        cardCondition = CONDITIONS.unknownCondition
    }
    return cardCondition
}


export const CONDITIONS = {
    "unknownCondition": new CardAction({
        "stringFn": () => {
            return `unknown condition`
        }
    }),
    "lastPlayedCardType": new CardAction({
        "stringFn": (logic, action) => {
            return `last played card was a ${action.value}`
        }
    }),
    "targetType": new CardAction({
        "stringFn": (logic, action) => {
            return `target is of type ${action.value}`
        }
    }),
    "targetHasArmor": new CardAction({
        "stringFn": () => {
            return `target has armor`
        }
    }),
}