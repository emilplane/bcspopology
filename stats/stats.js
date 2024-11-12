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
        "name": "growthGasBloon", "displayName": "Growth Gas Bloon",
        "aliases": ["gg"],
        "events": [
            ["onDamaged", "All other friendly bloons gain 10 health."],
        ],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 5, "damage": 200, "delay": 5, "copies": 2,
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
        "cost": 4, "damage": 50, "delay": 3, "copies": 1, "shield": 100,
    },
    {
        "name": "buddyBloon", "displayName": "Buddy Bloon",
        "aliases": ["bb", "friendly bloon"],
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
        "cost": 5, "damage": 100, "delay": 2, "copies": 4,
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
            ["onPlay", "Gives all friendly Bloons +25HP."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 6, "damage": 200, "delay": 2, "copies": 2,
    },
    {
        "name": "strengthenator", "displayName": "Strengthenator",
        "aliases": ["bollator"],
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
        "aliases": ["damaged massive ornary air blimp", "damaged mobe"],
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
        "aliases": ["massive ornary air blimp", "mobe"],
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "large",
        "cost": 6, "damage": 500, "delay": 4, "copies": 2,
    },
    {
        "name": "bfb", "displayName": "BFB",
        "aliases": ["brutal floating behemoth"],
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "large",
        "cost": 7, "damage": 600, "delay": 4, "copies": 2,
    },
    {
        "name": "zomg", "displayName": "ZOMG",
        "aliases": ["zeppelin of mighty gargantuaness"],
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
        "cost": 4,
    },
    {
        "name": "druid", "displayName": "Druid",
        "aliases": ["durid"],
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
        "cost": 4, "damage": 40, "ammo": 1, "delay": 1, "fire": 30
    },
    {
        "name": "crossbow", "displayName": "Crossbow",
        "aliases": ["xbow"],
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
        "aliases": ["lizard"],
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
        "aliases": ["wof", "lizard"],
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
        "aliases": ["smfc"],
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
        "aliases": ["plant"],
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
        "aliases": ["spult"],
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
        "aliases": ["jbounty", "jb"],
        "description": [],
        "events": [
            ["perGoldGained", {"type": "gainHeroHP", "value": 10}]
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "druid",
        "cost": 7, "damage": 15, "ammo": 1, "delay": 1,
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
        "aliases": ["edef"],
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "military",
        "tower": "sniper",
        "cost": 7, "damage": 50, "ammo": 3, "delay": 3, "defender": 15,
    },
    {
        "name": "necromancer", "displayName": "Necromancer",
        "aliases": ["lizard", "Necromancer: Unpopped Army"],
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
        "aliases": ["lightning"],
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
        "aliases": ["super monkey with no upgrades"],
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "magic",
        "tower": "super",
        "cost": 8, "damage": 90, "ammo": 3, "delay": 3,
    },
    {
        "name": "arcaneMaster", "displayName": "Arcane Master",
        "aliases": ["amastery"],
        "description": [],
        "events": [
            ["onAttack", "Deal 50 damage to a different random Bloon 2 times"],
            ["onReload", {"type": "drawCard", "name": "yellowBloon"}]
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "super",
        "cost": 9, "damage": 50, "ammo": 2, "delay": 3,
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
        "cost": 7, "damage": 150, "ammo": 1, "delay": 3,
    },
    {
        "name": "bladeMaelstrom", "displayName": "Blade Maelstrom",
        "aliases": ["mael"],
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
        "aliases": ["bbullet"],
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
        "aliases": ["pod", "lizard"],
        "description": [],
        "events": [
            ["onPlay", "Summon an Undead MOAB."],
            ["onTurnStart", "Heal all friendly Bloons +25 HP."],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "wizard",
        "cost": 10,
    },
    {
        "name": "theBigOne", "displayName": "The Big One",
        "aliases": ["the bug one"],
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
        "aliases": ["richochet"],
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
        "cost": 0,
    },
    {
        "name": "cashDrop", "displayName": "Cash Drop",
        "events": [
            ["onPlay", {"type": "gainGold", "value": 1}]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 0,
    },
    {
        "name": "itsAllOnFireNow", "displayName": "It's All On Fire Now",
        "events": [
            ["onPlay", "Set target bloon on fire. If already on fire, deal 50 damage."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 1,
    },
    {
        "name": "manaShield", "displayName": "Mana Shield",
        "events": [
            ["onPlay", {"type": "gainShield", "value": 50}]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 1,
    },
    {
        "name": "fortify", "displayName": "Fortify",
        "aliases": ["jortify", "jortified"],
        "events": [
            ["onPlay", "Give a friendly bloon +50HP."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 2,
    },
    {
        "name": "bloonStrike", "displayName": "Bloon Strike",
        "events": [
            ["onPlay", "Deal 50 damage to opponent hero."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "quickBreak", "displayName": "Quick Break",
        "aliases": ["qb"],
        "events": [
            ["onPlay", { "type": "gainHP", "value": 50 }]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "supplyDrop", "displayName": "Supply Drop",
        "events": [
            ["onPlay", {"type": "drawCards", "value": 2}]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "forMyNextTrick", "displayName": "For My Next Trick",
        "events": [
            ["onPlay", "Pick 2. If it's a Bloon, it costs 2 less."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 4,
    },
    {
        "name": "restock", "displayName": "Restock",
        "events": [
            ["onPlay", {"type": "drawCards", "value": 3}]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 5,
    },
    {
        "name": "redBloonStorm", "displayName": "Red Bloon Storm",
        "events": [
            ["onPlay", "Fills your side with Red Bloons."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 6,
    },
    {
        "name": "whoops", "displayName": "Whoops",
        "events": [
            ["onPlay", "Target Monkey loses all Ammo."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 1,
    },
    {
        "name": "stunned", "displayName": "Stunned",
        "events": [
            ["onPlay", "Stun target Monkey for 1 turn."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 2,
    },
    {
        "name": "bedTime", "displayName": "Bed Time",
        "events": [
            ["onPlay", "Remove target enemy Monkey with 30 or less Attack Power"]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 3,
    },
    {
        "name": "improvedFortification", "displayName": "Improved Fortification",
        "events": [
            ["onPlay", "Give target friendly Bloon +150HP but increase its delay by 1."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "rapidShot", "displayName": "Rapid Shot",
        "events": [
            ["onPlay", "Deal 30 damage to a random enemy Bloon 3 times."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "bloonEmbiggen", "displayName": "Bloon Embiggen",
        "events": [
            ["onPlay", "Give all your bloons +25HP."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 4,
    },
    {
        "name": "quickReload", "displayName": "Quick Reload",
        "events": [
            ["onPlay", "Reload target Monkey."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 4,
    },
    {
        "name": "powerfulSlowingTotem", "displayName": "Powerful Slowing Totem",
        "events": [
            ["onPlay", "Increasse the delay of all Enemy Bloons by 1."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 7,
    },
    {
        "name": "favoredTrade", "displayName": "Favored Trade",
        "aliases": ["flavored trades"],
        "events": [
            ["onPlay", "Remove friendly monkey and gain half its gold cost."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 0,
    },
    {
        "name": "stormOfArrows", "displayName": "Storm of Arrows",
        "events": [
            ["onPlay", "Deal 150 Damage to 2 random opposing Bloons."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 2,
    },
    {
        "name": "firestorm", "displayName": "Firestorm",
        "events": [
            ["onPlay", "Deal 70 damage to all enemy Bloons."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 3,
    },
    {
        "name": "heroProtection", "displayName": "Hero Protection",
        "events": [
            ["onPlay", "Reduce the next damage recieved from an enemy Bloon to 0."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "packProtection", "displayName": "Pack Protection",
        "events": [
            ["onPlay", "All friendly Bloons gain +40 Shield."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 3,
    },
    {
        "name": "stickyBomb", "displayName": "Sticky Bomb",
        "events": [
            ["onPlay", "Deal 300 Damage to a Large Bloon"]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 3,
    },
    {
        "name": "wallOfTrees", "displayName": "Wall of Trees",
        "events": [
            ["onPlay", "Gain 120 Shield. When it breaks, gain 2 Gold."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 3,
    },
    {
        "name": "reinflated", "displayName": "Reinflated",
        "events": [
            ["onPlay", "Summon a random friendly Bloon that was destroyed this game."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 4,
    },
    {
        "name": "returnToSender", "displayName": "Return to Sender",
        "aliases": ["rts", "r2s", "return two sender", "return too sender"],
        "events": [
            ["onPlay", "Return a Bloon or Monkey to the owner's hand."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 4,
    },
    {
        "name": "partingGift", "displayName": "Parting Gift",
        "events": [
            ["onPlay", "Target friendly Monkey damages all enemy Bloons and is removed."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 5,
    },
    {
        "name": "shrink", "displayName": "Shrink",
        "events": [
            ["onPlay", "Turns target Monkey into a Baby Monkey."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 5,
    },
    {
        "name": "glueStorm", "displayName": "Glue Storm",
        "events": [
            ["onPlay", "Increase the delay of all bloons by 1."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 6,
    },
    {
        "name": "quickReady", "displayName": "Quick Ready",
        "aliases": ["qr"],
        "events": [
            ["onPlay", "Reduce the delay on target Bloon by 1."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 6,
    },
    {
        "name": "expertNegotiator", "displayName": "Expert Negotiator",
        "events": [
            ["onPlay", "Target enemy Monkey joins your team."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 8,
    },
    {
        "name": "superMonkeyStorm", "displayName": "Super Monkey Storm",
        "aliases": ["sms"],
        "events": [
            ["onPlay", "Deal 150 damage to all enemy Bloons."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 8,
    },
    {
        "name": "doubleTrouble", "displayName": "Double Trouble",
        "events": [
            ["onPlay", "Create a copy of target friendly Bloon."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 10,
    },
    {
        "name": "archersInstinct", "displayName": "Archer's Instinct",
        "events": [
            ["onPlay", "Pick 3."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 2,
    },
    {
        "name": "naturesClarity", "displayName": "Nature's Clarity",
        "events": [
            ["onPlay", "Pick 4. Gain 20 shield per Gold cost of picked card."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 3,
    },
    {
        "name": "extremeHeat", "displayName": "Extreme Heat",
        "events": [
            ["onPlay", "Destroy target Bloon that is on fire."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 4,
    },
    {
        "name": "ceasefire", "displayName": "Ceasefire",
        "events": [
            ["onPlay", "Enemy Monkeys lose all Ammo."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 7,
    },
    {
        "name": "moabStrike", "displayName": "MOAB Strike",
        "aliases": ["mobe strike"],
        "events": [
            ["onPlay", "Deal 100 damage to enemy Hero."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 7,
    },
    {
        "name": "thePrestige", "displayName": "The Prestige",
        "events": [
            ["onPlay", "Summon 4 random friendly Bloons destroyed this game."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 10,
    },
]