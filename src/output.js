
class Output{
    constructor(number) {
        this.number_of_player = number;
        this.playing_area = document.getElementById("playing_area");
        this.player_screen = document.getElementById("player_screen");
    }
    //setup the room to denote number of player
    room_set_up(){
        for(var i =0; i<this.number_of_player; i++){
            
        }
    }
    //Distributes card animation
    distribute_card(){
        for(var i =0; i<this.number_of_player; i++){

        }
    }
    //Displays the card received by player
    show_card_to_player(card, number){
        //give an id and store all ids 
        var new_card = document.createElement('td');
        new_card.innerHTML=card;
        new_card.id = ('user'+number);
        this.player_screen.appendChild(new_card);
    }
    //Show cards of every player
    show_all_cards(){
        for(var i =0; i<this.number_of_player; i++){
            
        }
    }
    delete_all(){
        this.player_screen.removeChild();
    }
}