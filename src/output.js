
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
            name_player.style.width="100%";
            name_player.style.top = "35%";
            name_player.style.textAlign="center";
            div.append(name_player); 
            div.id=('div'+i);
            div.style.border = 'solid';
            div.style.width = '200px';
            div.style.height = '100px';
            div.style.position = 'absolute';
            div.style.textAlign="center";
            div.style.backgroundColor="#d9d9d9";

            if(i===0){
                div.style.top = "8px";
                div.style.left = "16px";
            }
            else if(i ===1){
                div.style.bottom = "8px";
                div.style.right = "16px";
            }
            else if(i===2){
                div.style.bottom = "8px";
                div.style.left = "16px";
            }
            else if (i ===3){
                div.style.top = "8px";
                div.style.right = "16px";
            }
            this.playing_area.append(div);
        }
    }
    //Distributes card animation
    async distribute_card(){
       var tl = document.getElementById("player_screen_tl");
       var tr = document.getElementById("player_screen_tr");
       var br = document.getElementById("player_screen_br");
       var bl = document.getElementById("player_screen_bl");
       document.getElementById("only").style.visibility="hidden";
       for(var j =0; j<3; j++){
            if(this.number_of_player>0){
                tl.append(create_card(0,j));
                await sleep(500);                
            }
            if(this.number_of_player>1){
                br.append(create_card(1,j));
                await sleep(500);                
            }
            if(this.number_of_player>2){
                bl.append(create_card(2,j));
                await sleep(500);                
            }
            if(this.number_of_player>3){
                tr.append(create_card(3,j));
                await sleep(500);                
            }                
        }       
        document.getElementById("only").style.visibility="visible";
        return true; 
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


function create_card(i,j){
    var new_card = document.createElement('td');
    new_card.style.border = "solid";
    new_card.style.height = '200px';
    new_card.style.width = "145px";
    //new_card.innerHTML= "JS TEEN PATTI";
    new_card.id = (toString(i)+toString(j));
    new_card.className="card";
    new_card.style.backgroundColor="aliceblue";
    return new_card;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }