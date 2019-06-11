var one = document.getElementById("1chk");
var two = document.getElementById("2chk");
var three = document.getElementById("3chk");
var four = document.getElementById("4chk");
var submit = document.getElementById("submit");


names_from_form = [];
var num_from_form=0;

//One player checked
one.addEventListener("change",function(e){
    if(e.target.checked){
        console.log("One");
        magic_wand(1);
        two.checked=false;
        three.checked=false;
        four.checked=false;
        disability();
    }
    else{
        disability();
    }
});

//Two player checked
two.addEventListener("change",function(e){
    if(e.target.checked){
        console.log("Two");
        magic_wand(2);
        one.checked=false;
        three.checked=false;
        four.checked=false;
        disability();
    }
    else{
        disability();
    }
});

//Three player checked
three.addEventListener("change",function(e){
    if(e.target.checked){
        console.log("Three");
        magic_wand(3);
        two.checked=false;
        one.checked=false;
        four.checked=false;
        disability();
    }
    else{
        disability();
    }
});

//Four player checked
four.addEventListener("change",function(e){
    if(e.target.checked){
        console.log("Four");
        magic_wand(4);
        two.checked=false;
        three.checked=false;
        one.checked=false;
        disability();
    }
    else{
        disability();
    }
});


function magic_wand(num){
    for(var i =0; i<num; i++){
        document.getElementById((i.toString())).style.visibility="visible";
    }
    for(var i = num; i<4; i++){
        document.getElementById((i.toString())).style.visibility="hidden";
    }
}

function disability(){
    if( one.checked || two.checked || three.checked || four.checked){
        console.log("At least one check");
        submit.className = "button";
    }
    else{
        submit.className = "button disabled";
        for(var i = 0; i<4; i++){
            document.getElementById((i.toString())).style.visibility="hidden";
        }
    }
}


submit.addEventListener("click", function(){
    if(submit.className==="button"){
        console.log("here");
        if(one.checked)   num_from_form = 1;
        else if (two.checked) num_from_form =2;
        else if (three.checked) num_from_form =3;
        else if (four.checked) num_from_form =4;
        console.log("Number is", num_from_form);
        for(var i=0; i<num_from_form; i++){
            var val = document.getElementById((i.toString()+'name')).value
            if(!val){
                names_from_form.push(i.toString());
            }
            else{
                names_from_form.push(val);
            }
        }
        console.log(names_from_form);
        document.getElementById("get_data").style.visibility="hidden";
        magic_wand(0);
        document.getElementById("only").style.visibility="visible";
        console.log("done");
    }
});


var table = {};
console.log("Starting the game....");


document.getElementById("game_setup").addEventListener("click",function(){
    var item = document.getElementById("game_setup");
    var other = document.getElementById("get_data");
    item.style.visibility="hidden";    
    other.style.visibility="visible";
        
});

document.getElementById("only").addEventListener("click",function(){
    var item = document.getElementById("only");
    if(item.className == "play"){
        item.innerHTML= "Show Cards";
        item.style.backgroundColor="cadetblue";
        item.style.color= "aliceblue";
        item.style.border = "2px solid black";
        wait = true;
        table.output.distribute_card().then(function(){
            item.className = "ShowCards";
        });            
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
        table = new Table(num_from_form,200,2000,names_from_form);
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
