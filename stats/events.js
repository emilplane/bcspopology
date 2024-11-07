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
    "onPop": {
        "displayName": "On Pop",
        "description": (card) => {
            return `Triggers when this tower pops a bloon.`
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
    "onAttack": {
        "displayName": "On Attack",
        "description": (card) => {
            return `Triggers when this Monkey attacks.`
        },
    },
    "onTurnStart": {
        "displayName": "On Turn Start",
        "description": (card) => {
            return ``
        },
    },
    "onGoldGained": {
        "displayName": "On Gold Gained",
        "description": (card) => {
            return ``
        },
    },
    "perGoldGained": {
        "displayName": "Per Gold Gained",
        "description": (card) => {
            return `Triggers once per gold gained from any source. Does not trigger for gold that overflows the gold cap.`
        },
    },
    "onTurnEnd": {
        "displayName": "On Turn End",
        "description": (card) => {
            return ``
        },
    },
    "onLeak": {
        "displayName": "On Leak",
        "description": (card) => {
            return `Triggers when a bloon attacks your hero. This happens after your hero takes damage.`
        },
    },
    "onReload": {
        "displayName": "On Reload",
        "description": (card) => {
            return `Triggers when this tower reloads.`
        },
    },
    "onBloonPlayed": {
        "displayName": "On Bloon Played",
        "description": (card) => {
            return `Triggers when any Bloon card is played.`
        },
    },
    "onOpponentDraw": {
        "displayName": "On Opponent Draw",
        "description": (card) => {
            return `Triggers when the opponent draws a card.`
        },
    },
    "whileOnBoard": {
        "displayName": "While On Board",
        "description": (card) => {
            return `A continuous effect that is active while this card is on the board.`
        },
    },
    "duringTurn": {
        "displayName": "During your turn",
        "description": (card) => {
            return `A continuous effect that is active during your turn.`
        },
    },
    "duringOpponentTurn": {
        "displayName": "During opponent's turn",
        "description": (card) => {
            return `A continuous effect that is active during your opponent's turn.`
        },
    },
}