export const attributes = {
    "double": {
        "displayName": "Double Attack",
        "description": (card) => {
            return `This bloon attacks twice. This means that, at full health, it will deal ${card.damage * 2} damage instead of ${card.damage} damage. Also, cards such as Fortify work for both times this bloon attacks.`
        },
    }

}