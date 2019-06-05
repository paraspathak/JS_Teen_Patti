class Player{
    constructor (name_, money_){
        this.name = name_;
        this.money = money_;
        this.cards_received = {};
    }
    assign_card(hand_received){
        this.cards_received = hand_received;    //seems this is not working???
    }
    show_to_self(){
        //Write out a way to print to the html page
        (this.cards_received.hand[0].show());       //it is becomming undefined here, idk why
        (this.cards_received.hand[1].show());
        (this.cards_received.hand[2].show());

    }
    show_to_table(){
        //when the player wants to show
    }
    bet(amount){
        if(amount>this.money){
            //error
        }
        else{
            this.money-=amount;
        }
    }
}