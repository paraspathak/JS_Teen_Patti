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
            this.output.show_card_to_player(first_card.print(),i);
            this.output.show_card_to_player(second_card.print(),i);
            this.output.show_card_to_player(third_card.print(),i);
        }        
        this.rules = new Rules(this.hand, this.hand.length);
        console.log("Winner is: ",this.players[this.rules.winner()].name);
    }
}

var table = {};
console.log("Starting the game....")


document.getElementById("game_setup").addEventListener("click",function(){
    var item = document.getElementById("game_setup");
    var other = document.getElementById("get_data");
    item.style.visibility="hidden";    
    other.style.visibility="visible";
        
});

document.getElementById("only").addEventListener("click",function(){
    var item = document.getElementById("only");
    if(item.className == "play"){
        
        item.className = "ShowCards";
        item.innerHTML= "Show Cards";
        item.style.backgroundColor="cadetblue";
        item.style.color= "aliceblue";
        item.style.border = "2px solid black";

        table.output.distribute_card();
    }
    else if(item.className=="ShowCards"){
        
        item.className="start_new_game";
        item.style.backgroundColor="red";
        item.style.color = "white";
       
        empty_screen();
        table.distribute();
        item.innerHTML= "End Game"
    }
    else if(item.className=="start_new_game"){
        //Empty the place to store cards
        empty_screen();
        item.className="play";
        item.style.backgroundColor = "slateblue";
        item.style.color= "white";

        item.innerHTML= "Distribute Hand";
        table = new Table(3,200,2000,["Damna","Bahadur","hahaha"]);
        table.play();
    }
});



function empty_screen(){
    //Remove the four cards playing location
    var first = document.getElementById("player_screen_tl");
    var second = document.getElementById("player_screen_tr");
    var third = document.getElementById("player_screen_bl");
    var fourth = document.getElementById("player_screen_br");
    while(first.firstChild){
        first.removeChild(first.firstChild);
    }
    while(second.firstChild){
        second.removeChild(second.firstChild);
    }
    while(third.firstChild){
        third.removeChild(third.firstChild);
    }
    while(fourth.firstChild){
        fourth.removeChild(fourth.firstChild);
    }
    /*
     //Remove the user name's location
     var playing = document.getElementById("playing_area");
     while(playing.firstChild){
         playing.removeChild(playing.firstChild);
     }
     */
}

