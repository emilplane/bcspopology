export const events = {
    "onPopped": {
        "displayName": "On Popped",
        "description": (card) => {
            return `Triggers when this bloon is popped. Does not trigger if this bloon hits the opponent's hero.`
        },
    },
    "onDestroyed": {
        "displayName": "On Destroyed",
        "description": (card) => {
            return `Triggers when this bloon is popped, or when it hits the opponent's hero.`
        },
    },
    "onPlay": {
        "displayName": "On Play",
        "description": (card) => {
            return `Triggers when this card is played.`
        },
    },
    "onDamaged": {
        "displayName": "On Damaged",
        "description": (card) => {
            return `Triggers when this bloon is hit.`
        },
    },
    "onTurnStart": {
        "displayName": "On Turn Start",
        "description": (card) => {
            return ``
        },
    },
    "onLeaked": {
        "displayName": "On Leaked",
        "description": (card) => {
            return `Triggers when a bloon attacks your hero. This happens after your hero takes damage.`
        },
    },
    "onBloonPlayed": {
        "displayName": "On Bloon Played",
        "description": (card) => {
            return `Triggers when any Bloon card is played.`
        },
    },
    "whileOnBoard": {
        "displayName": "While On Board",
        "description": (card) => {
            return `A continuous effect that is active while this card is on the board.`
        },
    },
}