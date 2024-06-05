const cardContainer = document.getElementById("cardContainer")
const heroCardTemplate = document.getElementById("heroCardTemplate")
const towerCardTemplate = document.getElementById("towerCardTemplate")
const powerCardTemplate = document.getElementById("powerCardTemplate")
const statChipTemplate = document.getElementById("statChipTemplate")
const reverseStatChipTemplate = document.getElementById("reverseStatChipTemplate")
const heroAbilityChipTemplate = document.getElementById("heroAbilityChipTemplate")
const heroes = [
    {
        "name": "quincy", "displayName": "Quincy",

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
    {
        "name": "gwendolin", "displayName": "Gwendolin",

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
    }
]

const bloons = [
    {
        "name": "redBloon", "displayName": "Red Bloon",

        "cost": 0, "quantity": 2, "hp": 40, "turns": 1
    },
    {
        "name": "swarmRedBloon", "displayName": "Swarm Red Bloon",

        "cost": 0, "quantity": 3, "hp": 20, "turns": 1
    },
    {
        "name": "blueBloon", "displayName": "Blue Bloon",

        "cost": 1, "quantity": 1, "hp": 60, "turns": 1
    },
    {
        "name": "swarmBlueBloon", "displayName": "Swarm Blue Bloon",

        "cost": 1, "quantity": 3, "hp": 50, "turns": 1
    },
    {
        "name": "greenBloon", "displayName": "Green Bloon",

        "cost": 2, "quantity": 2, "hp": 100, "turns": 1
    },
    {
        "name": "swarmGreenBloon", "displayName": "Swarm Green Bloon",

        "cost": 2, "quantity": 3, "hp": 80, "turns": 1
    },
    {
        "name": "swarmGreenBloon", "displayName": "Swarm Green Bloon",

        "cost": 2, "quantity": 2, "hp": 70, "turns": 2,
        "whenPopped": "+3 gold"
    },
    {
        "name": "yellowBloon", "displayName": "Yellow Bloon",

        "cost": 3, "quantity": 2, "hp": 145, "turns": 1
    },
    {
        "name": "swarmYellowBloon", "displayName": "Swarm Yellow Bloon",

        "cost": 3, "quantity": 3, "hp": 120, "turns": 1
    },
    {
        "name": "pinkBloon", "displayName": "Pink Bloon",

        "cost": 4, "quantity": 1, "hp": 100, "turns": 0
    },
    {
        "name": "whiteBloon", "displayName": "White Bloon",

        "cost": 5, "quantity": 2, "hp": 100, "turns": 1,
        "whenPlayed": "+1 card"
    },
    {
        "name": "blackBloon", "displayName": "Black Bloon",

        "cost": 5, "quantity": 2, "hp": 130, "turns": 1,
        "whenPopped": "+1 card"
    },
    {
        "name": "rainbowBloon", "displayName": "Rainbow Bloon",

        "cost": 8, "quantity": 2, "hp": 400, "turns": 2
    },
    {
        "name": "ceramicBloon", "displayName": "Ceramic Bloon",

        "cost": 5, "quantity": 3, "hp": 250, "turns": 2
    },
    {
        "name": "moab", "displayName": "MOAB",

        "cost": 6, "quantity": 1, "hp": 450, "turns": 4
    },
    {
        "name": "bfb", "displayName": "BFB",

        "cost": 7, "quantity": 1, "hp": 550, "turns": 3
    },
]
const towers = [
    {
        "name": "dartMonkey", "displayName": "Dart Monkey",

        "cost": 1, "damage": 20, "shots": 1, "reloadTime": 1
    },
    {
        "name": "tackShooter", "displayName": "Tack Shooter",

        "cost": 2, "damage": 25, "shots": 2, "reloadTime": 2,
        "special": "If a shot is available, attacks Bloons that would attack the hero for 35 dmg"
    },
    {
        "name": "tripleShot", "displayName": "Triple Shot",

        "cost": 3, "damage": 20, "shots": 1, "reloadTime": 1,
        "onAttack": "Attacks bloons adjacent to target"
    },
    {
        "name": "boomerangMonkey", "displayName": "Boomerang Monkey",

        "cost": 3, "damage": 15, "shots": 2, "reloadTime": 1,
        "onAttack": "Attacks the next bloon clockwise"
    },
    {
        "name": "sniperMonkey", "displayName": "Sniper Monkey",

        "cost": 3, "damage": 50, "shots": 1, "reloadTime": 2,
    },
    {
        "name": "bananaFarm", "displayName": "Banana Farm",

        "cost": 3, "income": 2,
    },
    {
        "name": "crossbowMonkey", "displayName": "Crossbow Monkey",

        "cost": 5, "damage": 30, "shots": 2, "reloadTime": 2,
    },
    {
        "name": "supermonkey", "displayName": "Supermonkey",

        "cost": 5, "damage": 30, "shots": 2, "reloadTime": 2,
    },
    {
        "name": "sharpshooter", "displayName": "Sharpshooter",

        "cost": 9, "damage": 40, "shots": 3, "reloadTime": 2,
        "special": "2x damage when at 100% ammo"
    }
]
const powers = [
    {
        "name": "cashDrop", "displayName": "Cash Drop",

        "cost": 0,
        "effect": "+2 gold",
    },
    {
        "name": "supplyDrop", "displayName": "Supply Drop",

        "cost": 2,
        "effect": "+2 cards",
    },
    {
        "name": "quickReady", "displayName": "Quick Ready",

        "cost": 3,
        "effect": "Reduces turn delay on 1 target by 1 turn. Can reduce the delay to 0 turns.",
    },
    {
        "name": "quickBreak", "displayName": "Quick Break",

        "cost": 3,
        "effect": "+100 health to hero",
    },
    {
        "name": "bloonEmbiggen", "displayName": "Bloon Embiggen",

        "cost": 4,
        "effect": "+25 health to all bloons",
    },
    {
        "name": "returnTwoSender", "displayName": "Return 2 Sender",

        "cost": 4,
        "effect": "Returns a bloon or monkey to the opponent's hand. Opponent is not refunded any gold they spent on it.",
    },
    {
        "name": "restock", "displayName": "Restock",

        "cost": 4,
        "effect": "+3 cards",
    },
    {
        "name": "redBloonStorm", "displayName": "Red Bloon Storm",

        "cost": 6,
        "effect": "Fills all empty send slots with red bloons:<ul><li>40 health</li><li>1 turn delay</li></ul>",
    },
    {
        "name": "stormOfArrows", "displayName": "Storm of Arrows",

        "cost": 2, "hero": "quincy",
        "effect": "150 damage to 2 random targets",
    },
    {
        "name": "firestorm", "displayName": "Firestorm",

        "cost": 3, "hero": "gwendolin",
        "effect": "70 damage to all enemy bloons",
    }
]

function updateUrlParameter(paramName, paramValue) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(paramName, paramValue);
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('page')) {
        updateUrlParameter('page', 'heroes');
    }
    handlePageChange()
}

function handlePageChange() {
    document.querySelector(".heroesCategoryButton").classList.remove("heroesCategoryButtonSelected")
    document.querySelector(".bloonsCategoryButton").classList.remove("bloonsCategoryButtonSelected")
    document.querySelector(".towersCategoryButton").classList.remove("towersCategoryButtonSelected")
    document.querySelector(".powersCategoryButton").classList.remove("powersCategoryButtonSelected")
    cardContainer.innerHTML = ""
    switch(new URLSearchParams(window.location.search).get("page")) {
        case "heroes":
            populateHeroes()
            document.querySelector(".heroesCategoryButton").classList
                .add("heroesCategoryButtonSelected")
            break
        case "bloons":
            populateBloons()
            document.querySelector(".bloonsCategoryButton").classList
                .add("bloonsCategoryButtonSelected")
            break
        case "towers":
            populateTowers()
            document.querySelector(".towersCategoryButton").classList
                .add("towersCategoryButtonSelected")
            break
        case "powers":
            populatePowers()
            document.querySelector(".powersCategoryButton").classList
                .add("powersCategoryButtonSelected")
            break
    }
}

function handleButtonClick(page, hero) {
    updateUrlParameter('page', page);
    handlePageChange()
    if (hero != undefined) {
        document.getElementById(hero).classList.add("heroHighlighted")
    }
}

document.querySelector(".heroesCategoryButton").addEventListener('click', function() {
    handleButtonClick('heroes');
});

document.querySelector(".bloonsCategoryButton").addEventListener('click', function() {
    handleButtonClick('bloons');
});

document.querySelector(".towersCategoryButton").addEventListener('click', function() {
    handleButtonClick('towers');
});

document.querySelector(".powersCategoryButton").addEventListener('click', function() {
    handleButtonClick('powers');
});

function populateBloons() {
    bloons.forEach(bloon => {
        const clone = towerCardTemplate.content.cloneNode(true);
        clone.querySelector(".towerCardTemplateName").innerText = bloon.displayName
    
        const costChip = statChipTemplate.content.cloneNode(true);
        costChip.querySelector(".statChipStatName").innerText = "Cost"
        costChip.querySelector(".statChipValue").innerText = bloon.cost
        costChip.querySelector(".statChipImage").innerHTML = `
            <img src="media/coin.png"></img>
        `
        clone.querySelector(".statChipContainer").appendChild(costChip)
    
        const quantityChip = statChipTemplate.content.cloneNode(true);
        quantityChip.querySelector(".statChipStatName").innerText = "Quantity"
        quantityChip.querySelector(".statChipValue").innerText = bloon.quantity
        clone.querySelector(".statChipContainer").appendChild(quantityChip)
    
        const hpChip = statChipTemplate.content.cloneNode(true);
        hpChip.querySelector(".statChipStatName").innerText = "HP"
        hpChip.querySelector(".statChipValue").innerText = bloon.hp
        hpChip.querySelector(".statChipImage").innerHTML = `
            <img src="media/hp.png"></img>
        `
        clone.querySelector(".statChipContainer").appendChild(hpChip)
    
        const turnsChip = statChipTemplate.content.cloneNode(true);
        if (bloon.turns == 1) {
            turnsChip.querySelector(".statChipStatName").innerText = "Turn"
        } else {
            turnsChip.querySelector(".statChipStatName").innerText = "Turns"
        }
        turnsChip.querySelector(".statChipValue").innerText = bloon.turns
        clone.querySelector(".statChipContainer").appendChild(turnsChip)

        if (bloon.whenPopped != undefined) {
            const whenPoppedChip = statChipTemplate.content.cloneNode(true);
            whenPoppedChip.querySelector(".statChipStatName").innerText = "When popped"
            whenPoppedChip.querySelector(".statChipValue").innerText = bloon.whenPopped
            whenPoppedChip.querySelector(".statChipValue").classList.add("smallValue")
            clone.querySelector(".statChipContainer").appendChild(whenPoppedChip)
        }

        if (bloon.whenPlayed != undefined) {
            const whenPlayedChip = statChipTemplate.content.cloneNode(true);
            whenPlayedChip.querySelector(".statChipStatName").innerText = "When played"
            whenPlayedChip.querySelector(".statChipValue").innerText = bloon.whenPlayed
            whenPlayedChip.querySelector(".statChipValue").classList.add("smallValue")
            clone.querySelector(".statChipContainer").appendChild(whenPlayedChip)
        }
    
        if (bloon.special != undefined) {
            clone.querySelector(".roundedBoxSection").insertAdjacentHTML("beforeend", `
                <div class="statChip specialStatChip"></div>
            `)
            clone.querySelector(".specialStatChip").innerHTML = `
                <h5>Special</h5>
                <p>${bloon.special}</p>
            `
        }
    
        cardContainer.appendChild(clone)
    });
}


function populateTowers() {
    towers.forEach(tower => {
        const clone = towerCardTemplate.content.cloneNode(true);
        clone.querySelector(".towerCardTemplateName").innerText = tower.displayName
    
        const costChip = statChipTemplate.content.cloneNode(true);
        costChip.querySelector(".statChipStatName").innerText = "Cost"
        costChip.querySelector(".statChipValue").innerText = tower.cost
        costChip.querySelector(".statChipImage").innerHTML = `
            <img src="media/coin.png"></img>
        `
        clone.querySelector(".statChipContainer").appendChild(costChip)
        
        if (tower.damage != undefined) {
            const damageChip = statChipTemplate.content.cloneNode(true);
            damageChip.querySelector(".statChipStatName").innerText = "Damage"
            damageChip.querySelector(".statChipValue").innerText = tower.damage
            damageChip.querySelector(".statChipImage").innerHTML = `
                <img src="media/damage.png"></img>
            `
            clone.querySelector(".statChipContainer").appendChild(damageChip)
        }
    
        if (tower.shots != undefined) {
            const shotsChip = statChipTemplate.content.cloneNode(true);
            shotsChip.querySelector(".statChipStatName").innerText = "# of Shots"
            shotsChip.querySelector(".statChipValue").innerText = tower.shots
            clone.querySelector(".statChipContainer").appendChild(shotsChip)
        }
    
        if (tower.reloadTime != undefined) {
            const reloadTimeChip = statChipTemplate.content.cloneNode(true);
            reloadTimeChip.querySelector(".statChipStatName").innerText = "Reload Time"
            reloadTimeChip.querySelector(".statChipValue").innerText = tower.reloadTime
            clone.querySelector(".statChipContainer").appendChild(reloadTimeChip)
        }

        if (tower.income != undefined) {
            const incomeChip = statChipTemplate.content.cloneNode(true);
            incomeChip.querySelector(".statChipStatName").innerText = "per turn"
            incomeChip.querySelector(".statChipValue").innerText = `+${tower.income}`
            incomeChip.querySelector(".statChipImage").innerHTML = `
                <img src="media/coin.png"></img>
            `
            clone.querySelector(".statChipContainer").appendChild(incomeChip)
        }

        if (tower.special != undefined) {
            clone.querySelector(".roundedBoxSection").insertAdjacentHTML("beforeend", `
                <div class="statChip specialStatChip"></div>
            `)
            clone.querySelector(".specialStatChip").innerHTML = `
                <h5>Special</h5>
                <p>${tower.special}</p>
            `
        }

        if (tower.onAttack != undefined) {
            clone.querySelector(".roundedBoxSection").insertAdjacentHTML("beforeend", `
                <div class="statChip specialStatChip"></div>
            `)
            clone.querySelector(".specialStatChip").innerHTML = `
                <h5>On attack:</h5>
                <p>${tower.onAttack}</p>
            `
        }
    
        cardContainer.appendChild(clone)
    });
}

function populatePowers() {
    powers.forEach(power => {
        const clone = powerCardTemplate.content.cloneNode(true);
        clone.querySelector(".towerCardTemplateName").innerText = power.displayName
    
        const costChip = statChipTemplate.content.cloneNode(true);
        costChip.querySelector(".statChipStatName").innerText = "Cost"
        costChip.querySelector(".statChipValue").innerText = power.cost
        costChip.querySelector(".statChipImage").innerHTML = `
            <img src="media/coin.png"></img>
        `
        clone.querySelector(".statChipContainer").appendChild(costChip)
        if (power.hero != undefined) {
            const heroChip = reverseStatChipTemplate.content.cloneNode(true);
            heroChip.querySelector(".statChip").classList.add("linkedStatChip")
            heroChip.querySelector(".statChip").addEventListener("click", () => {
                handleButtonClick('heroes', power.hero);
            })
            switch (power.hero) {
                case "quincy":
                    heroChip.querySelector(".statChipValue").innerText = heroes[0].displayName
                    break
                case "gwendolin":
                    heroChip.querySelector(".statChipValue").innerText = heroes[1].displayName
                    break
            }
            heroChip.querySelector(".statChipStatName").innerText = "Only available with"
            heroChip.querySelector(".statChipValue").classList.add("withHeroStyle")

            clone.querySelector(".statChipContainer").appendChild(heroChip)
        }

        clone.querySelector(".effectSubContainer").innerHTML = `
            <h5>Effect</h5>
            <p>${power.effect}</p>
        `
    
        cardContainer.appendChild(clone)
    });
}

function populateHeroes() {
    heroes.forEach(hero => {
        const clone = heroCardTemplate.content.cloneNode(true);
        clone.querySelector(".roundedBoxSection").id = hero.name
        clone.querySelector(".towerCardTemplateName").innerText = hero.displayName
    
        if (hero.maxPoints == 1) {
            clone.querySelector(".maxPoints").innerText = `Max points: ${hero.maxPoints}pt`
        } else {
            clone.querySelector(".maxPoints").innerText = `Max points: ${hero.maxPoints}pts`
        }

        const active1 = heroAbilityChipTemplate.content.cloneNode(true);
        active1.querySelector(".statChipStatName").innerText = "Points"
        active1.querySelector(".statChipValue").innerText = hero.active1.cost
        active1.querySelector(".statChipImage").innerHTML = `
            <img src="media/coin.png"></img>
        `
        active1.querySelector(".effectSubContainer").innerHTML = `
            <h5>Effect</h5>
            <p>${hero.active1.effect}</p>
        `
        clone.querySelector(".statChipContainerActive1").appendChild(active1)

        const passive = heroAbilityChipTemplate.content.cloneNode(true);
        passive.querySelector(".statChipStatName").innerText = "Point Threshold"
        passive.querySelector(".statChipValue").innerText = hero.passive.threshold
        passive.querySelector(".statChipImage").innerHTML = `
            <img src="media/coin.png"></img>
        `
        passive.querySelector(".effectSubContainer").innerHTML = `
            <h5>Effect</h5>
            <p>${hero.passive.effect}</p>
        `
        clone.querySelector(".statChipContainerPassive").appendChild(passive)

        const active2 = heroAbilityChipTemplate.content.cloneNode(true);
        active2.querySelector(".statChipStatName").innerText = "Points"
        active2.querySelector(".statChipValue").innerText = hero.active2.cost
        active2.querySelector(".statChipImage").innerHTML = `
            <img src="media/coin.png"></img>
        `
        active2.querySelector(".effectSubContainer").innerHTML = `
            <h5>Effect</h5>
            <p>${hero.active2.effect}</p>
        `
        clone.querySelector(".statChipContainerActive2").appendChild(active2)
    
        cardContainer.appendChild(clone)
    });
}