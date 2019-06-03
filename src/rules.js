
var Suit = Object.freeze({
    "Spade":4,      //Highest value
    "Heart":3,
    "Diamond":2,
    "Clubs" : 1     //Lowest value
});

function suit_to_string(suit_number){ 
    if(suit_number == 4) return "Spade";
    if(suit_number == 3) return "Heart";
    if(suit_number == 2) return "Diamond";
    if(suit_number == 1) return "Clubs";
}

function name_to_string(number){
    if(number == 1) return "A";
    if(number == 11) return "J";
    if(number == 12) return "Q";
    if(number == 13) return "K";
    return number;
}