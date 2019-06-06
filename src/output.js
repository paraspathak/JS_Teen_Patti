
class Output{
    constructor(number) {
        this.number_of_player = number;
        this.playing_area = document.getElementById("playing_area");
        this.player_screen = document.getElementById("player_screen");
    }
    //setup the room to denote number of player
    room_set_up(names){
        for(var i =0; i<this.number_of_player; i++){
            var div=document.createElement('div');
            var name_player = document.createElement('div');
            name_player.innerHTML=names[i].name;
            div.append(name_player); 
            div.id=('div'+i);
            div.style.border = 'solid';
            div.style.width = '200px';
            div.style.height = '100px';
            div.style.position = 'absolute';

            if(i==2){
                div.style.top = "8px";
                div.style.left = "16px";
            }
            else if(i ==3){
                div.style.bottom = "8px";
                div.style.right = "16px";
            }
            else if(i==0){
                div.style.bottom = "8px";
                div.style.left = "16px";
            }
            else if (i ==1){
                div.style.top = "8px";
                div.style.right = "16px";
            }
            this.playing_area.append(div);
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