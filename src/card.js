
class Card {
    constructor(name_, suit_){
        this.card_name = name_;
        this.card_suit = suit_;
    }
    print(){
        return(name_to_string(this.card_name) + " "+ suit_to_string (this.card_suit) );
    }
    show(){
        //make it appear in HTML page
        console.log(name_to_string(this.card_name), suit_to_string(this.card_suit));
    }
}