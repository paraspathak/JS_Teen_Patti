var one = document.getElementById("1chk");
var two = document.getElementById("2chk");
var three = document.getElementById("3chk");
var four = document.getElementById("4chk");



//One player checked
one.addEventListener("change",function(e){
    if(e.target.checked){
        console.log("One");
        magic_wand(1);
        two.checked=false;
        three.checked=false;
        four.checked=false;
    }
    else{
        
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
    }
    else{
        
    }
});

//Three player checked
three.addEventListener("change",function(e){
    if(e.target.checked){
        console.log("Three");
        magic_wand(3);
        two.checked=false;
        one.checked=false;
        four.checked=false
    }
    else{
        ;
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
    }
    else{
        
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