import { attributes } from "../stats/attributes.js";
import Element from "./element.js";

const IMAGE = {
    "X": 150,
    "Y": 110,
    "RADIUS": 110,
    "BORDER_WIDTH": 10,
    "BORDER_TEXT_OFFSET": 2
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
    "X": 225,
    "Y": 6,
    "WIDTH": 75,
    "TEXT_X": 264,
    "TEXT_Y": 48
}

const DELAY = {
    "X": 240,
    "Y": 70,
    "WIDTH": 60,
    "TEXT_X": 270,
    "TEXT_Y": 110
}

// generateCard(swarmRedBloon);

export function generateCard(blueprint, outputContainer) {
    const cardOutput = outputContainer

    let delayInfo = "", damageInfo = "";
    if (blueprint.cardType === "monkey" || blueprint.cardType === "bloon") {
        delayInfo = `
            <image x=${DELAY.X} y=${DELAY.Y} width=${DELAY.WIDTH}
                href="media/delay.png"
            />

            <text x=${DELAY.TEXT_X} y=${DELAY.TEXT_Y} class="bcsfont cardStatText delayText" 
                text-anchor="middle">${blueprint.delay}</text>
        `
        damageInfo = `
            <image x=${DAMAGE.X} y=${DAMAGE.Y} width=${DAMAGE.WIDTH}
                href="media/bloonDamage.png"
            />

            <text x=${DAMAGE.TEXT_X} y=${DAMAGE.TEXT_Y} class="bcsfont cardStatText" 
                text-anchor="middle">${blueprint.damage}</text>
            />
        `
    }

    let gradients = {
        "borderGradient": undefined,
        "textContainerGradient": undefined
    }
    switch (blueprint.cardType) {
        case "bloon":
            gradients.borderGradient = ["hsl(207, 100%, 60%)", "hsl(207, 100%, 45%)"]
            gradients.textContainerGradient = ["hsl(207, 100%, 50%)", "hsl(207, 100%, 40%)"]
            break;
        case "monkey":
            break;
        case "power":
            gradients.borderGradient = ["hsl(283, 100%, 60%)", "hsl(283, 100%, 45%)"]
            gradients.textContainerGradient = ["hsl(283, 100%, 50%)", "hsl(283, 100%, 40%)"]
            break;
    }

    const svgOutput = `<svg class="cardSvg" width="300" height="400" viewBox="0 0 300 400" 
        preserveAspectRatio="xMidYMid meet">
        <defs>
            <clipPath id="imageClip">
                <circle cx="${IMAGE.X}" cy="${IMAGE.Y}" r="${IMAGE.RADIUS - IMAGE.BORDER_WIDTH}" />
            </clipPath>
            <clipPath id="backgroundTextClip">
                <rect x="20" y="20" rx=${BACKGROUND.BORDER_RADIUS} width="260" height="360" 
                    transform="rotate(30 100 100)"/>
            </clipPath>
            <linearGradient id="${blueprint.name}_borderGradient" gradientTransform="rotate(90)">
                <stop offset="5%" stop-color="${gradients.borderGradient[0]}" />
                <stop offset="95%" stop-color="${gradients.borderGradient[1]}" />
            </linearGradient>
            <linearGradient id="${blueprint.name}_textContainerGradient" gradientTransform="rotate(90)">
                <stop offset="5%" stop-color="${gradients.textContainerGradient[0]}" />
                <stop offset="95%" stop-color="${gradients.textContainerGradient[1]}" />
            </linearGradient>
            <path id="circlePath"
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
            fill="blue" class="${blueprint.cardType}CardBackground"/>
        
        <text x="0" y="0" lengthAdjust="spacingAndGlyphs" text-anchor="left"
            class="bcsfont cardBackgroundText ${blueprint.cardType}CardBackgroundText unselectable"
            clip-path="url(#backgroundTextClip)">
            ${generateBackgroundText()}
        </text>
        
        <rect x="${TEXT.CONTAINER_X}" y="${TEXT.CONTAINER_Y}"
            width="${TEXT.CONTAINER_WIDTH}" height="${TEXT.CONTAINER_HEIGHT}"
            rx="${TEXT.CONTAINER_BORDER_RADIUS}"
            class="textContainer" fill="url(#${blueprint.name}_textContainerGradient)"
        />

        <circle cx=${IMAGE.X} cy=${IMAGE.Y} r=${IMAGE.RADIUS} class="imageBorder" 
            fill="url(#${blueprint.name}_borderGradient)"/>
        <image x=${IMAGE.X + IMAGE.BORDER_WIDTH - IMAGE.RADIUS} 
            y=${IMAGE.Y + IMAGE.BORDER_WIDTH - IMAGE.RADIUS}
            width=${(IMAGE.RADIUS - IMAGE.BORDER_WIDTH) * 2}
            href="media/cardArt/${blueprint.name}.png"
            class="cardImage" 
            clip-path="url(#imageClip)"
        />
        <text font-size="8" fill="black" class="bcsfont ${blueprint.cardType}ImageBorderTextPath" lengthAdjust="spacing" textLength="${2 * Math.PI * (IMAGE.RADIUS - IMAGE.BORDER_WIDTH)}">
            <textPath href="#circlePath" startOffset="0%">
                BCS Popology &#8226; BCS Popology &#8226; BCS Popology &#8226; BCS Popology &#8226;
                BCS Popology &#8226; BCS Popology &#8226;
            </textPath>
        </text>

        

        ${generateCoinCopies(blueprint.copies)}

        <text x=${COST.TEXT_X} y=${COST.TEXT_Y} class="bcsfont cardStatText" 
            text-anchor="middle">${blueprint.cost}</text>

        ${damageInfo}

        ${delayInfo}

        <!-- <text x=40 y=376 class="bcsfont bcsPopologyText" 
            text-anchor="start">BCS Popology</text>
        
        <text x=260 y=376 class="bcsfont bcsPopologyText" 
            text-anchor="end">Last Updated 8/26/2024</text> -->
        
    </svg>`

    const container = new Element("div").class("svgOverlay").children(
        new Element("div").class("cardTextContainer").children(
            new Element("div").class("cardTitleContainer").children(
                new Element("h4").class("bcsfont", "cardTitle")
                    .text(blueprint.displayName)
            ),
            new Element("div").class("cardDescriptionContainer").children(
                new Element("h4").class("cardDescription")
                    .text(generateDescriptionText())
            )
        )
    )

    /**
     * Generates the description text for a bloon based on its description and
     * events.
     * @param {BloonBlueprint} blueprint - The blueprint of the bloon to generate
     * the description for.
     * @returns {string} The generated description text.
     */
    function generateDescriptionText() {
        const descriptionLines = [...blueprint.description];
        blueprint.events.forEach(event => {
            descriptionLines.push(`${event[0]}: ${event[1]}`);
        });
        if (blueprint.attributes) {
            blueprint.attributes.forEach(attribute => {
                descriptionLines.push(attributes[attribute].displayName);
            });
        }
        return descriptionLines.join("\n");
    }


        
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
        if (i != amountOfRepeats - 1) { string += " " }
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