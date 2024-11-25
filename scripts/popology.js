import Element from "./element.js";
import {BLOONS, MONKEYS, POWERS} from "/stats/stats.js";
import {generateCard} from "./cardGenerator.js";
import Card from "./classes/card.js";
import {popupCard} from "./popupCard.js";

function setContent(
    contentArray = [
        generateCardCategorySection([...BLOONS, ...POWERS, ...MONKEYS]),
    ]
) {
    document.getElementById("cardContent").innerHTML = ""

    const cardSectionContainer = new Element("div").class("cardSectionContainer")
        .children(...contentArray)
    document.getElementById("cardContent").appendChild(cardSectionContainer.element);
}

setContent()

function generateCardCategorySection(data) {
    const cardGrid = document.createElement("div");
    cardGrid.classList.add("cardGrid");

    data.forEach(cardBlueprint => {
        try {
            const card = new Card(cardBlueprint);
            const cardContainer = new Element("div")
                .class("cardContainer")
                .id(`${card.name}Card`)
                .onclick(() => popupCard(card));

            generateCard(card, cardContainer.element);

            cardGrid.appendChild(cardContainer.element);
        } catch (error) {
            console.log(error)
        }
    });

    return new Element("div").class("cardCategorySection")
        .children(
            // new Element("div").class("sectionTitleContainer")
            //     .children(new Element("h3").text("All Cards"), new Element("hr")),
            cardGrid
        )
}

document.getElementById("searchInput").addEventListener("input", function(event) {
    const input = String(event.target.value)
    const noInput = input === ""

    function hideOrShowCards(arrayOfCards) {
        arrayOfCards.forEach(bloonCardBlueprint => {
            const card = new Card(bloonCardBlueprint);
            const element = document.getElementById(`${card.name}Card`)

            let displayCard = noInput;

            if (noInput) {
                element.style.order = "0"
            } else {
                if (card.searchInCard(input) > 0) displayCard = true;
                element.style.order = String(-card.searchInCard(input))
            }

            element.style.display = displayCard  ? "flex" : "none";
        })
    }

    hideOrShowCards([...BLOONS, ...POWERS, ...MONKEYS])
});