export const attributes = {
    "double": {
        "displayName": "Double Attack",
        "description": (card) => {
            return `This bloon attacks twice. This means that, at full health, it will deal ${card.damage * 2} damage instead of ${card.damage} damage. Also, cards such as Fortify work for both times this bloon attacks.`
        },
    },
    "normalAttacksDisabled": {
        "displayName": "Does not attack normally",
        "description": () => {
            return `This card does not attack with a standard, user-controllable attack. It will attack at a different time, by itself.`
        },
    },
    "cantAttack": {
        "displayName": "Can't attack",
        "description": () => {
            return `This card does not attack at all, and does something else instead.`
        },
    }
}