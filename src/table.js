class Table{
    constructor(number_players, each_bet, starting_money, list_of_players){
        this.players = [];
        this.total_money = number_players * each_bet;
        this.deck = new Deck();
        for(var i =0; i<number_players; i++){
            this.players.push(new Player(list_of_players[i],starting_money))
        }
        this.rules = {};
        this.hand = [];
        this.output = new Output(number_players);
    }
    play(){
        //Cannot distribute cards in a single deck
        if(this.players.length>=17){
            return false;
        }
        //Shuffle the deck of card
        console.log("Shufffling deck");
        this.deck.shuffle();

        //Distribute card to each of the player
        console.log("Distributing cards......");
        this.output.room_set_up(this.players);
    }
    distribute(){
        for (var i =0; i<this.players.length; i++){
            console.log("Distributing card to:",this.players[i].name);
            var first_card = this.deck.top();
            var second_card = this.deck.top();
            var third_card = this.deck.top();
            if( first_card && second_card && third_card){
                this.hand.push(new Triple(first_card,second_card,third_card));
                this.players[i].assign_card(this.hand[this.hand.length-1]);
            }
            else{
                console.log(first_card,second_card,third_card);
                this.deck.print_deck();
            }
            console.log(i);
            this.players[i].show_to_self();
            //Pass in the whole card object
            this.output.show_card_to_player(first_card,i);
            this.output.show_card_to_player(second_card,i);
            this.output.show_card_to_player(third_card,i);
        }        
        this.rules = new Rules(this.hand, this.hand.length);
        console.log("Winner is: ",this.players[this.rules.winner()].name);
        announce_winnner(this.rules.winner());
    }
}

//same top mistake in algorithm

function announce_winnner(number){
    var tl = document.getElementById("player_screen_tl");
    var tr = document.getElementById("player_screen_tr");
    var br = document.getElementById("player_screen_br");
    var bl = document.getElementById("player_screen_bl");
    
    if(number==0){
        winner(tl);
    }
    else if(number==1){
        winner(br);
    }
    else if(number==2){
        winner(bl);
    } 
    else if(number==3){
        winner(tr);
    }
}

function winner(item){
    child = item.children;
    console.log(child);
    for( var i =0; i<3; i++){
        child[i].style.borderColor = "green";
        child[i].className = "winner";
    }
}