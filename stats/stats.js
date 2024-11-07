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
            ["onLeak", "Reduce cost of a random bloon in your hand by 1."]
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

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 0, "damage": 20, "ammo": 1, "delay": 1,
    },
    {
        "name": "mortarMonkey", "displayName": "Mortar Monkey",
        "description": [],
        "events": [
            ["onTurnEnd", "Randomly attacks an enemy Bloon."],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "mortar",
        "cost": 2, "damage": 40, "ammo": 1, "delay": 1,
        "attributes": ["normalAttacksDisabled"]
    },
    {
        "name": "tackShooter", "displayName": "Tack Shooter",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "tack",
        "cost": 2, "damage": 25, "ammo": 2, "delay": 2, "defender": 10,
    },
    {
        "name": "sniperMonkey", "displayName": "Sniper Monkey",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "military",
        "tower": "sniper",
        "cost": 3, "damage": 75, "ammo": 1, "delay": 2,
    },
    {
        "name": "bananaFarm", "displayName": "Banana Farm",
        "description": [],
        "events": [
            ["onTurnStart", {"type": "gainGold", "value": 2}],
        ],

        "cardType": "monkey",
        "type": "support",
        "tower": "farm",
        "cost": 3,
    },
    {
        "name": "druid", "displayName": "Druid",
        "description": [],
        "events": [
            ["onPlay", {"type": "gainHeroHP", "value": 50}],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "druid",
        "cost": 4, "damage": 50, "ammo": 1, "delay": 2,
    },
    {
        "name": "boomerangMonkey", "displayName": "Boomerang Monkey",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "boomerang",
        "cost": 3, "damage": [0, 25, 15], "ammo": 1, "delay": 1,
    },
    {
        "name": "tripleShot", "displayName": "Triple Shot",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 3, "damage": [20, 20, 20], "ammo": 1, "delay": 1,
    },
    {
        "name": "burnyStuffMortar", "displayName": "Burny Stuff Mortar",
        "description": [],
        "events": [
            ["onTurnEnd", "Randomly attacks an enemy Bloon."],
        ],

        "cardType": "monkey",
        "type": "military",
        "tower": "mortar",
        "cost": 3, "damage": 40, "ammo": 1, "delay": 1, "fire": 30
    },
    {
        "name": "crossbow", "displayName": "Crossbow",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 4, "damage": 35, "ammo": 2, "delay": 2,
    },
    {
        "name": "monkeyVillage", "displayName": "Monkey Village",
        "description": ["Adjacent monkeys have +15 Attack Power"],
        "events": [],

        "cardType": "monkey",
        "type": "support",
        "tower": "village",
        "cost": 4,
    },
    {
        "name": "wizardMonkey", "displayName": "Wizard Monkey",
        "description": [],
        "events": [
            ["onTurnStart", {"type": "gainAttackPower", "value": 5}],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "magic",
        "cost": 4, "damage": 25, "ammo": 1, "delay": 1,
    },
    {
        "name": "cashDropSniper", "displayName": "Cash Drop Sniper",
        "description": [],
        "events": [
            ["onReload", {"type": "gainGold", "value": 3}],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "magic",
        "cost": 5, "damage": 65, "ammo": 1, "delay": 2,
    },
    {
        "name": "wallOfFireMonkey", "displayName": "Wall of Fire Monkey",
        "description": [],
        "events": [
            ["onPlay", "First enemy bloon is set on fire."],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "wizard",
        "cost": 5, "damage": 40, "ammo": 1, "delay": 1, "defender": 5, "fire": 30
    },
    {
        "name": "superMonkeyFanClub", "displayName": "Super Monkey Fan Club",
        "description": [],
        "events": [
            ["duringTurn", "All Dart Monkeys gain +10 Attack Power."],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 6, "damage": 30, "ammo": 1, "delay": 1,
    },
    {
        "name": "bananaPlantation", "displayName": "Banana Plantation",
        "description": [],
        "events": [
            ["onOpponentDraw", {"type": "gainGold", "value": 1}],
        ],

        "cardType": "monkey",
        "type": "support",
        "tower": "farm",
        "cost": 3,
    },
    {
        "name": "spikeOPult", "displayName": "Spike-o-Pult",
        "description": [],
        "events": [
            ["onPop", {"type": "gainAttackPower", "value": 20}],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 4, "damage": 50, "ammo": 1, "delay": 2,
    },
    {
        "name": "tackSprayer", "displayName": "Tack Sprayer",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "tack",
        "cost": 4, "damage": 20, "ammo": 4, "delay": 3, "defender": 10,
    },
    {
        "name": "heartOfVengeanceDruid", "displayName": "Heart of Vengeance Druid",
        "description": [],
        "events": [
            ["onLeak", {"type": "gainAttackPower", "value": 5}],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "druid",
        "cost": 5, "damage": 15, "ammo": 2, "delay": 2,
    },
    {
        "name": "junglesBountyDruid", "displayName": "Jungle's Bounty Druid",
        "description": [],
        "events": [
            ["perGoldGained", {"type": "gainHeroHP", "value": 10}]
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "druid",
        "cost": 5, "damage": 15, "ammo": 2, "delay": 1,
    },
    {
        "name": "bionicBoomerang", "displayName": "Bionic Boomerang",
        "description": [],
        "events": [
            ["onPlay", {"type": "gainAmmo", "value": 2}],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "boomerang",
        "cost": 6, "damage": 40, "ammo": 2, "delay": 2,
    },
    {
        "name": "eliteDefender", "displayName": "Elite Defender",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "military",
        "tower": "sniper",
        "cost": 7, "damage": 50, "ammo": 3, "delay": 3, "defender": 15,
    },
    {
        "name": "necromancer", "displayName": "Necromancer",
        "description": [],
        "events": [
            ["onTurnStart", "Heal a random friendly bloon +25 HP."],
            ["onTurnEnd", "Summon an Undead Bloon."],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "wizard",
        "cost": 7,
    },
    {
        "name": "thunderDruid", "displayName": "Thunder Druid",
        "description": [],
        "events": [
            ["onPlay", "Deal 100 damage to all enemy Bloons"],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "druid",
        "cost": 7, "damage": 25, "ammo": 1, "delay": 2,
    },
    {
        "name": "superMonkey", "displayName": "Super Monkey",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "magic",
        "tower": "super",
        "cost": 8, "damage": 90, "ammo": 3, "delay": 3,
    },
    {
        "name": "arcaneMaster", "displayName": "Arcane Master",
        "description": [],
        "events": [
            ["onReload", {"type": "drawCard", "name": "yellowBloon"}]
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "super",
        "cost": 9, "damage": [50, 50, 50], "ammo": 2, "delay": 3,
    },
    {
        "name": "marketplace", "displayName": "Marketplace",
        "description": [],
        "events": [
            ["onTurnStart", "Gain 1 gold per friendly monkey"],
        ],

        "cardType": "monkey",
        "type": "support",
        "tower": "farm",
        "cost": 6,
    },
    {
        "name": "cripplingSniper", "displayName": "Crippling Sniper",
        "description": ["Targeted Large Bloons have their Delay increased by 1."],
        "events": [],

        "cardType": "monkey",
        "type": "military",
        "tower": "sniper",
        "cost": 3, "damage": 75, "ammo": 1, "delay": 2,
    },
    {
        "name": "bladeMaelstrom", "displayName": "Blade Maelstrom",
        "description": [],
        "events": [
            ["onTurnEnd", "Deal 15 damage to all enemy Bloons"],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "tack",
        "cost": 8, "damage": 20, "ammo": 3, "delay": 4, "defender": 10,
    },
    {
        "name": "bouncingBullet", "displayName": "Bouncing Bullet",
        "description": [],
        "events": [
            ["onAttack", "Deal 30 damage to a different random Bloon 3 times"],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "tack",
        "cost": 8, "damage": 65, "ammo": 1, "delay": 2,
    },
    {
        "name": "sharpShooter", "displayName": "Sharp Shooter",
        "description": ["Double attack power while at full Ammo."],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 9, "damage": 40, "ammo": 3, "delay": 2,
    },
    {
        "name": "princeOfDarkness", "displayName": "Prince of Darkness",
        "description": [],
        "events": [
            ["onPlay", "Summon an Undead MOAB."],
            ["onTurnStart", "Heal all friendly Bloons +25 HP."],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "wizard",
        "cost": 7,
    },
    {
        "name": "theBigOne", "displayName": "The Big One",
        "description": [],
        "events": [
            ["onTurnEnd", "Randomly attacks an enemy Bloon."],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "mortar",
        "cost": 11, "damage": 140, "ammo": 1, "delay": 1,
        "attributes": ["normalAttacksDisabled"]
    },
    {
        "name": "darkChampion", "displayName": "Dark Champion",
        "description": [],
        "events": [
            ["duringOpponentTurn", "All of your defenders gain +10 Attack Power."],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "super",
        "cost": 12, "damage": 90, "ammo": 3, "delay": 3,
    },
    {
        "name": "glaiveRicochet", "displayName": "Glaive Ricochet",
        "description": [],
        "events": [
            ["onAttack", "Deal 10 damage to all of the bloons next in line"],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "boomerang",
        "cost": 12, "damage": 30, "ammo": 4, "delay": 2,
    },
    {
        "name": "sunTemple", "displayName": "Sun Temple",
        "description": [],
        "events": [
            ["onPlay", "Sacrifice all friendly Monkeys for +25 Attack Power per Monkey"],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "super",
        "cost": 18, "damage": 100, "ammo": 3, "delay": 1,
    },
]

export const POWERS = [
    {
        "name": "bloontoniumCache", "displayName": "Bloontonium Cache",
        "events": [
            ["onPlay", {"type": "gainBloontonium", "value": 5}]
        ],
    
        "cardType": "power",
        "type": "basic",
        "cost": 0, "copies": 1,
    },
    {
        "name": "cashDrop", "displayName": "Cash Drop",
        "events": [
            ["onPlay", {"type": "gainGold", "value": 2}]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 0, "copies": 1,
    },
    {
        "name": "favoredTrade", "displayName": "Favored Trade",
        "events": [
            ["onPlay", "Remove friendly monkey and gain half its gold cost."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 0, "copies": 1,
    }
]