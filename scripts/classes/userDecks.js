export default class UserDecks {
    constructor() {
        this.encodedDeckStrings = []
        try {
            this.encodedDeckStrings = localStorage.getItem("userDecks").split("|")
            this.cleanArray()
            this.storeDecks()
        } catch {
            this.storeDecks()
        }
    }

    restoreDecks(txt) {
        try {
            this.encodedDeckStrings = txt.split("|")
            this.cleanArray()
            this.storeDecks()
        } catch {
            this.storeDecks()
        }
    }

    cleanArray() {
        const cleanedArray = []
        this.encodedDeckStrings.forEach((encodedString) => {
            if (encodedString !== '') {
                cleanedArray.push(encodedString)
            }
        })
        this.encodedDeckStrings = cleanedArray
    }

    storeDecks() {
        const storageString = this.encodedDeckStrings.join("|")
        localStorage.setItem("userDecks", storageString);
    }

    addDeckString(encodedString) {
        this.encodedDeckStrings.push(encodedString);
        this.storeDecks()
    }

    deleteDeckWithIndex(index) {
        delete this.encodedDeckStrings[index]
        this.cleanArray()
        this.storeDecks()
    }
}