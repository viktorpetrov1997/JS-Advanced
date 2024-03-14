function createCard(face, suit) 
{
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    if(!validFaces.includes(face) || !validSuits.includes(suit))
    {
        throw new Error("Invalid card parameters");
    }

    const card = {

        face:face,
        suit:suit,
        toString: function()
        {
            let suitSymbol;
            switch(suit)
            {
                case "S": suitSymbol = "\u2660"; break;
                case "H": suitSymbol = "\u2665"; break;
                case "D": suitSymbol = "\u2666"; break;
                case "C": suitSymbol = "\u2663"; break;
            }

            return `${face}${suitSymbol}`;
        }
    };

    return card;
}

console.log(createCard("A", "S").toString()); 
