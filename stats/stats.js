export const BLOONS = [
    // Red
    {
        "name": "redBloon", "displayName": "Red Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 0, "damage": 40, "delay": 1, "copies": 2,
    },
    {
        "name": "swarmRedBloon", "displayName": "Swarm Red Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 0, "damage": 20, "delay": 1, "copies": 3,
    },
    {
        "name": "doubleRedBloon", "displayName": "Double Red Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 2, "damage": 30, "delay": 1, "copies": 2,
        "attributes": ["double"]
    },
    // Blue
    {
        "name": "blueBloon", "displayName": "Blue Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 1, "damage": 60, "delay": 1, "copies": 2,
    },
    {
        "name": "nestedBlue", "displayName": "Nested Blue",
        "description": [],
        "events": [
            ["On Popped", "Spawns a Red Bloon"]
        ],
    
        "cardType": "bloon",
        "cost": 1, "damage": 60, "delay": 1, "copies": 1,
    },
    {
        "name": "swarmBlueBloon", "displayName": "Swarm Blue Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 1, "damage": 50, "delay": 1, "copies": 3,
    },
    {
        "name": "doubleBlueBloon", "displayName": "Double Blue Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 3, "damage": 45, "delay": 1, "copies": 3,
        "attributes": ["double"]
    },
    // Green
    {
        "name": "greenBloon", "displayName": "Green Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 2, "damage": 100, "delay": 1, "copies": 2,
    },
    {
        "name": "nestedGreen", "displayName": "Nested Green",
        "description": [],
        "events": [
            ["On Popped", "Spawns a Nested Blue"]
        ],
    
        "cardType": "bloon",
        "cost": 1, "damage": 60, "delay": 1, "copies": 1,
    },
    {
        "name": "swarmGreenBloon", "displayName": "Swarm Green Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 1, "damage": 50, "delay": 1, "copies": 3,
    },
    {
        "name": "doubleGreenBloon", "displayName": "Double Green Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 3, "damage": 45, "delay": 1, "copies": 3,
        "attributes": ["double"]
    },
    // Yellow
    {
        "name": "yellowBloon", "displayName": "Yellow Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 3, "damage": 150, "delay": 1, "copies": 2,
    },
    {
        "name": "nestedYellow", "displayName": "Nested Yellow",
        "description": [],
        "events": [
            ["On Popped", "Spawns a Nested Green"]
        ],
    
        "cardType": "bloon",
        "cost": 3, "damage": 130, "delay": 1, "copies": 1,
    },
    {
        "name": "swarmYellowBloon", "displayName": "Swarm Yellow Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 3, "damage": 115, "delay": 1, "copies": 3,
    },
    {
        "name": "doubleYellowBloon", "displayName": "Double Yellow Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 5, "damage": 110, "delay": 1, "copies": 2,
        "attributes": ["double"]
    },
    // Pink
    {
        "name": "pinkBloon", "displayName": "Pink Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 4, "damage": 100, "delay": 0, "copies": 1,
    },
    // White
    {
        "name": "whiteBloon", "displayName": "White Bloon",
        "description": [],
        "events": [
            ["On Play", "Draw a card"],
        ],
    
        "cardType": "bloon",
        "cost": 5, "damage": 100, "delay": 1, "copies": 2,
    },
    // Black
    {
        "name": "blackBloon", "displayName": "Black Bloon",
        "description": [],
        "events": [
            ["On Destroyed", "Draw a card"],
        ],

        "cardType": "bloon",
        "cost": 5, "damage": 130, "delay": 1, "copies": 2,
    },
    // Golden
    {
        "name": "goldenBloon", "displayName": "Golden Bloon",
        "description": [],
        "events": [
            ["On Damaged", "+1 gold"],
        ],

        "cardType": "bloon",
        "cost": 2, "damage": 70, "delay": 2, "copies": 2,
    },
    // Special
    {
        "name": "auraOfStrength", "displayName": "Aura of Strength Bloon",
        "description": [],
        "events": [
            ["On Turn Start", "Increase delay by 1. Gives another random friendly bloon +50HP"],
        ],

        "cardType": "bloon",
        "cost": 2, "damage": 70, "delay": 2, "copies": 2,
    },
    {
        "name": "steadyGrowthBloon", "displayName": "Steady Growth Bloon",
        "description": [],
        "events": [
            ["On Turn Start", "Gains +50HP"],
        ],
    
        "cardType": "bloon",
        "cost": 3, "damage": 100, "delay": 3, "copies": 2,
    },
    {
        "name": "emboldenedBloon", "displayName": "Emboldened Bloon",
        "description": ["Costs 1 less per Bloon you control"],
        "events": [],
    
        "cardType": "bloon",
        "cost": 8, "damage": 300, "delay": 3, "copies": 2,
    },
    // Zebra
    {
        "name": "zebraBloon", "displayName": "Zebra Bloon",
        "description": [],
        "events": [
            ["On Play", "Draw a card"],
            ["On Destroyed", "Draw a card"],
        ],

        "cardType": "bloon",
        "cost": 8, "damage": 150, "delay": 2, "copies": 2,
    },
    // Rainbow
    {
        "name": "rainbowBloon", "displayName": "Rainbow Bloon",
        "description": [],
        "events": [],

        "cardType": "bloon",
        "cost": 8, "damage": 400, "delay": 3, "copies": 2,
    },
    {
        "name": "doubleRainbowBloon", "displayName": "Double Rainbow Bloon",
        "description": [],
        "events": [],

        "cardType": "bloon",
        "cost": 10, "damage": 350, "delay": 3, "copies": 2,
        "attributes": ["double"]
    },
    // Ceramics
    {
        "name": "ceramicBloon", "displayName": "Ceramic Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 5, "damage": 250, "delay": 2, "copies": 3,
    },
    {
        "name": "doubleCeramicBloon", "displayName": "Double Ceramic Bloon",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 7, "damage": 220, "delay": 2, "copies": 2,
        "attributes": ["double"]
    },
    // MOAB-Class
    {
        "name": "moab", "displayName": "MOAB",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 6, "damage": 500, "delay": 4, "copies": 2,
    },
    {
        "name": "bfb", "displayName": "BFB",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "cost": 7, "damage": 600, "delay": 4, "copies": 2,
    },
    {
        "name": "zomg", "displayName": "ZOMG",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
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
        "description": ["Gain 5 Bloontonium."],
        "events": [],
    
        "cardType": "power",
        "cost": 0, "copies": 1,
    }
]