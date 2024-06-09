const templates = {
    "cardContainer": document.getElementById("cardContainerTemplate"),
    "cardTypeTitle": document.getElementById("cardTypeTitleTemplate"),
    "card": document.getElementById("cardTemplate"),
    "statChip": document.getElementById("statChipTemplate"),
    "specialContainer": document.getElementById("specialContainerTemplate")
}

const types = {
    "tower": {
        "displayName": "Tower"
    },
    "bloon": {
        "displayName": "Bloon"
    },
    "power": {
        "displayName": "Power"
    }
}

const properties = {
    "simple": {
        "cost": {
            "displayName": "Cost"
        },
        "income": {
            "displayName": "Income",
        },
        "damage": {
            "displayName": "Damage"
        },
        "shots": {
            "displayName": "# of shots"
        },
        "reloadTime": {
            "displayName": "Reload Time"
        },
        "quantity": {
            "displayName": "Quantity"
        },
        "hp": {
            "displayName": "HP"
        },
        "turns": {
            "displayName": "Delay"
        },
        "hero": {
            "displayName": "Hero"
        }
    },
    "special": {
        "special": {
            "displayName": "Special"
        },
        "onAttack": {
            "displayName": "On Attack"
        },
        "onPlayed": {
            "displayName": "On Played"
        },
        "whenPlayed": {
            "displayName": "When Played"
        },
        "whenPopped": {
            "displayName": "When Popped"
        },
        "effect": {
            "displayName": "Effect"
        }
    }
}

const cards = {
    "bananaFarm": {
        "displayName": "Banana Farm",
        "type": "tower",

        "cost": 3, "income": 2
    },
    "boomerang": {
        "displayName": "Boomerang",
        "type": "tower",

        "cost": 3, "damage": 15, "shots": 2, "reloadTime": 1,
        "onAttack": "Attacks the next bloon clockwise"
    },
    "crossbowMonkey": {
        "displayName": "Crossbow Monkey",
        "type": "tower",

        "cost": 5, "damage": 30, "shots": 2, "reloadTime": 2
    },
    "dartMonkey": {
        "displayName": "Dart Monkey",
        "type": "tower",

        "cost": 1, "damage": 20, "shots": 1, "reloadTime": 1
    },
    "sharpShooter": {
        "displayName": "Sharp Shooter",
        "type": "tower",

        "cost": 9, "damage": 40, "shots": 3, "reloadTime": 2,
        "special": "2x damage when at 100% ammo"
    },
    "sniperMonkey": {
        "displayName": "Sniper Monkey",
        "type": "tower",

        "cost": 3, "damage": 50, "shots": 1, "reloadTime": 2
    },

    "superMonkey": {
        "displayName": "Sniper Monkey",
        "type": "tower",

        "cost": 8, "damage": 60, "shots": 3, "reloadTime": 4,
    },
    "tackShooter": {
        "displayName": "Sniper Monkey",
        "type": "tower",

        "cost": 2, "damage": 25, "shots": 2, "reloadTime": 2,
        "special": "If a shot is available, attacks Bloons that would attack the hero for 35 dmg"
    },
    "tripleShot": {
        "displayName": "Sniper Monkey",
        "type": "tower",

        "cost": 3, "damage": 20, "shots": 1, "reloadTime": 1,
        "onAttack": "Attacks bloons adjacent to target"
    },
    "redBloon": {
        "displayName": "Red Bloon",
        "type": "bloon",
        "cost": 0,
        "quantity": 2,
        "hp": 40,
        "turns": 1
    },
    "swarmRedBloon": {
        "displayName": "Swarm Red Bloon",
        "type": "bloon",
        "cost": 0,
        "quantity": 3,
        "hp": 20,
        "turns": 1
    },
    "blueBloon": {
        "displayName": "Blue Bloon",
        "type": "bloon",
        "cost": 1,
        "quantity": 2,
        "hp": 60,
        "turns": 1
    },
    "swarmBlueBloon": {
        "displayName": "Swarm Blue Bloon",
        "type": "bloon",
        "cost": 1,
        "quantity": 3,
        "hp": 50,
        "turns": 1
    },
    "greenBloon": {
        "displayName": "Green Bloon",
        "type": "bloon",
        "cost": 2,
        "quantity": 2,
        "hp": 100,
        "turns": 1
    },
    "swarmGreenBloon": {
        "displayName": "Swarm Green Bloon",
        "type": "bloon",
        "cost": 2,
        "quantity": 3,
        "hp": 80,
        "turns": 1
    },
    "goldenBloon": {
        "displayName": "Golden Bloon",
        "type": "bloon",
        "cost": 2,
        "quantity": 2,
        "hp": 70,
        "turns": 2,
        "whenPopped": "+3 gold"
    },
    "yellowBloon": {
        "displayName": "Yellow Bloon",
        "type": "bloon",
        "cost": 3,
        "quantity": 2,
        "hp": 145,
        "turns": 1
    },
    "swarmYellowBloon": {
        "displayName": "Swarm Yellow Bloon",
        "type": "bloon",
        "cost": 3,
        "quantity": 3,
        "hp": 120,
        "turns": 1
    },
    "pinkBloon": {
        "displayName": "Pink Bloon",
        "type": "bloon",
        "cost": 4,
        "quantity": 1,
        "hp": 100,
        "turns": 0
    },
    "whiteBloon": {
        "displayName": "White Bloon",
        "type": "bloon",
        "cost": 5,
        "quantity": 2,
        "hp": 100,
        "turns": 1,
        "whenPlayed": "+1 card"
    },
    "blackBloon": {
        "displayName": "Black Bloon",
        "type": "bloon",
        "cost": 5,
        "quantity": 2,
        "hp": 130,
        "turns": 1,
        "whenPopped": "+1 card"
    },
    "rainbowBloon": {
        "displayName": "Rainbow Bloon",
        "type": "bloon",
        "cost": 8,
        "quantity": 2,
        "hp": 400,
        "turns": 2
    },
    "ceramicBloon": {
        "displayName": "Ceramic Bloon",
        "type": "bloon",
        "cost": 5,
        "quantity": 3,
        "hp": 250,
        "turns": 2
    },
    "moab": {
        "displayName": "MOAB",
        "type": "bloon",
        "cost": 6,
        "quantity": 1,
        "hp": 450,
        "turns": 4
    },
    "bfb": {
        "displayName": "BFB",
        "type": "bloon",
        "cost": 7,
        "quantity": 1,
        "hp": 550,
        "turns": 4
    },
    "cashDrop": {
        "displayName": "Cash Drop",
        "cost": 0,
        "effect": "+2 gold",
        "type": "power"
    },
    "supplyDrop": {
        "displayName": "Supply Drop",
        "cost": 2,
        "effect": "+2 cards",
        "type": "power"
    },
    "quickReady": {
        "displayName": "Quick Ready",
        "cost": 3,
        "effect": "Reduces turn delay on 1 target by 1 turn. Can reduce the delay to 0 turns.",
        "type": "power"
    },
    "quickBreak": {
        "displayName": "Quick Break",
        "cost": 3,
        "effect": "+100 health to hero",
        "type": "power"
    },
    "bloonEmbiggen": {
        "displayName": "Bloon Embiggen",
        "cost": 4,
        "effect": "+25 health to all bloons",
        "type": "power"
    },
    "returnTwoSender": {
        "displayName": "Return 2 Sender",
        "cost": 4,
        "effect": "Returns a bloon or monkey to the opponent's hand. Opponent is not refunded any gold they spent on it.",
        "type": "power"
    },
    "restock": {
        "displayName": "Restock",
        "cost": 4,
        "effect": "+3 cards",
        "type": "power"
    },
    "redBloonStorm": {
        "displayName": "Red Bloon Storm",
        "cost": 6,
        "effect": "Fills all empty send slots with red bloons:<ul><li>40 health</li><li>1 turn delay</li></ul>",
        "type": "power"
    },
    "stormOfArrows": {
        "displayName": "Storm of Arrows",
        "cost": 2,
        "hero": "quincy",
        "effect": "150 damage to 2 random targets",
        "type": "power"
    },
    "firestorm": {
        "displayName": "Firestorm",
        "cost": 3,
        "hero": "gwendolin",
        "effect": "70 damage to all enemy bloons",
        "type": "power"
    }
}

const heroes = {
    "quincy": {
        "displayName": "Quincy",

        "maxPoints": 9,
        "active1": {
            "cost": 3,
            "effect": "30 damage to 1 bloon"
        },
        "passive": {
            "threshold": 6,
            "effect": "10 damage to every enemy bloon played"
        },
        "active2": {
            "cost": 9,
            "effect": "50 damage to all enemy bloons"
        }
    }, 
    "gwendolin": {
        "displayName": "Gwendolin",

        "maxPoints": 20,
        "active1": {
            "cost": 5,
            "effect": "Sets 1 bloon on fire; fire does 30 damage per round"
        },
        "passive": {
            "threshold": 10,
            "effect": "+5 damage to all monkeys"
        },
        "active2": {
            "cost": 20,
            "effect": "Sets all enemy bloons on fire; if a bloon is already on fire, does 200 damage"
        }
    },
}

mainContentScreen()

function mainContentScreen() {
    document.getElementById("content").innerHTML = ""
    
    function sortCardsByType(list) {
        Object.entries(cards).forEach(([cardName, card]) => {
            list[card.type] = list[card.type] || {};
            list[card.type][cardName] = card;
        });
    }
    
    const title = templates.cardTypeTitle.content.cloneNode(true);
    title.querySelector(".cardTypeTitle").innerText = "Heroes"
    document.getElementById("content").appendChild(title)


    const clone = templates.cardContainer.content.cloneNode(true);
    for (let cardName in heroes) {
        clone.querySelector(".cardContainer").insertAdjacentHTML("beforeend", `
            <div class="cardImageContainer" id="${cardName}">
                <img class="cardImage" src="media/cards/${cardName}.png"></img>
            </div>
        `)
    }
    
    document.getElementById("content").appendChild(clone)

    const sortedCards = []
    sortCardsByType(sortedCards)
    console.log(sortedCards)
    for (let sortedCardSectionName in sortedCards) {
        const title = templates.cardTypeTitle.content.cloneNode(true);
        title.querySelector(".cardTypeTitle").innerText = types[sortedCardSectionName].displayName + " Cards"
        document.getElementById("content").appendChild(title)
    
        const sortedCardSection = sortedCards[sortedCardSectionName]

        const clone = templates.cardContainer.content.cloneNode(true);
        for (let cardName in sortedCardSection) {
            clone.querySelector(".cardContainer").insertAdjacentHTML("beforeend", `
                <div class="cardImageContainer" id="${cardName}">
                    <img class="cardImage" src="media/cards/${cardName}.png"></img>
                </div>
            `)
        }
        
        document.getElementById("content").appendChild(clone)
    }
    document.querySelectorAll(".cardImageContainer").forEach((cardImg) => {
        cardImg.addEventListener("click", () => {
            if (cards[cardImg.id] == undefined) {
                displayHero(cardImg.id)
            } else {
                displayCard(cards[cardImg.id], cardImg.id)
            }
        })
    });
}

function displayHero(heroName) {
    let card = heroes[heroName]
    document.getElementById("content").innerHTML = ""
    const cardGui = templates.card.content.cloneNode(true);
    console.log(card.displayName)
    cardGui.querySelector(".cardName").innerText = card.displayName
    cardGui.querySelector(".cardDescription").innerText = "Hero"
    cardGui.querySelector(".backButtonContainer").addEventListener("click", () => {
        mainContentScreen()
    })
    cardGui.querySelector(".pageCardImageContainer").innerHTML = `
        <img class="cardImage cardPageImage" src="media/cards/${heroName}.png"></img>
    `
    cardGui.querySelector(".statChipContainer").innerHTML = `
        <h6 class="maxPoints">Max points: ${card.maxPoints}pts</h6>
    `
    cardGui.querySelector(".cardStatsContainer").insertAdjacentHTML("beforeend", `
        <h4>Active 1</h4>
        <div class="statChipContainer statChipContainerActive1">
            <div class="statChip">
                <div class="statChipValueContainer">
                    <h3 class="statChipValue">${card.active1.cost}</h3>
                    <div class="statChipImage">
                        <img src="media/coin.png">
                    </div>
                </div>
                <p class="statChipStatName">Points</p>
            </div>
            <div class="effectContainer statChip">
                <div class="effectSubContainer">
                    <h5>Effect</h5>
                    <p>${card.active1.effect}</p>
                </div>
            </div>
        </div>
    `)
    cardGui.querySelector(".cardStatsContainer").insertAdjacentHTML("beforeend", `
        <h4>Passive</h4>
        <div class="statChipContainer statChipContainerActive1">
            <div class="statChip">
                <div class="statChipValueContainer">
                    <h3 class="statChipValue">${card.passive.threshold}</h3>
                    <div class="statChipImage">
                        <img src="media/coin.png">
                    </div>
                </div>
                <p class="statChipStatName">Points</p>
            </div>
            <div class="effectContainer statChip">
                <div class="effectSubContainer">
                    <h5>Effect</h5>
                    <p>${card.passive.effect}</p>
                </div>
            </div>
        </div>
    `)
    cardGui.querySelector(".cardStatsContainer").insertAdjacentHTML("beforeend", `
        <h4>Active 2</h4>
        <div class="statChipContainer statChipContainerActive1">
            <div class="statChip">
                <div class="statChipValueContainer">
                    <h3 class="statChipValue">${card.active2.cost}</h3>
                    <div class="statChipImage">
                        <img src="media/coin.png">
                    </div>
                </div>
                <p class="statChipStatName">Points</p>
            </div>
            <div class="effectContainer statChip">
                <div class="effectSubContainer">
                    <h5>Effect</h5>
                    <p>${card.active2.effect}</p>
                </div>
            </div>
        </div>
    `)
    // for (let simplePropertyName in properties.simple) {
    //     let property = properties.simple[simplePropertyName]
    //     if (card[simplePropertyName] != undefined) {
    //         let chip = templates.statChip.content.cloneNode(true);
    //         chip.querySelector(".statChipStatName").innerText = property.displayName
    //         chip.querySelector(".statChipValue").innerText = card[simplePropertyName]
    //         cardGui.querySelector(".statChipContainer").appendChild(chip)
    //     }
    // }
    // for (let specialPropertyName in properties.special) {
    //     let property = properties.special[specialPropertyName]
    //     if (card[specialPropertyName] != undefined) {
    //         let specialContainer = templates.specialContainer.content.cloneNode(true);
    //         specialContainer.querySelector(".specialName").innerText = property.displayName + ":"
    //         specialContainer.querySelector(".specialValue").innerText = card[specialPropertyName]
    //         cardGui.querySelector(".cardStatsContainer").appendChild(specialContainer)
    //     }
    // }
    document.getElementById("content").appendChild(cardGui)
}

function displayCard(card, cardName) {
    document.getElementById("content").innerHTML = ""
    const cardGui = templates.card.content.cloneNode(true);
    console.log(card)
    cardGui.querySelector(".cardName").innerText = card.displayName
    cardGui.querySelector(".cardDescription").innerText = types[card.type].displayName + " Card"
    cardGui.querySelector(".backButtonContainer").addEventListener("click", () => {
        mainContentScreen()
    })  
    cardGui.querySelector(".pageCardImageContainer").innerHTML = `
        <img class="cardImage cardPageImage" src="media/cards/${cardName}.png"></img>
    `
    for (let simplePropertyName in properties.simple) {
        let property = properties.simple[simplePropertyName]
        if (card[simplePropertyName] != undefined) {
            let chip = templates.statChip.content.cloneNode(true);
            chip.querySelector(".statChipStatName").innerText = property.displayName
            chip.querySelector(".statChipValue").innerText = card[simplePropertyName]
            cardGui.querySelector(".statChipContainer").appendChild(chip)
        }
    }
    for (let specialPropertyName in properties.special) {
        let property = properties.special[specialPropertyName]
        if (card[specialPropertyName] != undefined) {
            let specialContainer = templates.specialContainer.content.cloneNode(true);
            specialContainer.querySelector(".specialName").innerText = property.displayName + ":"
            specialContainer.querySelector(".specialValue").innerText = card[specialPropertyName]
            cardGui.querySelector(".cardStatsContainer").appendChild(specialContainer)
        }
    }
    document.getElementById("content").appendChild(cardGui)
}