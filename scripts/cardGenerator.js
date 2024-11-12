import { attributes } from "../stats/attributes.js";
import Card from "./classes/card.js";
import { CardEvent } from "./classes/cardEvent.js";
import Element from "./element.js";

const IMAGE = {
    "X": 150,
    "Y": 110,
    "RADIUS": 110,
    "BORDER_WIDTH": 10,
    "BORDER_TEXT_OFFSET": 2
}

const FULL_HEIGHT_IMAGE = {
    "X": -20,
    "Y": 30,
    "WIDTH": 340,
    "HEIGHT": 200,
}

const BACKGROUND = {
    "TEXT_X_OFFSET": -100,
    "TEXT_Y_OFFSET_PER_LINE": -20,
    "TEXT_LINE_HEIGHT": 1.1,
    "BORDER_RADIUS": 25
}

const TEXT = {
    "CONTAINER_WIDTH": 240,
    "CONTAINER_HEIGHT": 200,
    "CONTAINER_X": 30,
    "CONTAINER_Y": 170,
    "CONTAINER_BORDER_RADIUS": 20,
    "TITLE_FONT_SIZE_FACTOR": 0.8,
    "DESCRIPTION_FONT_SIZE_FACTOR": 0.6
}

const COST = {
    "X": 0,
    "Y": 0,
    "RADIUS": 35,
    "TEXT_X": 35,
    "TEXT_Y": 48,
    "COIN_SPACING": 20
}

const DAMAGE = {
    "BLOON_X": 225,
    "BLOON_Y": 6,
    "BLOON_WIDTH": 75,
    "MONKEY_X": 229,
    "MONKEY_Y": 0,
    "MONKEY_WIDTH": 70,
    "TEXT_X": 264,
    "TEXT_Y": 48,
}

const AMMO = {
    "X": 220,
    "Y": 58,
    "WIDTH": 85,
    "TEXT_X": 263,
    "TEXT_Y": 110
}

const DELAY = {
    "X": 240,
    "Y": 70,
    "WIDTH": 60,
    "TEXT_X": 270,
    "TEXT_Y": 110,
    "MONKEY_Y_OFFSET": 60
}

const DEFENDER = {
    "X": 155,
    "Y": -3,
    "WIDTH": 75,
    "TEXT_X": 190,
    "TEXT_Y": 45
}

const SHIELD = {
    "X": 150,
    "Y": -3,
    "WIDTH": 75,
    "TEXT_X": 185,
    "TEXT_Y": 45
}

export function generateCard(card, outputContainer) {
    const cardOutput = outputContainer

    let delayInfo = "", damageInfo = "", ammoInfo = "", defenderInfo = "", shieldInfo = "";
    if (["monkey", "bloon"].includes(card.cardType)) {
        card.delay !== undefined ? delayInfo = `
            <image x=${DELAY.X}
                y=${card.cardType === "monkey" ? DELAY.Y + DELAY.MONKEY_Y_OFFSET : DELAY.Y}
                width=${DELAY.WIDTH}
                href="media/delay.png"
            />

            <text x=${DELAY.TEXT_X} y=${card.cardType === "monkey" ? DELAY.TEXT_Y + DELAY.MONKEY_Y_OFFSET : DELAY.TEXT_Y} class="bcsfont cardStatText delayText" 
                text-anchor="middle">${card.delay}</text>
        ` : ""
        card.damage !== undefined ? damageInfo = `
            <image x=${DAMAGE[`${card.cardType.toUpperCase()}_X`]}
                   y=${DAMAGE[`${card.cardType.toUpperCase()}_Y`]}
                   width=${DAMAGE[`${card.cardType.toUpperCase()}_WIDTH`]}
                   href="media/${card.cardType}Damage.png"
            />

            <text x=${DAMAGE.TEXT_X} y=${DAMAGE.TEXT_Y} class="bcsfont cardStatText" 
                text-anchor="middle">${card.damage}</text>
            />
        ` : ""
        if (card.cardType === "monkey") {
            card.ammo !== undefined ? ammoInfo = `
                <image x=${AMMO.X} y=${AMMO.Y} width=${AMMO.WIDTH}
                    href="media/ammo.png"
                />
    
                <text x=${AMMO.TEXT_X} y=${AMMO.TEXT_Y} class="bcsfont cardStatText ammoText" 
                    text-anchor="middle">${card.ammo}</text>
            ` : ""
            card.defender !== undefined ? defenderInfo = `
                <image x=${DEFENDER.X} y=${DEFENDER.Y} width=${DEFENDER.WIDTH}
                    href="media/defender.png"
                />
    
                <text x=${DEFENDER.TEXT_X} y=${DEFENDER.TEXT_Y} class="bcsfont cardStatText defenderText" 
                    text-anchor="middle">+${card.defender}</text>
            ` : ""
        } else if (card.cardType === "bloon") {
            card.shield !== undefined ? shieldInfo = `
                <image x=${SHIELD.X} y=${SHIELD.Y} width=${SHIELD.WIDTH}
                    href="media/shield.png"
                />
    
                <text x=${SHIELD.TEXT_X} y=${SHIELD.TEXT_Y} class="bcsfont cardStatText defenderText"
                    text-anchor="middle">+${card.shield}</text>
            ` : ""
        }
    }

    let gradients = {
        "borderGradient": undefined,
        "textContainerGradient": undefined
    }
    switch (card.cardType) {
        case "bloon":
            gradients.borderGradient = ["hsl(207, 100%, 60%)", "hsl(207, 100%, 45%)"]
            gradients.textContainerGradient = ["hsl(207, 100%, 50%)", "hsl(207, 100%, 40%)"]
            break;
        case "monkey":
            gradients.borderGradient = ["hsl(8, 100%, 60%)", "hsl(8, 100%, 45%)"]
            gradients.textContainerGradient = ["hsl(8, 100%, 50%)", "hsl(8, 100%, 40%)"]
            break;
        case "power":
            gradients.borderGradient = ["hsl(283, 100%, 60%)", "hsl(283, 100%, 45%)"]
            gradients.textContainerGradient = ["hsl(283,100%,50%)", "hsl(283, 100%, 40%)"]
            break;
    }

    const svgOutput = `<svg class="cardSvg" width="300" height="400" viewBox="0 0 300 400" 
        preserveAspectRatio="xMidYMid meet">
        <defs>
            <filter id="bwFilter${card.name}">
                <feColorMatrix type="matrix"
                    values="0.33 0.33 0.33 0 0
                            0.33 0.33 0.33 0 0
                            0.33 0.33 0.33 0 0
                            0    0    0    1 0"
                />
            </filter>
            <clipPath id="imageClip${card.name}">
                <circle cx="${IMAGE.X}" cy="${IMAGE.Y}" r="${IMAGE.RADIUS - IMAGE.BORDER_WIDTH}" />
            </clipPath>
            <clipPath id="backgroundTextClip${card.name}">
                <rect x="20" y="20" rx=${BACKGROUND.BORDER_RADIUS} width="260" height="360" 
                    transform="rotate(30 100 100)"/>
            </clipPath>
            <clipPath id="fullHeightImageClip${card.name}">
                <rect x="30" y="30" rx="20" width="240" height="340"/>
            </clipPath>
            <linearGradient id="fullHeightImageGradient${card.name}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="black" stop-opacity="0.1"/>
                <stop offset="50%" stop-color="black" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="black" stop-opacity="1"/>
            </linearGradient>
            <linearGradient id="borderGradient${card.name}" gradientTransform="rotate(90)">
                <stop offset="5%" stop-color="${gradients.borderGradient[0]}" />
                <stop offset="95%" stop-color="${gradients.borderGradient[1]}" />
            </linearGradient>
            <linearGradient id="textContainerGradient${card.name}" gradientTransform="rotate(90)">
                <stop offset="5%" stop-color="${gradients.textContainerGradient[0]}" />
                <stop offset="95%" stop-color="${gradients.textContainerGradient[1]}" />
            </linearGradient>
            <path id="circlePath${card.name}"
                d="M ${IMAGE.X},${IMAGE.Y}
                m -${IMAGE.RADIUS - IMAGE.BORDER_WIDTH + IMAGE.BORDER_TEXT_OFFSET},
                0 a ${IMAGE.RADIUS - IMAGE.BORDER_WIDTH + IMAGE.BORDER_TEXT_OFFSET},
                ${IMAGE.RADIUS - IMAGE.BORDER_WIDTH + IMAGE.BORDER_TEXT_OFFSET} 0 1,
                1 ${2 * (IMAGE.RADIUS - IMAGE.BORDER_WIDTH + IMAGE.BORDER_TEXT_OFFSET)},
                0 a ${IMAGE.RADIUS - IMAGE.BORDER_WIDTH + IMAGE.BORDER_TEXT_OFFSET},
                ${IMAGE.RADIUS - IMAGE.BORDER_WIDTH + IMAGE.BORDER_TEXT_OFFSET} 0 1,
                1 -${2 * (IMAGE.RADIUS - IMAGE.BORDER_WIDTH + IMAGE.BORDER_TEXT_OFFSET)},0"
            />
        </defs>

        <rect width="100%" height="100%" fill="hsla(0, 0%, 80%, 0.0)" />

        <rect x="20px" y="20px" rx=${BACKGROUND.BORDER_RADIUS} width="260" height="360" 
            fill="blue" class="${card.cardType}CardBackground"/>
        
        <text x="0" y="0" lengthAdjust="spacingAndGlyphs" text-anchor="left"
            class="bcsfont cardBackgroundText ${card.cardType}CardBackgroundText unselectable"
            clip-path="url(#backgroundTextClip${card.name})">
            ${generateBackgroundText()}
        </text>
        
        ${
            card.cardType === "monkey"
            ?`
            <image x=${FULL_HEIGHT_IMAGE.X} 
                y=${FULL_HEIGHT_IMAGE.Y}
                width=${FULL_HEIGHT_IMAGE.WIDTH}
                rx="${TEXT.CONTAINER_BORDER_RADIUS}"
                href="media/cardArt/dartMonkey.png"
                clip-path="url(#fullHeightImageClip${card.name})"
                filter="url(#fullHeightImageGradient${card.name}) url(#bwFilter${card.name})"
            />
            <image x=${FULL_HEIGHT_IMAGE.X} 
                y=${FULL_HEIGHT_IMAGE.Y}
                width=${FULL_HEIGHT_IMAGE.WIDTH}
                rx="${TEXT.CONTAINER_BORDER_RADIUS}"
                href="media/cardArt/${card.name}.png"
                clip-path="url(#fullHeightImageClip${card.name})"
                filter="url(#fullHeightImageGradient${card.name})"
            />
            <rect x="${FULL_HEIGHT_IMAGE.X}" y="${FULL_HEIGHT_IMAGE.Y}"
                  width="${FULL_HEIGHT_IMAGE.WIDTH}" height="${340}"
                  rx="${TEXT.CONTAINER_BORDER_RADIUS}"
                  clip-path="url(#fullHeightImageClip${card.name})"
                  fill="url(#fullHeightImageGradient${card.name})"
            />
            `
            :`<rect x="${TEXT.CONTAINER_X}" y="${TEXT.CONTAINER_Y}"
                  width="${TEXT.CONTAINER_WIDTH}" height="${TEXT.CONTAINER_HEIGHT}"
                  rx="${TEXT.CONTAINER_BORDER_RADIUS}"
                  className="textContainer" fill="url(#textContainerGradient${card.name})"
            />
            <circle cx=${IMAGE.X} cy=${IMAGE.Y} r=${IMAGE.RADIUS} class="imageBorder" 
                fill="url(#borderGradient${card.name}"/>
            <image x=${IMAGE.X + IMAGE.BORDER_WIDTH - IMAGE.RADIUS} 
                y=${IMAGE.Y + IMAGE.BORDER_WIDTH - IMAGE.RADIUS}
                width=${(IMAGE.RADIUS - IMAGE.BORDER_WIDTH) * 2}
                href="media/cardArt/redBloon.png"
                class="cardImage" 
                clip-path="url(#imageClip${card.name})"
                filter="url(#bwFilter${card.name})"
            />
            <image x=${IMAGE.X + IMAGE.BORDER_WIDTH - IMAGE.RADIUS} 
                y=${IMAGE.Y + IMAGE.BORDER_WIDTH - IMAGE.RADIUS}
                width=${(IMAGE.RADIUS - IMAGE.BORDER_WIDTH) * 2}
                href="media/cardArt/${card.name}.png"
                class="cardImage" 
                clip-path="url(#imageClip${card.name})"
            />
            <text font-size="8" fill="black" class="bcsfont ${card.cardType}ImageBorderTextPath"
                lengthAdjust="spacing" textLength="${2 * Math.PI * (IMAGE.RADIUS - IMAGE.BORDER_WIDTH)}">
                <textPath href="#circlePath" startOffset="0%">
                    BCS Popology &#8226; BCS Popology &#8226; BCS Popology &#8226; BCS Popology &#8226;
                    BCS Popology &#8226; BCS Popology &#8226;
                </textPath>
            </text>
            `
        }
        
        ${generateCoinCopies(card.copies)}
        <text x=${COST.TEXT_X} y=${COST.TEXT_Y} class="bcsfont cardStatText" 
            text-anchor="middle">${card.cost}</text>
        
        ${damageInfo}
        ${ammoInfo}
        ${delayInfo}
        ${defenderInfo}
        ${shieldInfo}

        <!-- <text x=40 y=376 class="bcsfont bcsPopologyText" 
            text-anchor="start">BCS Popology</text>
        
        <text x=260 y=376 class="bcsfont bcsPopologyText" 
            text-anchor="end">Last Updated 8/26/2024</text> -->
        
    </svg>`

    const textContainerClasses = ["cardTextContainer"]

    if (card.cardType === "monkey") textContainerClasses.push("monkeyTextConainer")

    const container = new Element("div").class("svgOverlay").children(
        new Element("div").class(...textContainerClasses).children(
            new Element("div").class("cardTitleContainer").children(
                new Element("h4").class("bcsfont", "cardTitle")
                    .text(card.displayName)
            ),
            new Element("div").class("cardDescriptionContainer").children(
                new Element("h4").class("cardDescription")
                    .text(card.descriptionText)
            )
        )
    )

    cardOutput.appendChild(container.element)
    cardOutput.insertAdjacentHTML("afterbegin", svgOutput)
    cardOutput.classList.add("generatedCard")

    function adjustTitle() {
        adjustFontSize("Title");
    }

    function adjustDescription() {
        adjustFontSize("Description");
    }

    function adjustFontSize(type) {
        const container = cardOutput.querySelector(".cardTextContainer");
        const responsiveText = cardOutput.querySelector(`.card${type}`);
        const containerWidth = container.offsetWidth;
        let fontSize;
        switch (type) {
            case "Title":
                fontSize = containerWidth / (10 / (TEXT.TITLE_FONT_SIZE_FACTOR));
                break;
            case "Description":
                fontSize = containerWidth / (10 / (TEXT.DESCRIPTION_FONT_SIZE_FACTOR));
                break;
        }
        responsiveText.style.fontSize = fontSize + 'px';
    
        // Check if text is overflowing and trigger the procedure to make the font size smaller
        if (responsiveText.scrollWidth > container.clientWidth) {
            // shrinkFontSize(responsiveText, container);
        }
    }
    
    function shrinkFontSize(responsiveText, container) {
        let fontSize = parseInt(window.getComputedStyle(responsiveText).fontSize);
    
        while (responsiveText.scrollWidth > container.clientWidth && fontSize > 0) {
            fontSize--;
            responsiveText.style.fontSize = fontSize + 'px';
        }
    }
    
    window.addEventListener('load', adjustTitle);
    window.addEventListener('resize', adjustTitle);
    adjustTitle();
    window.addEventListener('load', adjustDescription);
    window.addEventListener('resize', adjustDescription);
    adjustDescription();
}

function generateBackgroundText() {
    const output = [];
    let string = ""
    const amountOfRepeats = 16;
    const lineCount = 32;
    for (let i = 0; i < amountOfRepeats; i++) {
        string += "BCS Popology";
        if (i !== amountOfRepeats - 1) { string += " " }
    }
    for (let i = 0; i < lineCount; i++) {
        output.push(`<tspan x="${BACKGROUND.TEXT_X_OFFSET + BACKGROUND.TEXT_Y_OFFSET_PER_LINE * i}"
            dy="1.1em">${string}</tspan>`);
    }
    return output.join('');
}

function generateCoinCopies(amountOfRepeats) {
    const output = [];
    for (let i = 0; i < amountOfRepeats; i++) {
        output.unshift(`<image x=${COST.X+(COST.COIN_SPACING*i)} y=${COST.Y} width=${COST.RADIUS * 2}
            href="media/coin.png"
        />`);
    }
    return output.join('');
}