export const attributes = {
    "double": {
        "displayName": "Double Attack",
        "description": (card) => {
            return `This bloon attacks twice. This means that, at full health, it will deal ${card.damage * 2} damage instead of ${card.damage} damage. Also, cards such as Fortify work for both times this bloon attacks.`
        },
    },
    "triple": {
        "displayName": "Triple Attack",
        "description": (card) => {
            return `This bloon attacks three times. This means that, at full health, it will deal ${card.damage * 3} damage instead of ${card.damage} damage. Also, cards such as Fortify work for all three times this bloon attacks.`
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
    },
    "unique": {
        "displayName": "Unique",
        "description": () => {
            return `You can only add one copy of this card to your deck.`
        },
    },
    "targetIsDoomed": {
        "displayName": "Target is Doomed",
        "description": () => {
            return `This monkey is removed at the start of its next turn.`
        },
    },
    "enemyBloonsCannotAttack": {
        "displayName": "Enemy Bloons cannot attack",
        "description": () => {
            return `Enemy Bloons cannot attack when they have zero delay while this card is in play. If an enemy Bloon has zero delay, it stays at zero.`
        },
    },
    "mustPop": {
        "displayName": "Must pop",
        "description": () => {
            return `Monkeys must attack this Bloon before other Bloons`
        },
    },
    "temporary": {
        "displayName": "Temporary",
        "description": () => {
            return `Is removed at the end of the turn if Ammo has reached 0`
        },
    },
    "armorPiercing": {
        "displayName": "Armor-piercing",
        "description": () => {
            return `Affected Bloons lose all Armor`
        },
    }
}