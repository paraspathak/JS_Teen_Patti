
class Output{
    constructor(number) {
        this.number_of_player = number;
        this.playing_area = document.getElementById("playing_area");
        this.count = 0;
    }
    //setup the room to denote number of player
    room_set_up(names){
        for(var i =0; i<this.number_of_player; i++){
            var div=document.createElement('div');
            var name_player = document.createElement('div');
            name_player.innerHTML=names[i].name;
            name_player.style.position = "absolute";
            name_player.style.left = "75px";
            name_player.style.top = "35px";
            div.append(name_player); 
            div.id=('div'+i);
            div.style.border = 'solid';
            div.style.width = '200px';
            div.style.height = '100px';
            div.style.position = 'absolute';

            if(i==0){
                div.style.top = "8px";
                div.style.left = "16px";
            }
            else if(i ==1){
                div.style.bottom = "8px";
                div.style.right = "16px";
            }
            else if(i==2){
                div.style.bottom = "8px";
                div.style.left = "16px";
            }
            else if (i ==3){
                div.style.top = "8px";
                div.style.right = "16px";
            }
            this.playing_area.append(div);
        }
    }
    //Distributes card animation
    distribute_card(){
        for(var i =0; i<this.number_of_player; i++){
            var    parent_element = document.getElementById("player_screen_tl");
            if(i==1)    parent_element = document.getElementById("player_screen_br");
            else if(i==2)    parent_element = document.getElementById("player_screen_bl");
            else if(i==3)    parent_element = document.getElementById("player_screen_tr");
            for(var j =0; j<3; j++){
                var new_card = document.createElement('td');
                new_card.style.border = "solid";
                new_card.style.height = '200px';
                new_card.style.width = "145px";
                new_card.innerHTML= "JS TEEN PATTI";
                new_card.id = (toString(i)+toString(j));
                parent_element.append(new_card);
            }    
        }        
    }
    //Displays the card received by player
    show_card_to_player(card, number){
        //give an id and store all ids 
        var card_number =this.count;
		var add_to = document.getElementById("player_screen_tl");
		if(this.count<3){
			add_to = document.getElementById("player_screen_tl");
		}
		else if(this.count>=3 && this.count<6){
            add_to = document.getElementById("player_screen_br");
            card_number-=3;
		}
		else if(this.count>=6 && this.count<9){
            add_to = document.getElementById("player_screen_bl");
            card_number-=6;
		}
		else{
            add_to = document.getElementById("player_screen_tr");
            card_number-=9
		}
        var new_card = document.createElement('td');
        
        new_card.style.border = "solid";
        new_card.style.height = '200px';
        new_card.style.width = "145px";
        new_card.innerHTML=card;
        new_card.id = (toString(number)+toString(card_number));
        this.count ++;
        add_to.appendChild(new_card);
    }
    //Show cards of every player
    show_all_cards(){
        for(var i =0; i<this.number_of_player; i++){
            
        }
    }
    delete_all(){       //Deprecated
        for (var i=0; i<this.number_of_player;i++){
            for(var j=0; j<3;j++){
                var item = document.getElementById((toString(i)+toString(j)));
                item.remove();
            }
            
        }
    }
}