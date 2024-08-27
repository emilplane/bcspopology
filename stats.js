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
        "description": ["Double Attack"],
        "events": [],
    
        "cardType": "bloon",
        "cost": 2, "damage": 30, "delay": 1, "copies": 2,
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
        "description": ["Double Attack"],
        "events": [],
    
        "cardType": "bloon",
        "cost": 3, "damage": 45, "delay": 1, "copies": 3,
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
            ["On Popped", "Spawns a Nested Blue Bloon"]
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
        "description": ["Double Attack"],
        "events": [],
    
        "cardType": "bloon",
        "cost": 3, "damage": 45, "delay": 1, "copies": 3,
    },
    {
        "name": "doubleCeramicBloon", "displayName": "Double Ceramic Bloon",
        "description": ["Double Attack"],
        "events": [],
    
        "cardType": "bloon",
        "cost": 7, "damage": 250, "delay": 2, "copies": 2,
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