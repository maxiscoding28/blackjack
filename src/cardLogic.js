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
                facedown: false,
            }

            // J=11, Q=12, K=13, A=14
            if (["11", "12", "13", "14"].indexOf(newCard.value) > -1) {
                if (newCard.value === "11") {
                    newCard.value = "J"
                }
                if (newCard.value === "12") {
                    newCard.value = "Q"
                }
                if (newCard.value === "13") {
                    newCard.value = "K"
                }
                if (newCard.value === "14") {
                    newCard.value = "A"
                }
            }
            
            initializedDeck.push(newCard);
        }
    }

    return initializedDeck;
}

function pickRandomCard(currentDeck){
    let randomCard = 0;
    let randomCardIndex = currentDeck.findIndex(card => card.key === randomCard.key);
    
    randomCard = currentDeck[Math.floor(Math.random() * currentDeck.length)]

    // remove from deck
    currentDeck.splice(randomCardIndex, 1);

    return randomCard;
}   



let cardLogic = {
    deckArray: initializeDeck(),
    pickRandomCard: pickRandomCard
}

export default cardLogic;