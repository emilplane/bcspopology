import Element from "./element.js";
import {BLOONS, MONKEYS, POWERS} from "/stats/stats.js";
import {generateCard} from "./cardGenerator.js";
import Card from "./classes/card.js";
import {popupCard} from "./popupCard.js";

const pageInput = document.getElementById("pageInput")
const quickFilterMonkeysButton = document.getElementById("quickFilter_monkeys");
const quickFilterPowersButton = document.getElementById("quickFilter_powers");
const quickFilterBloonsButton = document.getElementById("quickFilter_bloons");
const loadingBar = document.getElementById("loadingBar");

let page = 1;
let amountOfCardsPerPage = 20;
let currentFilteredCards = [...BLOONS, ...POWERS, ...MONKEYS]
let filters = {
    categories: {
        bloons: true,
        powers: true,
        monkeys: true
    },
    keyword: ""
}
let debounceTimeout;
let debounceMs = 750;

contentUpdateDebounce({ updateImmediately: true });


function contentUpdateDebounce(options) {
    loadingBar.classList.remove("loadingBarHidden");

    clearTimeout(debounceTimeout);

    if (options?.resetPageCount) page = 1;

    // Filter content
    currentFilteredCards = [
        ...filters.categories.bloons ? BLOONS : [],
        ...filters.categories.powers ? POWERS : [],
        ...filters.categories.monkeys ? MONKEYS : []
    ];

    currentFilteredCards.forEach((cardBlueprint, index) => {
        currentFilteredCards[index] = new Card(cardBlueprint);
    })

    updateFiltersUi();

    // Initiate debounce timer
    debounceTimeout = setTimeout(() => {
        setContent();
        loadingBar.classList.add("loadingBarHidden");
    }, options?.updateImmediately ? 0 : debounceMs);
}

function setContent() {
    document.getElementById("cardGrid").innerHTML = ""

    // Filter keywords
    if (filters.keyword !== "") {
        const priority1Cards = [];
        const priority2Cards = [];
        currentFilteredCards.forEach(card => {
            switch (card.searchInCard(filters.keyword)) {
                case 1: priority1Cards.push(card); break;
                case 2: priority2Cards.push(card); break;
            }
        })
        currentFilteredCards = [...priority2Cards, ...priority1Cards];
    }

    const highestPage = calculateHighestPage();
    if (highestPage < page) page = highestPage;
    if (page < 1) page = 1;
    const startIndex = Math.max(0, (page - 1) * amountOfCardsPerPage);
    const endIndexPlusOne = Math.min(currentFilteredCards.length, ((page - 1) * amountOfCardsPerPage) + amountOfCardsPerPage);

    const currentPageCards = currentFilteredCards.slice(startIndex, endIndexPlusOne);

    currentPageCards.forEach((card, i) => {
        try {
            const cardContainer = new Element("div")
                .class("cardContainer")
                .id(`cardContainer-${i}`)
                .onclick(() => popupCard(card));

            document.getElementById("cardGrid").appendChild(cardContainer.element);

            generateCard(card, document.getElementById(`cardContainer-${i}`));
        } catch (error) {
            console.error(error)
        }
    })

    pageInput.placeholder = page;
    pageInput.value = "";
}

function updateFiltersUi() {
    const cl = "filterButtonSelected"
    const cat = filters.categories;
    quickFilterBloonsButton.classList.toggle(cl, !!cat.bloons);
    quickFilterPowersButton.classList.toggle(cl, !!cat.powers);
    quickFilterMonkeysButton.classList.toggle(cl, !!cat.monkeys);
}

function handlePageInput() {
    const value = pageInput.value
    let parsedValue = Number(value)
    if (isNaN(parsedValue)) parsedValue = page;
    if (parsedValue < 1) parsedValue = 1;

    page = parsedValue;

    contentUpdateDebounce();
}

document.getElementById("pageInput").addEventListener("blur", handlePageInput)

pageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        pageInput.blur();
    }
});

document.getElementById("setFirstPageButton").addEventListener("click", () => {
    if (page === 1) return;
    page = 1;
    contentUpdateDebounce();
})

document.getElementById("previousPageButton").addEventListener("click", () => {
    if (page === 1) return;
    page--;
    contentUpdateDebounce();
})

document.getElementById("nextPageButton").addEventListener("click", () => {
    if (page === calculateHighestPage()) return;
    page++;
    contentUpdateDebounce();
})

document.getElementById("setLastPageButton").addEventListener("click", () => {
    if (page === calculateHighestPage()) return;
    page = calculateHighestPage();
    contentUpdateDebounce();
})

quickFilterBloonsButton.addEventListener("click", () => {
    filters.categories.bloons = !filters.categories.bloons;
    contentUpdateDebounce({ resetPageCount: true });
})

quickFilterPowersButton.addEventListener("click", () => {
    filters.categories.powers = !filters.categories.powers;
    contentUpdateDebounce({ resetPageCount: true });
})

quickFilterMonkeysButton.addEventListener("click", () => {
    filters.categories.monkeys = !filters.categories.monkeys;
    contentUpdateDebounce({ resetPageCount: true });
})

document.getElementById("searchFilter").addEventListener("input", function(event) {
    let input = String(event.target.value);
    const noInput = input === "";
    filters.keyword = input;
    contentUpdateDebounce({ resetPageCount: true });

    // function hideOrShowCards(arrayOfCards) {
    //     arrayOfCards.forEach(bloonCardBlueprint => {
    //         const card = new Card(bloonCardBlueprint);
    //         const element = document.getElementById(`${card.name}Card`)
    //
    //         let displayCard = noInput;
    //
    //         if (noInput) {
    //             element.style.order = "0"
    //         } else {
    //             if (card.searchInCard(input) > 0) displayCard = true;
    //             element.style.order = String(-card.searchInCard(input))
    //         }
    //
    //         element.style.display = displayCard  ? "flex" : "none";
    //     })
    // }

    // hideOrShowCards([...BLOONS, ...POWERS, ...MONKEYS])
});

function calculateHighestPage() {
    return Math.ceil(currentFilteredCards.length/amountOfCardsPerPage)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}