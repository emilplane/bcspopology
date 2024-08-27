import Element from "./element.js";
import { BLOONS, POWERS } from "/stats.js";
import { generateCard } from "./cardGenerator.js";

const cardSectionContainer = new Element("div").class("cardSectionContainer")
    .children(
        generateCardCategorySection("Power Cards", POWERS),
        generateCardCategorySection("Bloon Cards", BLOONS)
    )

document.getElementById("content").appendChild(cardSectionContainer.element)

function generateCardCategorySection(name, data) {
    const cardGrid = document.createElement("div")
    cardGrid.classList.add("cardGrid")
    data.forEach(bloonCard => {
        const cardContainer = document.createElement("div")
        cardContainer.classList.add("cardContainer")
        generateCard(bloonCard, cardContainer)
        cardGrid.appendChild(cardContainer)
        cardGrid.lastElementChild.addEventListener("click", () => popupCard(bloonCard))
    });
    return new Element("div").class("cardCategorySection")
        .children(
            new Element("div").class("sectionTitleContainer")
                .children(new Element("h3").text(name), new Element("hr")),
            cardGrid
        )
}

function popupCard(card) {
    document.querySelector(".cardPopupWrapper").style.display = "flex";
    document.querySelector(".cardPopup").classList.add("bloonCardPopup");
    document.querySelector(".cardPopup").innerHTML = `
        <div class="cardPopupCardContainer"></div>
        <div class="cardPopupInfoWrapper"></div>
    `
    console.log(card)
    generateCard(card, document.querySelector(".cardPopupCardContainer"))
    
    const statChipContainer = new Element("div").class("statChipContainer")
    const propertiesAsStatChips = ["cost", "damage", "delay", "copies"]
    const propertyDescriptions = {
        "cost": "How much gold each copy of the card costs.",
        "damage": "Amount of HP this Bloon has, and the amount of damage it deals to the opponent's hero.",
        "delay": "The amount of turns it takes for this Bloon to damage the opponent's hero.",
        "copies": `Number of times this card can be played when drawn. Each play costs ${card.cost} gold (the cost of this card).`
    }
    propertiesAsStatChips.forEach(property => {
        console.log(card[property])
        if (card[property] != undefined) {
            statChipContainer.children(
                new Element("div").class("statChip").children(
                    new Element("h6").text(property.charAt(0).toUpperCase() + property.slice(1))
                        .class("statChipTitle"),
                    new Element("h5").text(card[property]),
                    new Element("div").class("statTooltipWrapper")
                        .children(new Element("div").class("statTooltip")
                        .children(new Element("p").text(propertyDescriptions[property]))
                    )
                )
            )
        }
    })

    const detailedStatsBody = new Element("div").class("detailedStatsBody")
        .children(statChipContainer)

    document.querySelector(".cardPopupInfoWrapper").insertAdjacentElement("beforeend", 
        new Element("div").class("cardPopupInfoContainer").children(
            new Element("div").class("detailedStatsTitleContainer")
                .children(
                    new Element("h5").text("Detailed Stats"),
                    new Element("h5").class("closePopupButton").text("Close")
                ),
            new Element("hr").class("popupDividingLine"),
            detailedStatsBody
        )
        .element
    )


    document.querySelector(".closePopupButton").addEventListener("click", () => {
        document.querySelector(".cardPopupWrapper").style.display = "none";
    })
}

document.addEventListener("keydown", function(event) {
    if (event.key === "m") {
        popupCard(BLOONS[0])
    }
})