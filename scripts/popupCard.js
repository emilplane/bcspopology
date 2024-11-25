import {generateCard} from "./cardGenerator.js";
import Element from "./element.js";

export function popupCard(card) {
    console.log(card)
    document.querySelector(".cardPopupWrapper").style.display = "flex";
    document.querySelector(".cardPopup").classList.add("bloonCardPopup");
    document.querySelector(".cardPopup").innerHTML = `
        <div class="cardPopupCardWrapper">
            <div class="cardPopupCardContainer"></div>
        </div>
        <div class="cardPopupInfoWrapper"></div>
    `
    generateCard(card, document.querySelector(".cardPopupCardContainer"));

    const statChipContainer = new Element("div").class("statChipContainer");
    const propertiesAsStatChips = ["cost", "damage", "delay", "copies", "shield"];
    const propertyDescriptions = {
        "cost": "How much gold each copy of the card costs.",
        "damage": `Amount of ${card.cardType === "monkey" ? "damage each attack does." : "HP this Bloon has, and the amount of damage it deals to the opponent's hero."}`,
        "delay": `The amount of turns it takes for this ${card.cardType === "monkey" ? "tower to reload its ammo." : "Bloon to damage the opponent's hero."}`,
        "shield": `Blocks up to ${card.shield} damage.`
    }

    // Modify description if this card does adjacent damage
    if (Array.isArray(card.blueprint.damage)) {
        propertyDescriptions.damage = `This card's main attack does ${card.blueprint.damage[1]} damage. Additionally, this card does ${
            card.blueprint.damage[0] !== 0 ? `${card.blueprint.damage[0]} damage to the previous Bloon` : ""} ${
            card.blueprint.damage[0] !== 0 && card.blueprint.damage[2] !== 0 ? `and` : ""} ${
            card.blueprint.damage[2] !== 0 ? `${card.blueprint.damage[2]} damage to the next Bloon` : ""}. Damage to adjacent bloons can't be buffed.`
    }

    // Add card copies if this card is a bloon card
    if (card.cardType === "bloon") {
        propertyDescriptions.copies =
            `Number of times this card can be played when drawn. Each play costs ${card.cost} gold (the cost of this card).`
    } else {
        delete propertiesAsStatChips[3]
    }

    if (card.cardType === "monkey") {
        // propertiesAsStatChips.push("ammo")
        // propertyDescriptions.ammo =
        //     `Number of times this Monkey can attack.`
    }

    if (card.defender) {
        propertiesAsStatChips.push("defender")
        propertyDescriptions.defender =
            `This tower can attack a bloon about to hit your hero, with +${card.defender} (${card.damage + card.defender}) damage when doing so.`
    }

    propertiesAsStatChips.forEach(property => {
        if (card[property] !== undefined) {
            statChipContainer.children(
                new Element("div").class("statChip").children(
                    new Element("h6").text(property.charAt(0).toUpperCase() + property.slice(1))
                        .class("statChipTitle"),
                    new Element("h5").text(
                        Array.isArray(card.blueprint.damage) && property === "damage"
                            ? `${card.blueprint.damage[0]} | ${card.blueprint.damage[1]} | ${card.blueprint.damage[2]}`
                            : card[property]
                    ),
                    new Element("div").class("statTooltipWrapper")
                        .children(new Element("div").class("statTooltip")
                            .children(new Element("p").text(propertyDescriptions[property]))
                        )
                )
            )
        }
    })

    const cardAttributes = [];

    if (card.attributes !== undefined) {
        card.attributes.forEach(attribute => {
            cardAttributes.push(new Element("div").class("attributeCard").children(
                new Element("h5").text(attribute.displayName).class("bcsfont"),
                new Element("p").text(attribute.description(card)),
            ))
        })
    }

    const cardEvents = [];

    if (card.events !== undefined) {
        card.events.forEach(event => {
            const cardEvent = event;

            const card = new Element("div").class("eventCard").children(
                new Element("h5").text(cardEvent.trigger.displayName).class("bcsfont"),
                cardEvent.actionElement
            )

            cardEvents.push(card)
        })
    }

    const calculationsStatChipContainer = new Element("div").class("statChipContainer");

    function statChipElement(propertyName, propertyValue, hoverText) {
        const roundedValue = Number(propertyValue).toFixed(2)

        return new Element("div").class("statChip").children(
            new Element("h5").text(roundedValue),
            new Element("h6").text(propertyName)
                .class("statChipTitle"),
            new Element("div").class("statTooltipWrapper")
                .children(new Element("div").class("statTooltip")
                    .children(new Element("p").text(hoverText))
                )
        )
    }

    let atLeastOneStatExists = false
    const statChipCalculator = (propertyName, propertyValue, hoverText, conditions) => {
        if (conditions.every(condition => card[condition] !== undefined)) {
            atLeastOneStatExists = true
            calculationsStatChipContainer.children(statChipElement(
                card.isOnFire ? propertyName + " + burn" : propertyName,
                propertyValue(card).toFixed(2),
                hoverText
            ));
        }
    }

    let dmg = Array.isArray(card.blueprint.damage) ? card.blueprint.damage.reduce((a, b) => a + b, 0) : card.damage
    if (card.ammo !== undefined) dmg = dmg * card.ammo

    statChipCalculator(
        card.cardType === "monkey" ? "dmg/$" : "HP/$",
        card => dmg / card.cost,
        "This card's raw cost efficiency: damage divided by cost.",
        ["damage", "cost"]
    );

    statChipCalculator(
        "sHP/$",
        card => (dmg + card.shield) / card.cost,
        "This card's raw cost efficiency including shield: HP plus shield divided by cost.",
        ["damage", "cost", "shield"]
    );

    statChipCalculator(
        card.cardType === "monkey" ? "dmg/turn" : "HP/turn",
        card => (dmg / card.delay),
        card.cardType === "monkey"
            ? "This card's damage per delay."
            : "This card's HP per delay. This is the average amount of damage your opponent needs to do per turn to kill this card, excluding shield.",
        ["damage", "delay"]
    );

    statChipCalculator(
        "sHP/turn",
        card => (dmg + card.shield) / card.delay,
        "This card's HP per delay, including shield. This is the average amount of damage your opponent needs to do per turn to kill this card, including the shield.",
        ["damage", "delay", "shield"]
    );

    statChipCalculator(
        card.cardType === "monkey" ? "dmg/turn/$" : "HP/turn/$",
        card => (dmg / card.delay) / card.cost,
        card.cardType === "monkey"
            ? "This card's damage per delay per cost."
            : "This card's HP per delay per cost.",
        ["damage", "delay"]
    );

    statChipCalculator(
        "sHP/turn/$",
        card => ((dmg + card.shield) / card.delay) / card.cost,
        "This card's HP including shield per delay per cost.",
        ["damage", "delay", "shield"]
    );

    const detailedStatsBody = new Element("div").class("detailedStatsBody")
        .children(statChipContainer, ...cardAttributes, ...cardEvents);

    const calculationsBody = new Element("div").class("detailedStatsBody")
        .children(calculationsStatChipContainer)

    const calculationElements = atLeastOneStatExists ? [
        new Element("div").class("calculationsTitleContainer")
            .children(
                new Element("h5").text("Card Calculations")
            ),
        new Element("hr").class("popupDividingLine"),
        new Element("p")
            .text("Warning: these calculations do not yet take into account all special card properties."),
        calculationsBody
    ] : []

    document.querySelector(".cardPopupInfoWrapper").insertAdjacentElement("beforeend",
        new Element("div").class("cardPopupInfoContainer").children(
            new Element("div").class("detailedStatsTitleContainer")
                .children(
                    new Element("h5").text("Detailed Stats"),
                    new Element("h5").class("closePopupButton").text("Close")
                ),
            new Element("hr").class("popupDividingLine"),
            detailedStatsBody,
            ...calculationElements
        )
            .element
    );

    document.querySelector(".closePopupButton").addEventListener("click", () => {
        document.querySelector(".cardPopupWrapper").style.display = "none";
    });
}