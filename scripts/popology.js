const cardContainer = document.getElementById("cardContainer")
const heroCardTemplate = document.getElementById("heroCardTemplate")
const towerCardTemplate = document.getElementById("towerCardTemplate")
const powerCardTemplate = document.getElementById("powerCardTemplate")
const statChipTemplate = document.getElementById("statChipTemplate")
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
            "threshold": 9,
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
            "threshold": 20,
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
    }
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

function handleButtonClick(page) {
    updateUrlParameter('page', page);
    handlePageChange()
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
    
        const damageChip = statChipTemplate.content.cloneNode(true);
        damageChip.querySelector(".statChipStatName").innerText = "Damage"
        damageChip.querySelector(".statChipValue").innerText = tower.damage
        damageChip.querySelector(".statChipImage").innerHTML = `
            <img src="media/damage.png"></img>
        `
        clone.querySelector(".statChipContainer").appendChild(damageChip)
    
        const shotsChip = statChipTemplate.content.cloneNode(true);
        shotsChip.querySelector(".statChipStatName").innerText = "# of Shots"
        shotsChip.querySelector(".statChipValue").innerText = tower.shots
        clone.querySelector(".statChipContainer").appendChild(shotsChip)
    
        const reloadTimeChip = statChipTemplate.content.cloneNode(true);
        reloadTimeChip.querySelector(".statChipStatName").innerText = "Reload Time"
        reloadTimeChip.querySelector(".statChipValue").innerText = tower.reloadTime
        clone.querySelector(".statChipContainer").appendChild(reloadTimeChip)
    
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
    
        cardContainer.appendChild(clone)
    });
}