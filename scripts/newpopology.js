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
    "redBloon": {
        "displayName": "Red Bloon",
        "type": "bloon",

        "cost": 0, "quantity": 2, "hp": 40, "turns": 1
    },
    "swarmRedBloon": {
        "displayName": "Swarm Red Bloon",
        "type": "bloon",

        "cost": 0, "quantity": 3, "hp": 20, "turns": 1
    },
}

mainContentScreen()

function mainContentScreen() {
    document.getElementById("content").innerHTML = ""
    
    function sortCardsByType(list) {
        for (let cardName in cards) {
            const card = cards[cardName]
            list[card.type] = list[card.type] || {};
            list[card.type][cardName] = card
        }
    }
    
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
            displayCard(cards[cardImg.id], cardImg.id)
        })
    });
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
    cardGui.querySelector(".imageContainer").innerHTML = `
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