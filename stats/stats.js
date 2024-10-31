export const BLOONS = [
    // Red
    {
        "name": "redBloon", "displayName": "Red Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 0, "damage": 40, "delay": 1, "copies": 2,
    },
    {
        "name": "swarmRedBloon", "displayName": "Swarm Red Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 0, "damage": 20, "delay": 1, "copies": 3,
    },
    {
        "name": "doubleRedBloon", "displayName": "Double Red Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 2, "damage": 40, "delay": 1, "copies": 2,
        "attributes": ["double"]
    },
    // Blue
    {
        "name": "blueBloon", "displayName": "Blue Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 1, "damage": 60, "delay": 1, "copies": 2,
    },
    {
        "name": "nestedBlue", "displayName": "Nested Blue",
        "description": [],
        "events": [
            ["onPopped", {"type": "spawn", "name": "redBloon"}]
        ],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 1, "damage": 60, "delay": 1, "copies": 1,
    },
    {
        "name": "swarmBlueBloon", "displayName": "Swarm Blue Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 1, "damage": 50, "delay": 1, "copies": 3,
    },
    {
        "name": "doubleBlueBloon", "displayName": "Double Blue Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 60, "delay": 1, "copies": 2,
        "attributes": ["double"]
    },
    // Green
    {
        "name": "greenBloon", "displayName": "Green Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 2, "damage": 100, "delay": 1, "copies": 2,
    },
    {
        "name": "nestedGreen", "displayName": "Nested Green",
        "description": [],
        "events": [
            ["onPopped", {"type": "spawn", "name": "nestedBlue"}]
        ],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 2, "damage": 100, "delay": 1, "copies": 1,
    },
    {
        "name": "swarmGreenBloon", "displayName": "Swarm Green Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 2, "damage": 80, "delay": 1, "copies": 3,
    },
    {
        "name": "doubleGreenBloon", "displayName": "Double Green Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 4, "damage": 80, "delay": 1, "copies": 2,
        "attributes": ["double"]
    },
    // Yellow
    {
        "name": "yellowBloon", "displayName": "Yellow Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 140, "delay": 1, "copies": 2,
    },
    {
        "name": "nestedYellow", "displayName": "Nested Yellow",
        "description": [],
        "events": [
            ["onPopped", {"type": "spawn", "name": "nestedGreen"}]
        ],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 140, "delay": 1, "copies": 1,
    },
    {
        "name": "swarmYellowBloon", "displayName": "Swarm Yellow Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 115, "delay": 1, "copies": 3,
    },
    {
        "name": "doubleYellowBloon", "displayName": "Double Yellow Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 5, "damage": 110, "delay": 1, "copies": 2,
        "attributes": ["double"]
    },
    // Pink
    {
        "name": "pinkBloon", "displayName": "Pink Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 4, "damage": 100, "delay": 0, "copies": 1,
    },
    // White
    {
        "name": "whiteBloon", "displayName": "White Bloon",
        "description": [],
        "events": [
            {"type": "drawCards", "value": 1}
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 5, "damage": 100, "delay": 1, "copies": 2,
    },
    // Black
    {
        "name": "blackBloon", "displayName": "Black Bloon",
        "description": [],
        "events": [
            ["onDestroyed", {"type": "drawCards", "value": 1}]
        ],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 5, "damage": 130, "delay": 1, "copies": 2,
    },
    // Golden
    {
        "name": "goldenBloon", "displayName": "Golden Bloon",
        "description": [],
        "events": [
            ["onDamaged", {"type": "gainGold", "value": 1}],
        ],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 2, "damage": 70, "delay": 2, "copies": 2,
    },
    // Special
    {
        "name": "auraOfStrength", "displayName": "Aura of Strength Bloon",
        "description": [],
        "events": [
            ["onTurnStart", "Increase delay by 1. Gives another random friendly bloon +50HP."],
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 100, "delay": 4, "copies": 2,
    },
    {
        "name": "steadyGrowthBloon", "displayName": "Steady Growth Bloon",
        "description": [],
        "events": [
            ["onTurnStart", {"type": "gainHP", "value": 50}],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 3, "damage": 100, "delay": 3, "copies": 2,
    },
    {
        "name": "emboldenedBloon", "displayName": "Emboldened Bloon",
        "description": ["Costs 1 less per Bloon you control"],
        "events": [],
    
        "cardType": "bloon",
        "type": "large",
        "cost": 8, "damage": 300, "delay": 3, "copies": 1,
    },
    {
        "name": "setupBloon", "displayName": "Setup Bloon",
        "description": [],
        "events": [
            ["onLeaked", "Reduce cost of a random bloon in your hand by 1."]
        ],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 2, "damage": 20, "delay": 0, "copies": 1,
    },
    {
        "name": "stunGasBloon", "displayName": "Stun Gas Bloon",
        "description": [],
        "events": [
            ["onDamaged", "Stun attacking monkey for 1 turn."],
        ],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 100, "delay": 2, "copies": 2,
    },
    {
        "name": "shieldGasBloon", "displayName": "Shield Gas Bloon",
        "description": [],
        "events": [
            ["onDamaged", "Random friendly bloon gains 30 shield."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 4, "damage": 150, "delay": 3, "copies": 2,
    },
    {
        "name": "bloontoniumGasBloon", "displayName": "Bloontonium Gas Bloon",
        "description": [],
        "events": [
            ["onDamaged", {"type": "gainBloontonium", "value": 1}],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 3, "damage": 150, "delay": 2, "copies": 2,
    },
    {
        "name": "weakeningGasBloon", "displayName": "Weakening Gas Bloon",
        "description": [],
        "events": [
            ["onDamaged", "Lower attacking monkey's attack power by 5."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 7, "damage": 300, "delay": 4, "copies": 1,
    },
    {
        "name": "volatileBloon", "displayName": "Volatile Bloon",
        "description": [],
        "events": [
            ["onPopped", "Deal 100 damage to all Bloons."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 3, "damage": 200, "delay": 2, "copies": 1,
    },
    {
        "name": "bolsteredBloon", "displayName": "Bolstered Bloon",
        "description": [],
        "events": [
            ["onBloonPlayed", {"type": "gainHP", "value": 30}],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 4, "damage": 200, "delay": 2, "copies": 1, "shield": 100,
    },
    {
        "name": "buddyBloon", "displayName": "Buddy Bloon",
        "description": [],
        "events": [
            ["whileOnBoard", "Reduces enemy Attack Power to 0."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 4, "damage": 50, "delay": 2, "copies": 1, "shield": 150,
    },
    {
        "name": "toxicBloon", "displayName": "Toxic Bloon",
        "description": [],
        "events": [
            ["onPopped", "Remove attacking Monkey."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 4, "damage": 100, "delay": 2, "copies": 1,
    },
    {
        "name": "discountBloon", "displayName": "Discount Bloon",
        "description": [],
        "events": [
            ["onPlay", "Reduces cost of Discount Bloons in hand by 1."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 5, "damage": 100, "delay": 2, "copies": 3,
    },
    {
        "name": "drainingBloon", "displayName": "Draining Bloon",
        "description": [],
        "events": [
            ["onPlay", "Drains all Bloontonium, gains 30 shield per Bloontonium drained"],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 5, "damage": 200, "delay": 3, "copies": 1,
    },
    {
        "name": "hasteningBloon", "displayName": "Hastening Bloon",
        "description": [],
        "events": [
            ["onPlay", "Reduces the delay of a random friendly bloon by 1."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 6, "damage": 150, "delay": 2, "copies": 1,
    },
    {
        "name": "healingBloon", "displayName": "Healing Bloon",
        "description": [],
        "events": [
            ["onPlay", "Gives all friendly Bloons +50HP."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 6, "damage": 200, "delay": 2, "copies": 2,
    },
    {
        "name": "strengthenator", "displayName": "Strengthenator",
        "description": [],
        "events": [
            ["onTurnStart", "Increase delay by 1. Gives all friendly Bloons besides self +20HP."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 2, "damage": 150, "delay": 7, "copies": 1,
    },
    // Zebra
    {
        "name": "zebraBloon", "displayName": "Zebra Bloon",
        "description": [],
        "events": [
            ["onPlay", {"type": "drawCards", "value": 1}],
            ["onDestroyed", {"type": "drawCards", "value": 1}],
        ],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 8, "damage": 150, "delay": 2, "copies": 2,
    },
    // Rainbow
    {
        "name": "rainbowBloon", "displayName": "Rainbow Bloon",
        "description": [],
        "events": [],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 8, "damage": 400, "delay": 3, "copies": 2,
    },
    {
        "name": "doubleRainbowBloon", "displayName": "Double Rainbow Bloon",
        "description": [],
        "events": [],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 10, "damage": 350, "delay": 3, "copies": 2,
        "attributes": ["double"]
    },
    // Ceramics
    {
        "name": "ceramicBloon", "displayName": "Ceramic Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 5, "damage": 250, "delay": 2, "copies": 2,
    },
    {
        "name": "doubleCeramicBloon", "displayName": "Double Ceramic Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 7, "damage": 220, "delay": 2, "copies": 2,
        "attributes": ["double"]
    },
    // MOAB-Class
    {
        "name": "damagedMoab", "displayName": "Damaged MOAB",
        "description": [],
        "events": [
            ["onPlay", "Deal 150 damage to this bloon."],
        ],
    
        "cardType": "bloon",
        "type": "large",
        "cost": 4, "damage": 500, "delay": 4, "copies": 1,
    },
    {
        "name": "moab", "displayName": "MOAB",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "large",
        "cost": 6, "damage": 500, "delay": 4, "copies": 2,
    },
    {
        "name": "bfb", "displayName": "BFB",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "large",
        "cost": 7, "damage": 600, "delay": 4, "copies": 2,
    },
    {
        "name": "zomg", "displayName": "ZOMG",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "large",
        "cost": 10, "damage": 800, "delay": 5, "copies": 1,
    }
]

export const MONKEYS = [
    {
        "name": "dartMonkey", "displayName": "Dart Monkey",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 0, "damage": 40, "delay": 1, "copies": 2,
    }
]

export const POWERS = [
    {
        "name": "bloontoniumCache", "displayName": "Bloontonium Cache",
        "description": [],
        "events": [],
    
        "cardType": "power",
        "type": "basic",
        "cost": 0, "copies": 1,
    },
    {
        "name": "cashDrop", "displayName": "Cash Drop",

    }
]