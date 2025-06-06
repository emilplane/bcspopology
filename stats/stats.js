export const BLOONS = [
    // Red
    {
        "name": "redBloon", "displayName": "Red Bloon",
        "id": "aa",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 0, "damage": 40, "delay": 2, "copies": 2,
    },
    {
        "name": "swarmRedBloon", "displayName": "Swarm Red Bloon",
        "id": "ab",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 0, "damage": 20, "delay": 2, "copies": 3,
    },
    {
        "name": "doubleRedBloon", "displayName": "Double Red Bloon",
        "id": "ac",
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
        "id": "ad",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 1, "damage": 50, "delay": 2, "copies": 2,
    },
    {
        "name": "nestedBlue", "displayName": "Nested Blue",
        "id": "ae",
        "description": [],
        "events": [
            ["onDestroyed", {"type": "spawn", "name": "redBloon"}]
        ],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 1, "damage": 50, "delay": 1, "copies": 1,
    },
    {
        "name": "swarmBlueBloon", "displayName": "Swarm Blue Bloon",
        "id": "af",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 1, "damage": 45, "delay": 2, "copies": 3,
    },
    {
        "name": "doubleBlueBloon", "displayName": "Double Blue Bloon",
        "id": "ag",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 60, "delay": 1, "copies": 2,
        "attributes": ["double"]
    },
    {
        "name": "cleverBlueBloon", "displayName": "Clever Blue Bloon",
        "id": "df",
        "description": [],
        "events": [
            ["onPlay",
                {"type": "if", "value": {
                    "condition": {"type": "lastPlayedCardType", "value": "Monkey"},
                    "action": {"type": "damageFirstEnemy", "value": 50}
                }}
            ],
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 1, "damage": 45, "delay": 2, "copies": 2,
    },
    // Green
    {
        "name": "greenBloon", "displayName": "Green Bloon",
        "id": "ah",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 2, "damage": 90, "delay": 1, "copies": 2,
    },
    {
        "name": "nestedGreen", "displayName": "Nested Green",
        "id": "ai",
        "description": [],
        "events": [
            ["onDestroyed", {"type": "spawn", "name": "nestedBlue"}]
        ],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 2, "damage": 80, "delay": 2, "copies": 1,
    },
    {
        "name": "swarmGreenBloon", "displayName": "Swarm Green Bloon",
        "id": "aj",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 2, "damage": 70, "delay": 1, "copies": 3,
    },
    {
        "name": "doubleGreenBloon", "displayName": "Double Green Bloon",
        "id": "ak",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 4, "damage": 80, "delay": 1, "copies": 2,
        "attributes": ["double"]
    },
    {
        "name": "cleverGreenBloon", "displayName": "Clever Green Bloon",
        "id": "dg",
        "description": [],
        "events": [
            ["onPlay",
                {"type": "if", "value": {
                    "condition": {"type": "lastPlayedCardType", "value": "Monkey"},
                    "action": {"type": "drawCards", "value": 1}
                }}
            ],
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 2, "damage": 80, "delay": 1, "copies": 2,
    },
    // Yellow
    {
        "name": "yellowBloon", "displayName": "Yellow Bloon",
        "id": "al",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 130, "delay": 1, "copies": 2,
    },
    {
        "name": "nestedYellow", "displayName": "Nested Yellow",
        "id": "am",
        "description": [],
        "events": [
            ["onDestroyed", {"type": "spawn", "name": "nestedGreen"}]
        ],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 4, "damage": 120, "delay": 2, "copies": 1,
    },
    {
        "name": "swarmYellowBloon", "displayName": "Swarm Yellow Bloon",
        "id": "an",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 110, "delay": 1, "copies": 3,
    },
    {
        "name": "doubleYellowBloon", "displayName": "Double Yellow Bloon",
        "id": "ao",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 5, "damage": 110, "delay": 1, "copies": 2,
        "attributes": ["double"]
    },
    {
        "name": "cleverYellowBloon", "displayName": "Clever Yellow Bloon",
        "id": "dh",
        "description": [],
        "events": [
            ["onPlay",
                {"type": "if", "value": {
                    "condition": {"type": "lastPlayedCardType", "value": "Monkey"},
                    "action": {"type": "gainHeroHP", "value": 80}
                }}
            ],
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 120, "delay": 1, "copies": 2,
    },
    // Pink
    {
        "name": "pinkBloon", "displayName": "Pink Bloon",
        "id": "ap",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "basic",
        "cost": 4, "damage": 100, "delay": 0, "copies": 1,
    },
    // White
    {
        "name": "whiteBloon", "displayName": "White Bloon",
        "id": "aq",
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
        "id": "ar",
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
        "id": "as",
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
        "id": "at",
        "description": [],
        "events": [
            ["onTurnStart", "Gives another random friendly bloon +50HP."],
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 100, "delay": Infinity, "copies": 2,
    },
    {
        "name": "steadyGrowthBloon", "displayName": "Steady Growth Bloon",
        "id": "au",
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
        "id": "av",
        "description": ["Costs 1 less per Bloon you control"],
        "events": [],
    
        "cardType": "bloon",
        "type": "large",
        "cost": 8, "damage": 300, "delay": 3, "copies": 1,
    },
    {
        "name": "setupBloon", "displayName": "Setup Bloon",
        "id": "aw",
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
        "id": "ax",
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
        "id": "ay",
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
        "id": "az",
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
        "id": "aA",
        "description": [],
        "events": [
            ["onDamaged", "Lower attacking monkey's attack power by 5."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 6, "damage": 300, "delay": 4, "copies": 1,
    },
    {
        "name": "growthGasBloon", "displayName": "Growth Gas Bloon",
        "id": "aB",
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
        "id": "aC",
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
        "id": "aD",
        "description": [],
        "events": [
            ["onBloonPlayed", {"type": "gainHP", "value": 25}],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 4, "damage": 50, "delay": 3, "copies": 1, "shield": 50,
    },
    {
        "name": "buddyBloon", "displayName": "Buddy Bloon",
        "id": "aE",
        "aliases": ["bb", "friendly bloon"],
        "description": [],
        "events": [
            ["whileOnBoard", "Enemy Monkey with greatest attack has attack set to 0."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 4, "damage": 75, "delay": 3, "copies": 1, "shield": 150,
    },
    {
        "name": "toxicBloon", "displayName": "Toxic Bloon",
        "id": "cI",
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
        "id": "aF",
        "description": [],
        "events": [
            ["onPlay", "Reduces cost of Discount Bloons in hand by 1."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 5, "damage": 120, "delay": 2, "copies": 4,
    },
    {
        "name": "drainingBloon", "displayName": "Draining Bloon",
        "id": "aG",
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
        "id": "aH",
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
        "id": "aI",
        "description": [],
        "events": [
            ["onPlay", "Heals all friendly Bloons +25HP."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 6, "damage": 200, "delay": 2, "copies": 2,
    },
    {
        "name": "strengthenator", "displayName": "Strengthenator",
        "id": "aJ",
        "aliases": ["bollator"],
        "description": [],
        "events": [
            ["onTurnStart", "Increase delay by 1. Gives all friendly Bloons besides self +20HP."],
        ],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 2, "damage": 150, "delay": Infinity, "copies": 1,
        "attributes": ["unique"]
    },
    // Zebra
    {
        "name": "zebraBloon", "displayName": "Zebra Bloon",
        "id": "aK",
        "description": [],
        "events": [
            ["onPlay", {"type": "drawCards", "value": 1}],
            ["onDestroyed", {"type": "drawCards", "value": 1}],
        ],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 7, "damage": 180, "delay": 2, "copies": 2,
    },
    // Rainbow
    {
        "name": "rainbowBloon", "displayName": "Rainbow Bloon",
        "id": "aL",
        "description": [],
        "events": [],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 8, "damage": 400, "delay": 3, "copies": 2,
    },
    {
        "name": "doubleRainbowBloon", "displayName": "Double Rainbow Bloon",
        "id": "aM",
        "description": [],
        "events": [],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 10, "damage": 330, "delay": 3, "copies": 2,
        "attributes": ["double"]
    },
    // Ceramics
    {
        "name": "ceramicBloon", "displayName": "Ceramic Bloon",
        "id": "aN",
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "advanced",
        "cost": 5, "damage": 250, "delay": 2, "copies": 2,
    },
    {
        "name": "doubleCeramicBloon", "displayName": "Double Ceramic Bloon",
        "id": "aO",
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
        "id": "aP",
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
        "id": "aQ",
        "aliases": ["massive ornary air blimp", "mobe"],
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "large",
        "cost": 6, "damage": 500, "delay": 4, "copies": 2,
    },
    {
        "name": "bfb", "displayName": "BFB",
        "id": "aR",
        "aliases": ["brutal floating behemoth"],
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "large",
        "cost": 7, "damage": 600, "delay": 4, "copies": 2,
    },
    {
        "name": "zomg", "displayName": "ZOMG",
        "id": "aS",
        "aliases": ["zeppelin of mighty gargantuaness"],
        "description": [],
        "events": [],
    
        "cardType": "bloon",
        "type": "large",
        "cost": 10, "damage": 900, "delay": 5, "copies": 1,
    },
    {
        "name": "signalBloon", "displayName": "Signal Bloon",
        "id": "cu",
        "description": [],
        "events": [
            ["onPlay", "Draw a Large Bloon from your deck."],
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 50, "delay": 2, "copies": 2,
    },
    {
        "name": "slowingBloon", "displayName": "Slowing Bloon",
        "id": "cv",
        "description": [],
        "events": [
            ["onPlay", "Increase target bloon's delay by 1."],
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 140, "delay": 3, "copies": 2,
    },
    {
        "name": "pinataBloon", "displayName": "Piñata Bloon",
        "id": "cL",
        "aliases": ["pinata bloon"],
        "description": [],
        "events": [
            ["onDamaged", "Both players +1 Gold."],
            ["onPopped", "Attacking Monkey reloads immediately."],
        ],

        "cardType": "bloon",
        "type": "large",
        "cost": 4, "damage": 300, "delay": 3, "copies": 1,
    },
    {
        "name": "boosterBloon", "displayName": "Booster Bloon",
        "id": "cM",
        "description": [],
        "events": [
            ["onPlay", "Increase target friendly Bloon's delay +1 and health +100."],
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 2, "damage": 50, "delay": 3, "copies": 2,
    },
    {
        "name": "theEternal", "displayName": "The Eternal",
        "id": "cN",
        "description": [],
        "events": [
            ["onDestroyed", "Add a copy of this card to your hand with +70 health."],
        ],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 2, "damage": 70, "delay": 2, "copies": 1,
        "attributes": ["unique"]
    },
    {
        "name": "extractorBloon", "displayName": "Extractor Bloon",
        "id": "cO",
        "description": ["Gain 10 Health each time an enemy Bloon takes damage."],
        "events": [],

        "cardType": "bloon",
        "type": "basic",
        "cost": 4, "damage": 100, "delay": 4, "copies": 1
    },
    {
        "name": "zeeJaySpecial", "displayName": "Zee Jay Special",
        "id": "cP",
        "description": [],
        "events": [
            ["onPlay", "Gain 1 Rad Token."],
        ],

        "cardType": "bloon",
        "type": "basic",
        "hero": "Zee Jay",
        "cost": 3, "damage": 80, "delay": 1, "copies": 2
    },
    {
        "name": "leadBloon", "displayName": "Lead Bloon",
        "id": "db",
        "description": [],
        "events": [],

        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 140, "delay": 2, "copies": 2, "armor": 10
    },
    {
        "name": "leadZeppelin", "displayName": "Lead Zeppelin",
        "id": "dc",
        "description": [],
        "events": [],

        "cardType": "bloon",
        "type": "large",
        "cost": 14, "damage": 750, "delay": 5, "copies": 1, "armor": 20,
        "attributes": ["unique"]
    },
    {
        "name": "doubleLeadBloon", "displayName": "Double Lead Bloon",
        "id": "dd",
        "description": [],
        "events": [],

        "cardType": "bloon",
        "type": "basic",
        "cost": 5, "damage": 100, "delay": 2, "copies": 2, "armor": 10,
        "attributes": ["double"]
    },
    {
        "name": "cleverLeadBloon", "displayName": "Clever Lead Bloon",
        "id": "de",
        "description": [],
        "events": [
            ["onPlay",
                {"type": "if", "value": {
                    "condition": {"type": "lastPlayedCardType", "value": "Monkey"},
                    "action": {"type": "gainArmor", "value": 10}
                }}
            ],
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 2, "damage": 70, "delay": 2, "copies": 2, "armor": 10,
    },
    {
        "name": "leadCoatingBloon", "displayName": "Lead Coating Bloon",
        "id": "dp",
        "description": [],
        "events": [
            ["onTurnEnd", {"type": "armorOtherBloons", "value": 5}],
        ],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 5, "damage": 80, "delay": 3, "copies": 2, "armor": 30,
    },
    {
        "name": "arbitr", "displayName": "ARBITR",
        "id": "di",
        "aliases": ["aerial response bloon invasion target restrictor"],
        "description": [],
        "events": [],

        "cardType": "bloon",
        "type": "large",
        "cost": 5, "damage": 250, "delay": Infinity, "copies": 1,
        "attributes": ["enemyBloonsCannotAttack"]
    },
    {
        "name": "targetPracticeBlimp", "displayName": "Target Practice Blimp",
        "id": "dj",
        "description": [],
        "events": [],

        "cardType": "bloon",
        "type": "large",
        "cost": 4, "damage": 220, "delay": Infinity, "copies": 1,
        "attributes": ["mustPop"]
    },
    {
        "name": "weaponEnhancerBloon", "displayName": "Weapon Enhancer Bloon",
        "id": "dk",
        "description": ["Friendly monkeys have +10AP"],
        "events": [],

        "cardType": "bloon",
        "type": "advanced",
        "cost": 2, "damage": 100, "delay": Infinity, "copies": 2,
    },
    {
        "name": "bombBloon", "displayName": "Bomb Bloon",
        "id": "dl",
        "description": [],
        "events": [
            ["onDestroyed", {"type": "addCard", "name": "bombShooter"}]
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 1, "damage": 40, "delay": 1, "copies": 2,
    },
    {
        "name": "rangBloon", "displayName": "Rang Bloon",
        "id": "dm",
        "description": [],
        "events": [
            ["onDestroyed", {"type": "addCard", "name": "boomerangMonkey"}]
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 1, "damage": 40, "delay": 1, "copies": 2,
    },
    {
        "name": "strikeBloon", "displayName": "Strike Bloon",
        "id": "dn",
        "description": [],
        "events": [
            ["onLeak", "Heal your hero the amount of damage dealt"]
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 3, "damage": 90, "delay": 1, "copies": 2,
    },
    {
        "name": "rapid", "displayName": "RAPID",
        "id": "do",
        "description": [],
        "events": [
            ["onTurnStart", {"type": "reduceDelayLastEnemyBloon", "value": 1}]
        ],

        "cardType": "bloon",
        "type": "basic",
        "cost": 4, "damage": 150, "delay": Infinity, "copies": 1, "shield": 50,
        "attributes": ["unique"]
    },
    {
        "name": "tripleThreatBloon", "displayName": "Triple Threat Bloon",
        "id": "dq",
        "description": ["Whenever you play a Monkey or Power, this gains 30 shield"],
        "events": [],

        "cardType": "bloon",
        "type": "basic",
        "cost": 4, "damage": 80, "delay": 2, "copies": 1, "shield": 60,
        "attributes": ["triple"]
    },
]

export const MONKEYS = [
    {
        "name": "dartMonkey", "displayName": "Dart Monkey",
        "id": "aT",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 0, "damage": 20, "ammo": 1, "delay": 1,
    },
    {
        "name": "mortarMonkey", "displayName": "Mortar Monkey",
        "id": "aU",
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
        "id": "aV",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "tack",
        "cost": 2, "damage": 25, "ammo": 2, "delay": 2, "defender": 10,
    },
    {
        "name": "sniperMonkey", "displayName": "Sniper Monkey",
        "id": "aW",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "military",
        "tower": "sniper",
        "cost": 3, "damage": 80, "ammo": 1, "delay": 2,
    },
    {
        "name": "bananaFarm", "displayName": "Banana Farm",
        "id": "aX",
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
        "id": "aY",
        "aliases": ["durid", "taco"],
        "description": [],
        "events": [
            ["onPlay", {"type": "gainHeroHP", "value": 50}],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "druid",
        "cost": 4, "damage": 50, "ammo": 1, "delay": 2, "defender": 10
    },
    {
        "name": "boomerangMonkey", "displayName": "Boomerang Monkey",
        "id": "aZ",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "boomerang",
        "cost": 3, "damage": [0, 25, 15], "ammo": 1, "delay": 1,
    },
    {
        "name": "tripleShot", "displayName": "Triple Shot",
        "id": "ba",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 3, "damage": [20, 20, 20], "ammo": 1, "delay": 1,
    },
    {
        "name": "burnyStuffMortar", "displayName": "Burny Stuff Mortar",
        "id": "bb",
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
        "name": "crossbowMonkey", "displayName": "Crossbow Monkey",
        "id": "bc",
        "aliases": ["xbow"],
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 4, "damage": 40, "ammo": 2, "delay": 2,
    },
    {
        "name": "monkeyVillage", "displayName": "Monkey Village",
        "id": "bd",
        "description": ["Adjacent monkeys have +20 Attack Power"],
        "events": [],

        "cardType": "monkey",
        "type": "support",
        "tower": "village",
        "cost": 4,
    },
    {
        "name": "wizardMonkey", "displayName": "Wizard Monkey",
        "id": "be",
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
        "id": "bf",
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
        "id": "bg",
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
        "id": "bh",
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
        "id": "bi",
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
        "id": "bj",
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
        "id": "bk",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "tack",
        "cost": 4, "damage": 25, "ammo": 4, "delay": 3, "defender": 15,
    },
    {
        "name": "heartOfVengeanceDruid", "displayName": "Heart of Vengeance Druid",
        "id": "bl",
        "aliases": ["hov"],
        "description": [],
        "events": [
            ["onLeak", {"type": "gainAttackPower", "value": 5}],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "druid",
        "cost": 5, "damage": 15, "ammo": 3, "delay": 2,
    },
    {
        "name": "junglesBountyDruid", "displayName": "Jungle's Bounty Druid",
        "id": "bm",
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
        "id": "bn",
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
        "id": "bo",
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
        "id": "bp",
        "aliases": ["lizard", "Necromancer: Unpopped Army"],
        "description": [],
        "events": [
            ["onTurnStart", "Heal a random friendly bloon +25 HP."],
            ["onTurnEnd", "Summon an Undead Bloon."],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "wizard",
        "cost": 5,
    },
    {
        "name": "thunderDruid", "displayName": "Thunder Druid",
        "id": "bq",
        "aliases": ["lightning"],
        "description": [],
        "events": [
            ["onPlay", "Deal 80 damage to all enemy Bloons"],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "druid",
        "cost": 7, "damage": 25, "ammo": 1, "delay": 2,
    },
    {
        "name": "superMonkey", "displayName": "Super Monkey",
        "id": "br",
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
        "id": "bs",
        "aliases": ["amastery"],
        "description": [],
        "events": [
            ["onAttack", "Attack up to 2 other random Bloons"],
            ["onReload", {"type": "addCard", "name": "yellowBloon"}]
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "super",
        "cost": 9, "damage": 50, "ammo": 2, "delay": 3,
    },
    {
        "name": "marketplace", "displayName": "Marketplace",
        "id": "bt",
        "description": [],
        "events": [
            ["onTurnStart", "Gain 1 gold per friendly monkey"],
        ],

        "cardType": "monkey",
        "type": "support",
        "tower": "farm",
        "cost": 6,
        "attributes": ["unique"]
    },
    {
        "name": "cripplingSniper", "displayName": "Crippling Sniper",
        "id": "bu",
        "description": ["Targeted Large Bloons have their Delay increased by 1."],
        "events": [],

        "cardType": "monkey",
        "type": "military",
        "tower": "sniper",
        "cost": 7, "damage": 150, "ammo": 1, "delay": 3,
        "attributes": ["unique"]
    },
    {
        "name": "bladeMaelstrom", "displayName": "Blade Maelstrom",
        "id": "bv",
        "aliases": ["mael"],
        "description": [],
        "events": [
            ["onTurnEnd", "Deal 30 damage to all enemy Bloons"],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "tack",
        "cost": 8, "damage": 20, "ammo": 3, "delay": 4, "defender": 10,
        "attributes": ["unique"]
    },
    {
        "name": "bouncingBullet", "displayName": "Bouncing Bullet",
        "id": "bw",
        "aliases": ["bbullet"],
        "description": [],
        "events": [
            ["onAttack", "Deal 30 damage to a different random Bloon 3 times"],
        ],

        "cardType": "monkey",
        "type": "military",
        "tower": "sniper",
        "cost": 8, "damage": 80, "ammo": 1, "delay": 2,
        "attributes": ["unique"]
    },
    {
        "name": "sharpShooter", "displayName": "Sharp Shooter",
        "id": "bx",
        "description": ["Double attack power while at full Ammo."],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 9, "damage": 40, "ammo": 3, "delay": 2,
        "attributes": ["unique"]
    },
    {
        "name": "princeOfDarkness", "displayName": "Prince of Darkness",
        "id": "by",
        "aliases": ["pod", "lizard"],
        "description": [],
        "events": [
            ["onPlay", "Summon an Undead MOAB."],
            ["onTurnStart", "Heal all friendly Bloons +50 HP."],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "wizard",
        "cost": 10,
        "attributes": ["unique"]
    },
    {
        "name": "theBigOne", "displayName": "The Big One",
        "id": "bz",
        "aliases": ["the bug one"],
        "events": [
            ["onTurnEnd", "Randomly attacks an enemy Bloon."],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "mortar",
        "cost": 11, "damage": 140, "ammo": 1, "delay": 1,
        "attributes": ["normalAttacksDisabled", "unique"]
    },
    {
        "name": "darkChampion", "displayName": "Dark Champion",
        "id": "bA",
        "description": [],
        "events": [
            ["duringOpponentTurn", "All of your defenders gain +10 Attack Power."],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "super",
        "cost": 12, "damage": 90, "ammo": 3, "delay": 3,
        "attributes": ["unique"]
    },
    {
        "name": "glaiveRicochet", "displayName": "Glaive Ricochet",
        "id": "bB",
        "aliases": ["richochet", "glaive richochet"],
        "description": [],
        "events": [
            ["onAttack", "Deal 10 damage to all of the bloons next in line"],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "boomerang",
        "cost": 12, "damage": 40, "ammo": 4, "delay": 2,
        "attributes": ["unique"]
    },
    {
        "name": "sunTemple", "displayName": "Sun Temple",
        "id": "bC",
        "description": [],
        "events": [
            ["onPlay", "Sacrifice all friendly Monkeys for +25 Attack Power per Monkey"],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "super",
        "cost": 18, "damage": 100, "ammo": 3, "delay": 1,
        "attributes": ["unique"]
    },
    {
        "name": "moabDominator", "displayName": "MOAB Dominator",
        "id": "cs",
        "aliases": ["mobe dominator", "moabdom", "moab dom", "mobedom", "mobe dom"],
        "description": [],
        "events": [
            ["onPlay", "Increase target Large Bloon's delay by 2."],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "boomerang",
        "cost": 10, "damage": 75, "ammo": 3, "delay": 2,
        "attributes": ["unique"]
    },
    {
        "name": "monkeyInvestigator", "displayName": "Monkey Investigator",
        "id": "cJ",
        "aliases": ["mobe dominator", "moabdom", "moab dom", "mobedom", "mobe dom"],
        "description": [],
        "events": [
            ["onPlay", "Draw a random Bloon from your deck."],
        ],

        "cardType": "monkey",
        "type": "support",
        "tower": "agent",
        "cost": 3, "damage": 35, "ammo": 1, "delay": 1,
    },
    {
        "name": "dartMonkeyTwins", "displayName": "Dart Monkey Twins",
        "id": "cK",
        "aliases": ["mobe dominator", "moabdom", "moab dom", "mobedom", "mobe dom"],
        "description": ["Gains +10 Attack Power when next to another Dart Monkey Twins card."],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 1, "damage": 15, "ammo": 1, "delay": 1, "copies": 2
    },
    {
        "name": "quincyActionFigure", "displayName": "Quincy Action Figure",
        "id": "cH",
        "aliases": ["nft"],
        "description": [],
        "events": [
            ["onReplace", "Gain gold equal to your economy."],
        ],

        "cardType": "monkey",
        "type": "support",
        "tower": "agent",
        "cost": 2,
    },
    {
        "name": "bloontoniumMiner", "displayName": "Bloontonium Miner",
        "id": "cQ",
        "description": [],
        "events": [
            ["onPlay", {"type": "gainBloontonium", "value": 1}],
            ["onTurnStart", {"type": "gainBloontonium", "value": 1}]
        ],

        "cardType": "monkey",
        "type": "support",
        "tower": "miner",
        "cost": 1, "damage": 10, "ammo": 1, "delay": 1
    },
    {
        "name": "leechingShotSniper", "displayName": "Leeching Shot Sniper",
        "id": "cR",
        "description": [],
        "events": [
            ["onAttack", {"type": "gainBloontonium", "value": 2}],
        ],

        "cardType": "monkey",
        "type": "military",
        "tower": "sniper",
        "cost": 2, "damage": 50, "ammo": 1, "delay": 2
    },
    {
        "name": "mineSupervisor", "displayName": "Mine Supervisor",
        "id": "cS",
        "description": [],
        "events": [
            ["onTurnStart", "Gain +1 Bloontonium per friendly Miner in play."],
        ],

        "cardType": "monkey",
        "type": "support",
        "tower": "miner",
        "cost": 4, "damage": 40, "ammo": 1, "delay": 1
    },
    {
        "name": "bloontoniumSaboteur", "displayName": "Bloontonium Saboteur",
        "id": "cT",
        "description": [],
        "events": [
            ["onPlay", "Opponent loses 4 Bloontonium."],
        ],

        "cardType": "monkey",
        "type": "military",
        "tower": "agent",
        "cost": 3, "damage": 30, "ammo": 1, "delay": 1
    },
    {
        "name": "monkeyPriestess", "displayName": "Monkey Priestess",
        "id": "cU",
        "description": [],
        "events": [
            ["onReplace", {"type": "gainHeroHP", "value": 200}],
        ],

        "cardType": "monkey",
        "type": "military",
        "tower": "agent",
        "cost": 3, "damage": 20, "ammo": 2, "delay": 2
    },
    {
        "name": "ceramicGlazingKiln", "displayName": "Ceramic Glazing Kiln",
        "id": "dr",
        "description": ["When you play a Bloon, give it +25 Health and use 1 Ammo"],
        "events": [],

        "cardType": "monkey",
        "type": "support",
        "tower": "factory",
        "cost": 3, "ammo": 5,
        "attributes": ["temporary", "cantAttack"]
    },
    {
        "name": "leadCoatingFactory", "displayName": "Lead Coating Factory",
        "id": "ds",
        "description": ["When you play a Bloon, give it +10 Armor and use 1 Ammo"],
        "events": [],

        "cardType": "monkey",
        "type": "support",
        "tower": "factory",
        "cost": 2, "ammo": 4,
        "attributes": ["temporary", "cantAttack"]
    },
    {
        "name": "sharpenedDartsLab", "displayName": "Sharpened Darts Lab",
        "id": "dt",
        "description": ["When you play a Primary Monkey, it immediately attacks a random enemy Bloon. Use 1 ammo"],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "factory",
        "cost": 2, "ammo": 3,
        "attributes": ["temporary", "cantAttack"]
    },
    {
        "name": "corvusAcademyOfArts", "displayName": "Corvus Academy Of Arts",
        "id": "du",
        "description": ["When your hero would take damage, they take no damage. Use 1 ammo"],
        "events": [],

        "cardType": "monkey",
        "type": "magic",
        "tower": "factory",
        "cost": 8, "ammo": 2,
        "attributes": ["temporary", "cantAttack"]
    },
    {
        "name": "moabConstructionFacility", "displayName": "MOAB Construction Facility",
        "id": "dv",
        "description": ["When you play a Large Bloon, reduce its delay by 1 and deal 100 damage to it. Use 1 ammo"],
        "events": [],

        "cardType": "monkey",
        "type": "support",
        "tower": "factory",
        "cost": 4, "ammo": 3,
        "attributes": ["temporary", "cantAttack"]
    },
    {
        "name": "bombShooter", "displayName": "Bomb Shooter",
        "id": "dw",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "bomb",
        "cost": 2, "damage": 75, "ammo": 1, "delay": 3,
        "attributes": ["armorPiercing"]
    },
    {
        "name": "missileLauncher", "displayName": "Missile Launcher",
        "id": "dx",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "bomb",
        "cost": 5, "damage": 60, "ammo": 1, "delay": 2,
        "attributes": ["armorPiercing", "double"]
    },
    {
        "name": "moabEliminator", "displayName": "MOAB Eliminator",
        "id": "dy",
        "description": [],
        "events": [
            ["onAttack",
                {"type": "if", "value": {
                    "condition": {"type": "targetType", "value": "Large"},
                    "action": {"type": "destroyTargetBloon"}
                }}
            ],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "bomb",
        "cost": 16, "damage": 150, "ammo": 1, "delay": 3,
    },
    {
        "name": "moabMauler", "displayName": "MOAB Mauler",
        "id": "dz",
        "description": [],
        "events": [
            ["onAttack",
                {"type": "if", "value": {
                    "condition": {"type": "targetType", "value": "Large"},
                    "action": {"type": "bonusDamage", "value": 50}
                }}
            ],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "bomb",
        "cost": 7, "damage": 60, "ammo": 2, "delay": 2,
        "attributes": ["armorPiercing"]
    },
    {
        "name": "fragBombShooter", "displayName": "Frag Bomb Shooter",
        "id": "dA",
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "bomb",
        "cost": 6, "damage": [30, 30, 30], "ammo": 3, "delay": 3,
    },
    {
        "name": "alchemistMonkey", "displayName": "Alchemist Monkey",
        "id": "dB",
        "description": [],
        "events": [
            ["onAttack", {"type": "summonAcidPool"}],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "alchemist",
        "cost": 2, "damage": 15, "ammo": 1, "delay": 1,
    },
    {
        "name": "leadToGoldMonkey", "displayName": "Lead to Gold Monkey",
        "id": "dC",
        "aliases": ["lead 2 gold", "l2g", "ltg"],
        "description": [],
        "events": [
            ["onAttack",
                {"type": "if", "value": {
                        "condition": {"type": "targetHasArmor"},
                        "action": {"type": "gainGold", "value": 2}
                    }}
            ],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "alchemist",
        "cost": 3, "damage": 60, "ammo": 1, "delay": 2,
        "attributes": ["armorPiercing"]
    },
    {
        "name": "totalTransformationMonkey", "displayName": "Total Transformation Monkey",
        "id": "dD",
        "aliases": ["tt5"],
        "description": [],
        "events": [
            ["onPlay", "Transform all other friendly Monkeys into transformed Monkeys"],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "alchemist",
        "cost": 12, "damage": 80, "ammo": 2, "delay": 1,
        "attributes": ["unique"]
    },
    {
        "name": "acidicMixAlchemist", "displayName": "Acidic Mix Alchemist",
        "id": "dE",
        "aliases": ["amd", "acidic mixture dip"],
        "description": [],
        "events": [
            ["onPlay", "Target other friendly Monkey gains Armor-Piercing"],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "alchemist",
        "cost": 2, "damage": 25, "ammo": 2, "delay": 2,
    },
    {
        "name": "bloonMasterAlchemist", "displayName": "Bloon Master Alchemist",
        "id": "dF",
        "aliases": ["bma"],
        "description": [],
        "events": [
            ["onPlay", {"type": "convertTargetBloon", "name": "redBloon"}],
            ["onAttack", {"type": "summonAcidPool", "strong": true}],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "alchemist",
        "cost": 8, "damage": 15, "ammo": 1, "delay": 1,
    },
    {
        "name": "berserkerBrew", "displayName": "Berserker Brew",
        "id": "dG",
        "aliases": ["bbrew"],
        "description": [],
        "events": [
            ["onPlay", "Target other friendly Monkey gains 3 Temporary Ammo, +20AP, and is Doomed"],
        ],

        "cardType": "monkey",
        "type": "magic",
        "tower": "alchemist",
        "cost": 8, "damage": 30, "ammo": 1, "delay": 1,
    },
    {
        "name": "barrelOfMonkeys", "displayName": "Barrel Of Monkeys",
        "id": "dH",
        "aliases": ["barrel", "monkey barrel"],
        "description": [],
        "events": [],

        "cardType": "monkey",
        "type": "primary",
        "tower": "dart",
        "cost": 1, "damage": 20, "ammo": 1, "delay": 1, "copies": 5
    },
    {
        "name": "shellShockMortar", "displayName": "Shell Shock Mortar",
        "id": "dI",
        "description": [],
        "events": [
            ["onTurnEnd", "Randomly attacks an enemy Bloon."],
            ["onAttack", "Stun target for 1 turn"],
        ],

        "cardType": "monkey",
        "type": "primary",
        "tower": "mortar",
        "cost": 3, "damage": 40, "ammo": 1, "delay": 2,
        "attributes": ["normalAttacksDisabled"]
    },
]

export const POWERS = [
    {
        "name": "bloontoniumCache", "displayName": "Bloontonium Cache",
        "id": "bD",
        "events": [
            ["onPlay", {"type": "gainBloontonium", "value": 5}]
        ],
    
        "cardType": "power",
        "type": "basic",
        "cost": 0,
    },
    {
        "name": "cashDrop", "displayName": "Cash Drop",
        "id": "bE",
        "events": [
            ["onPlay", {"type": "gainGold", "value": 1}]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 0,
    },
    {
        "name": "itsAllOnFireNow", "displayName": "It's All On Fire Now",
        "id": "bF",
        "events": [
            ["onPlay", "Set target bloon on fire. If already on fire, deal 50 damage."]
        ],

        "cardType": "power",
        "type": "basic",
        "hero": "Gwendolin",
        "cost": 1, "copies": 2
    },
    {
        "name": "manaShield", "displayName": "Mana Shield",
        "id": "bG",
        "events": [
            ["onPlay", {"type": "gainShield", "value": 70}]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 1,
    },
    {
        "name": "fortify", "displayName": "Fortify",
        "id": "bH",
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
        "id": "bI",
        "events": [
            ["onPlay", "Deal 50 damage to opponent hero."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "quickBreak", "displayName": "Quick Break",
        "id": "bJ",
        "aliases": ["qb"],
        "events": [
            ["onPlay", { "type": "gainHP", "value": 100 }]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3, "copies": 2
    },
    {
        "name": "supplyDrop", "displayName": "Supply Drop",
        "id": "bK",
        "events": [
            ["onPlay", {"type": "drawCards", "value": 2}]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "forMyNextTrick", "displayName": "For My Next Trick",
        "id": "bL",
        "events": [
            ["onPlay", "Pick 2. If it's a Bloon, it costs 2 less."]
        ],

        "cardType": "power",
        "type": "exotic",
        "hero": "Amelia",
        "cost": 4,
    },
    {
        "name": "restock", "displayName": "Restock",
        "id": "bM",
        "events": [
            ["onPlay", {"type": "drawCards", "value": 3}]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 5,
    },
    {
        "name": "redBloonStorm", "displayName": "Red Bloon Storm",
        "id": "bN",
        "events": [
            ["onPlay", {"type": "fillYourSide", "name": "redBloon"}]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 6,
    },
    {
        "name": "whoops", "displayName": "Whoops",
        "id": "bO",
        "events": [
            ["onPlay", "Target Monkey loses all Ammo."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 1,
    },
    {
        "name": "stunned", "displayName": "Stunned",
        "id": "bP",
        "events": [
            ["onPlay", "Stun target Monkey for 1 turn."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 2,
    },
    {
        "name": "bedTime", "displayName": "Bed Time",
        "id": "bQ",
        "events": [
            ["onPlay", "Remove target enemy Monkey with 30 or less Attack Power"]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 3,
    },
    {
        "name": "improvedFortification", "displayName": "Improved Fortification",
        "id": "bR",
        "events": [
            ["onPlay", "Give target friendly Bloon +150HP but increase its delay by 1."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "rapidShot", "displayName": "Rapid Shot",
        "id": "bS",
        "events": [
            ["onPlay", "Deal 40 damage to a random enemy Bloon 5 times."]
        ],

        "cardType": "power",
        "type": "basic",
        "hero": "Quincy",
        "cost": 3,
    },
    {
        "name": "bloonEmbiggen", "displayName": "Bloon Embiggen",
        "id": "bT",
        "events": [
            ["onPlay", "Give all your bloons +25HP."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 4,
    },
    {
        "name": "quickReload", "displayName": "Quick Reload",
        "id": "bU",
        "events": [
            ["onPlay", "Reload target Monkey."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 4,
    },
    {
        "name": "powerfulSlowingTotem", "displayName": "Powerful Slowing Totem",
        "id": "bV",
        "events": [
            ["onPlay", "Increasse the delay of all Enemy Bloons by 1."]
        ],

        "cardType": "power",
        "type": "basic",
        "hero": "Obyn",
        "cost": 7,
    },
    {
        "name": "favoredTrade", "displayName": "Favored Trade",
        "id": "bW",
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
        "id": "bX",
        "events": [
            ["onPlay", "Deal 120 Damage to 2 random opposing Bloons."]
        ],

        "cardType": "power",
        "type": "advanced",
        "hero": "Quincy",
        "cost": 2,
    },
    {
        "name": "firestorm", "displayName": "Firestorm",
        "id": "bY",
        "events": [
            ["onPlay", "Deal 70 damage to all enemy Bloons."]
        ],

        "cardType": "power",
        "type": "advanced",
        "hero": "Gwendolin",
        "cost": 3,
    },
    {
        "name": "heroProtection", "displayName": "Hero Protection",
        "id": "bZ",
        "events": [
            ["onPlay", "Reduce the next damage recieved from an enemy Bloon to 0."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "packProtection", "displayName": "Pack Protection",
        "id": "ca",
        "events": [
            ["onPlay", "All friendly Bloons gain +40 Shield."]
        ],

        "cardType": "power",
        "type": "advanced",
        "hero": "Amelia",
        "cost": 3,
    },
    {
        "name": "stickyBomb", "displayName": "Sticky Bomb",
        "id": "cb",
        "events": [
            ["onPlay", "Deal 300 Damage to a Large Bloon"]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 3,
    },
    {
        "name": "wallOfTrees", "displayName": "Wall of Trees",
        "id": "cc",
        "events": [
            ["onPlay", "Gain 120 Shield. When it breaks, gain 2 Gold."]
        ],

        "cardType": "power",
        "type": "advanced",
        "hero": "Obyn",
        "cost": 3,
    },
    {
        "name": "reinflated", "displayName": "Reinflated",
        "id": "cd",
        "events": [
            ["onPlay", "Summon a random friendly Bloon that was destroyed this game."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 4,
    },
    {
        "name": "returnToSender", "displayName": "Return to Sender",
        "id": "ce",
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
        "id": "cf",
        "events": [
            ["onPlay", "Target friendly Monkey damages all enemy Bloons and is removed."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 3,
    },
    {
        "name": "shrink", "displayName": "Shrink",
        "id": "cg",
        "events": [
            ["onPlay", "Turns target Monkey into a Baby Monkey."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 5,
    },
    {
        "name": "glueStorm", "displayName": "Glue Storm",
        "id": "ch",
        "events": [
            ["onPlay", "Increase the delay of all bloons by 1."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 5,
    },
    {
        "name": "quickReady", "displayName": "Quick Ready",
        "id": "ci",
        "aliases": ["qr"],
        "events": [
            ["onPlay", "Reduce the delay on target Bloon by 1."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 7,
    },
    {
        "name": "expertNegotiator", "displayName": "Expert Negotiator",
        "id": "cj",
        "events": [
            ["onPlay", "Target enemy Monkey joins your team."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 8,
    },
    {
        "name": "superMonkeyStorm", "displayName": "Super Monkey Storm",
        "id": "ck",
        "aliases": ["sms"],
        "events": [
            ["onPlay", "Deal 150 damage to all enemy Bloons."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 10,
    },
    {
        "name": "doubleTrouble", "displayName": "Double Trouble",
        "id": "cl",
        "events": [
            ["onPlay", "Create a copy of target friendly Bloon."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 10,
    },
    {
        "name": "archersInstinct", "displayName": "Archer's Instinct",
        "id": "cm",
        "events": [
            ["onPlay", "Pick 3."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 2, "copies": 2
    },
    {
        "name": "naturesClarity", "displayName": "Nature's Clarity",
        "id": "cn",
        "events": [
            ["onPlay", "Pick 3. Gain 15 shield per Gold cost of picked card."]
        ],

        "cardType": "power",
        "type": "advanced",
        "hero": "Obyn",
        "cost": 3,
    },
    {
        "name": "extremeHeat", "displayName": "Extreme Heat",
        "id": "co",
        "events": [
            ["onPlay", "Destroy target Bloon that is on fire."]
        ],

        "cardType": "power",
        "type": "exotic",
        "hero": "Gwendolin",
        "cost": 4, "copies": 2
    },
    {
        "name": "ceasefire", "displayName": "Ceasefire",
        "id": "cp",
        "events": [
            ["onPlay", "Enemy Monkeys lose all Ammo."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 7,
    },
    {
        "name": "moabStrike", "displayName": "MOAB Strike",
        "id": "cq",
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
        "id": "cr",
        "events": [
            ["onPlay", "Summon 4 random friendly Bloons destroyed this game."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 10,
        "hero": "Amelia",
        "attributes": ["unique"]
    },
    {
        "name": "tryThis", "displayName": "Try This!",
        "id": "ct",
        "events": [
            ["onPlay", "Target monkey gains 1 max ammo."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 3,
    },
    {
        "name": "bubbleTime", "displayName": "Bubble Time!",
        "id": "cw",
        "events": [
            ["onPlay", "Pick 3. If it's a Power, +50 Shield to Hero and random friendly Bloon."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
        "hero": "Amelia",
    },
    {
        "name": "bloonReinforcements", "displayName": "Bloon Reinforcements!",
        "id": "cx",
        "events": [
            ["onPlay", "Draw 2 Basic Bloons from your deck."]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "inOurDarkestHour", "displayName": "In Our Darkest Hour...",
        "id": "cy",
        "events": [
            ["onPlay", "Draw an Ultra Rare Monkey from your deck."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 3,
    },
    {
        "name": "maxHeal", "displayName": "Max Heal",
        "id": "cz",
        "events": [
            ["onPlay", "Target non-Large Bloon is healed +100HP."]
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 3,
        "hero": "Adora"
    },
    {
        "name": "spikeStorm", "displayName": "Spike Storm!",
        "id": "cA",
        "aliases": ["sporm"],
        "description": [],
        "events": [
            ["onPlay", "Deal 30 damage to all enemy Bloons."],
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 2, "copies": 2
    },
    {
        "name": "rarePower", "displayName": "Rare Power",
        "id": "cB",
        "aliases": ["sporm"],
        "description": [],
        "events": [
            ["onPlay", "Deal 30 damage to all enemy Bloons."],
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 2, "copies": 2
    },
    {
        "name": "abilityBan", "displayName": "Ability Ban",
        "id": "cC",
        "description": [],
        "events": [
            ["onPlay", "Heroes can't use their Hero Abilities until the end of your next turn."],
        ],

        "cardType": "power",
        "type": "exotic",
        "cost": 2
    },
    {
        "name": "bloonMelter", "displayName": "Bloon Melter",
        "id": "cD",
        "description": [],
        "events": [
            ["onPlay", "Destroy target friendly Bloon. Opponent takes 20 damage."],
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 2, "copies": 2
    },
    {
        "name": "divination", "displayName": "Divination",
        "id": "cE",
        "description": [],
        "events": [
            ["onPlay", "Pick 3. If it's a Monkey, it gains +10 Attack Power."],
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 2,
        "hero": "Adora"
    },
    {
        "name": "energyOverload", "displayName": "Energy Overload",
        "id": "cF",
        "description": [],
        "events": [
            ["onPlay", "Destroy target Bloon with Shield"],
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 4,
        "hero": "Adora"
    },
    {
        "name": "enhancedReflexes", "displayName": "Enhanced Reflexes",
        "id": "cG",
        "description": [],
        "events": [
            ["onPlay", "Target bloon takes 50 damage. Draw a card."],
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 2,
        "hero": "Quincy"
    },
    {
        "name": "overload", "displayName": "Overload",
        "id": "cV",
        "description": ["Destroy target Bloon with 100 or less Health."],
        "events": [],

        "cardType": "power",
        "type": "basic",
        "cost": 5,
        "purchaseCurrency": "bloontonium"
    },
    {
        "name": "massDetonation", "displayName": "Mass Detonation",
        "id": "cW",
        "description": ["Deal 150 damage and 50 splash damage to highest enemy Bloon 3 times."],
        "events": [],

        "cardType": "power",
        "type": "advanced",
        "cost": 10,
        "purchaseCurrency": "bloontonium",
        "attributes": ["unique"]
    },
    {
        "name": "redBloonApopalypse", "displayName": "Red Bloon Apopalypse",
        "id": "cX",
        "aliases": ["red bloon apocalypse"],
        "description": [],
        "events": [
            ["onPlay", {"type": "fillBothSides", "name": "redBloon"}]
        ],

        "cardType": "power",
        "type": "basic",
        "cost": 8,
    },
    {
        "name": "desperateDefense", "displayName": "Desperate Defense",
        "id": "cY",
        "description": ["Your Monkeys have +25 Attack Power until the start of your next turn."],
        "events": [],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
    {
        "name": "fastAndLoose", "displayName": "Fast and Loose",
        "id": "cZ",
        "events": [
            ["onPlay", "Pick 3. If it costs 3 Gold or less, gain 2 Rad Tokens."]
        ],

        "cardType": "power",
        "type": "advanced",
        "cost": 3,
        "hero": "Zee Jay",
    },
    {
        "name": "stylishFinish", "displayName": "Stylish Finish",
        "id": "da",
        "description": ["Target friendly Monkey gains +30 Attack Power."],

        "cardType": "power",
        "type": "exotic",
        "cost": 1,
        "hero": "Zee Jay",
        "attributes": ["targetIsDoomed"]
    },
    {
        "name": "ordersReceived", "displayName": "Orders Received",
        "id": "dJ",
        "description": ["Target Military Monkey or Bomb Shooter reloads immediately and gains 2 Temporary Ammo"],

        "cardType": "power",
        "type": "basic",
        "cost": 5,
        "hero": "Striker Jones",
    },
    {
        "name": "artilleryCommand", "displayName": "Artillery Command",
        "id": "dK",
        "description": ["All friendly Mortar and Bomb Shooter Monkeys attack random targets once without using ammo"],

        "cardType": "power",
        "type": "advanced",
        "cost": 4, "copies": 2,
        "hero": "Striker Jones",
    },
    {
        "name": "warBonds", "displayName": "War Bonds",
        "id": "dL",
        "description": ["Gain 1 Gold per friendly Military Monkey"],

        "cardType": "power",
        "type": "exotic",
        "cost": 0, "copies": 2,
        "hero": "Striker Jones",
    },
    {
        "name": "leadCasing", "displayName": "Lead Casing",
        "id": "dM",
        "description": ["Target Bloon gains 20 Armor"],

        "cardType": "power",
        "type": "advanced",
        "cost": 6, "copies": 2,
    },
    {
        "name": "massLeadProduction", "displayName": "Mass Lead Production",
        "id": "dN",
        "description": ["All friendly Bloons gain 5 Armor"],

        "cardType": "power",
        "type": "basic",
        "cost": 2,
    },
    {
        "name": "bloontoniumLeak", "displayName": "Bloontonium Leak",
        "id": "dO",
        "description": ["Drain all Bloontonium from all players"],

        "cardType": "power",
        "type": "advanced",
        "cost": 5,
    },
    {
        "name": "shieldsDown", "displayName": "Shields Down!",
        "id": "dP",
        "description": ["Removes all Shields from all Heroes and Bloons"],

        "cardType": "power",
        "type": "exotic",
        "cost": 5,
    },
    {
        "name": "bloonsdayDevice", "displayName": "Bloonsday Device",
        "id": "dQ",
        "description": ["Destroy all Bloons"],

        "cardType": "power",
        "type": "exotic",
        "cost": 15,
        "attributes": ["unique"],
    },
    {
        "name": "bloonRedirect", "displayName": "Bloon Redirect",
        "id": "dR",
        "description": ["Target Bloon switches to your side. Increase its delay by 2"],

        "cardType": "power",
        "type": "advanced",
        "cost": 8,
        "purchaseCurrency": "bloontonium",
    },
    {
        "name": "ultraRarePower", "displayName": "ULTRA Rare Power",
        "id": "dS",
        "description": ["Draw a random Ultra Rare from your deck"],

        "cardType": "power",
        "type": "advanced",
        "cost": 3,
    },
    {
        "name": "bombsAway", "displayName": "Bombs Away",
        "id": "dT",
        "description": ["Destroy target non-large Bloon"],

        "cardType": "power",
        "type": "exotic",
        "cost": 7, "copies": 2,
    },
    {
        "name": "accidentAtTheLab", "displayName": "Accident at the Lab",
        "id": "dU",
        "description": ["Put Acid Pools in all enemy Bloon spaces"],

        "cardType": "power",
        "type": "advanced",
        "cost": 4,
        "purchaseCurrency": "bloontonium",
    },
    {
        "name": "preemptiveStrike", "displayName": "Pre-emptive Strike",
        "id": "dV",
        "description": ["The next Bloon your opponent plays is destroyed"],

        "cardType": "power",
        "type": "exotic",
        "cost": 3,
    },
    {
        "name": "longRangeRang", "displayName": "Long Range Rang",
        "id": "dW",
        "description": ["Deal 70 damage to a Bloon. If that doesn't destroy it, return this card to your hand"],

        "cardType": "power",
        "type": "basic",
        "cost": 3,
    },
]

const all = [...BLOONS, ...MONKEYS, ...POWERS]
const ids = []
const counts = {}

all.forEach((item) => {
    ids.push(item.id)
})
ids.forEach((id) => {
    if (!counts[id]) {
        counts[id] = 1
    } else {
        counts[id]++
    }
})
for (const id in counts) {
    if (counts[id] === 1) {
        delete counts[id]
    }
}

console.log(counts);