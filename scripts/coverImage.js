import {MONKEYS} from "../stats/stats.js";

const styleElement = document.getElementById("coverImageStyle");

const allCards = MONKEYS;
const bannedCardNames = ["dartMonkey"];

let randomTowerName = "zeeJaySpecial";
let newTowerName;
let attempts = 0;

try {
    while (attempts < 20 && (
        newTowerName === undefined || bannedCardNames.includes(newTowerName)
    )) {
        attempts++;
        const randomImageIndex = Math.floor(Math.random() * (allCards.length));
        newTowerName = allCards[randomImageIndex].name;
    }
    if (!(newTowerName === undefined || bannedCardNames.includes(newTowerName))) {
        randomTowerName = newTowerName;
    }

} catch (e) {
    console.error(e);
}

styleElement.innerText = `
.coverImage {
    background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('media/cardArt/${randomTowerName}.png');
    @media (prefers-color-scheme: dark) {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('media/cardArt/${randomTowerName}.png');
    }
}
`