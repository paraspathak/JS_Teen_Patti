class Triple {
    constructor(first_card, second_card, third_card){
        this.hand = [first_card,second_card,third_card];
        this.trial = false;
        this.run = false;
        this.color =false;
        this.color_run = false;
        this.double = false;

        //First card is largest
        if(first_card.card_name >= second_card.card_name && first_card.card_name >= third_card.card_name){
            this.hand[2] = first_card;
            if(second_card.card_name >= third_card.card_name){
                this.hand[1] = second_card;
                this.hand[0] = third_card;
            }
            else{
                this.hand[1] = third_card;
                this.hand[0] = second_card;
            }

        }
        //second card is largest
        if(second_card.card_name >= first_card.card_name && second_card.card_name >= third_card.card_name){
            this.hand[2] = second_card;
            if(first_card.card_name >= third_card.card_name){
                this.hand[1] = first_card;
                this.hand[0] = third_card;
            }
            else{
                this.hand[0] = first_card;
                this.hand[1] = third_card;
            }
        }
        //third card card is largest, and then first card is larger 
        if(third_card.card_name >= first_card.card_name && third_card.card_name >= second_card.card_name){
            this.hand[2] = third_card;
            if(first_card.card_name >= second_card.card_name){
                this.hand[1] = first_card;
                this.hand[0] = second_card;
            }
            else{
                this.hand[0] = first_card;
                this.hand[1] = second_card;
            }
        }
        
        //Color
        if(first_card.card_suit == second_card.card_suit == third_card.card_suit) { 
            this.color = true;
        }
        
        //Run
        if((this.hand[2].card_name - this.hand[0].card_name) ==2){
            this.run = true;
        }
        //Case of A K Q
        if(this.hand[0].card_name == 1 && this.hand[1].card_name == 12 && this.hand[1].card_name == 13){
            this.run = true;
        }

        //Double run
        if(this.run && this.color){
            this.color_run = true;
        }
        //Doubles 
        if(this.hand[0].card_name == this.hand[1]. card_name || this.hand[1].card_name == this.hand[2].card_name){
            this.double = true;
        }

        //Trail
        if(this.hand[0].card_name == this.hand[1].card_name == this.hand[2].card_name){
            this.trial = true;
        }
        console.log(this.hand);
    }
    max(){
        for(var i =0; i<3; i++){
            if(this.hand[i].card_name == 1){
                return this.hand[0];
            }
        }
        return this.hand[2];
    }
    min(){
        for(var i =0; i<3; i++){
            if(this.hand[i].card_name != 1){
                return this.hand[0];
            }
        }        
    }
}