
var Suit = Object.freeze({
    "Spade":4,      //Highest value
    "Heart":3,
    "Diamond":2,
    "Clubs" : 1     //Lowest value
});

function suit_to_string(suit_number){ 
    if(suit_number === 4) return "Spade";
    if(suit_number === 3) return "Heart";
    if(suit_number === 2) return "Diamond";
    if(suit_number === 1) return "Clubs";
}

function name_to_string(number){
    if(number === 1) return "A";
    if(number === 11) return "J";
    if(number === 12) return "Q";
    if(number === 13) return "K";
    return number;
}

//create and object which takes a push method to add rows of data at a time

//Recursive algorithm to find the highest value
function Highest_row(twod_array, column_number,length, height){
    //Case when maximum card needs to found
    if(column_number === 5){
        var max_number = 0;
        var index = 0;
        var more_than_one_entry = false;
        for(var i =0; i<height; i++){
            if(twod_array[i][5].card_name === 1){    //case when there is Aces
                
                if(max_number === 14){   //more than once aces
                    more_than_one_entry = true;
                    twod_array[i][length-1] = false;    //since every thing comes with true
                }
                //update the new max number
                max_number = 14;
                index = i;
            }
            else if(twod_array[i][5].card_name>max_number){
                max_number = twod_array[i][5].card_name;
                index = i;
            }
            else if (twod_array[i][5].card_name === max_number){
                twod_array[i][length-1] = false;
                more_than_one_entry = true;
            }
        }
        if(more_than_one_entry){
            return Highest_row(twod_array,6,length, height);
        }
        else{
            return index;
        }

    }

    //Case when maximum suit needs to be found out
    if(column_number === 6){
        var max_suit = 0;
        var index = 0;
        for (var i =0; i<height; i++){
            if(!twod_array[i][length-1]){   //false case as propagated by case 5
                if(twod_array[i][6].card_suit>max_suit){
                    max_suit = twod_array[i][6].card_suit;
                    index = i;
                }
            }
        }
        return index;
    }
 
    for (var i = 0; i<height; i++){
        //only look for those with 7th element true
        if(twod_array[i][length-1]){
            if(!twod_array[i][column_number]){
                twod_array[i][length-1] = false;    //change the entry to false
            }
        }
        
    }
    //three cases

    var num_true_elem = 0;
    for (var i =0; i<height; i++){
        if(twod_array[i][column_number]){
            num_true_elem++;
        }
    }
    
    //one true
    if(num_true_elem===1){
        for (var i =0; i<height; i++){
            if(twod_array[i][column_number]){
                return i;   //return index
            }
        }   
    }
    else if(num_true_elem === 0) {  //all false
        for (var i =0; i<height; i++){
            twod_array[i][column_number] = true;    //change the entry and recursively call itself
        }
    }
    var new_column = column_number +1;
    //recursively call with second column number switch remaining value to true
    return Highest_row(twod_array,new_column, length,height);  
}

class Rules {
    constructor(total_hands, length_){
        this.hands = total_hands;
        this.length = length_
        //make a 2d array to hold all the entries
        this.score_card = new Array(length_);
        for(var i = 0; i<length_; i++){
            this.score_card[i] = new Array(8);
        }
        // Trial Color run run color double max_number max_suit
        for(var i = 0; i<length_; i++){
            this.score_card[i][0] =  this.hands[i].trial;
            this.score_card[i][1] = this.hands[i].color_run;
            this.score_card[i][2] = this.hands[i].run;
            this.score_card[i][3] = this.hands[i].color;
            this.score_card[i][4] = this.hands[i].double;
            this.score_card[i][5] = this.hands[i].max();
            this.score_card[i][6] = this.hands[i].max_suit();
            this.score_card[i][7] = true;   //true to identify which rows to look for
        }

    }
    winner(){
        return Highest_row(this.score_card,0,8,this.length);
    }
}