
class Card {
    constructor(name_, suit_){
        this.card_name = name_;
        this.card_suit = suit_;
    }
    print(){
        return(name_to_string(this.card_name) + " "+ suit_to_string (this.card_suit) );
    }
    get_suit(){
        if(this.card_suit === 4) return "&#9824";
        if(this.card_suit === 3) return "&#9829";
        if(this.card_suit === 2) return "&#9670";
        if(this.card_suit === 1) return "&#9827";
    }
    get_name(){
        return name_to_string(this.card_name);
    }
    is_red(){
        if(this.card_suit===3 || this.card_suit===2) return true;
        return false;
    }
    show(){
        //make it appear in HTML page
        console.log(name_to_string(this.card_name), suit_to_string(this.card_suit));
    }
}