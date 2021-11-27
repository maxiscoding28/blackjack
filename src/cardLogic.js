let suits = ['heart', 'spade', 'diamond', 'club']

function initializeDeck(){
    let initializedDeck = []
    for (let i = 0; i < 4; i++) {
        let currentSuit = [suits[i]]
        
        for (let cardValue = 2; cardValue <= 14; cardValue++) {
            let newCard = {}
            

            newCard = {
                key:`${cardValue}+${currentSuit}`,
                value: String(cardValue),
                suit: currentSuit[0],
                scoreValue: cardValue,
                facedown: false,
            }

            // J=11, Q=12, K=13, A=14
            if (["11", "12", "13", "14"].indexOf(newCard.value) > -1) {
                if (newCard.value === "11") {
                    newCard.value = "J"
                    newCard.scoreValue = 10;
                }
                if (newCard.value === "12") {
                    newCard.value = "Q";
                    newCard.scoreValue = 10;
                }
                if (newCard.value === "13") {
                    newCard.value = "K"
                    newCard.scoreValue = 10;
                }
                if (newCard.value === "14") {
                    newCard.value = "A"
                    newCard.scoreValue = 11;
                }
            }
            
            initializedDeck.push(newCard);
        }
    }
    return initializedDeck;
}

function pickRandomCardIndex(currentDeckLength, numberofCards){
    let randomDeckIndexes = []
    for (let i = 0; i < numberofCards; i++) {
        let randomIndex = Math.floor(Math.random() * currentDeckLength);

        while (randomDeckIndexes.indexOf(randomIndex) > -1) {
            randomIndex = Math.floor(Math.random() * currentDeckLength)
        }

        randomDeckIndexes.push(randomIndex);
    }
    
    return randomDeckIndexes;
}


let cardLogic = {
    deckArray: initializeDeck(),
    pickRandomCardIndex: pickRandomCardIndex,
}

export default cardLogic;