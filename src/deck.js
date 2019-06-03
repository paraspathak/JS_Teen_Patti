class Deck{
    constructor() {
        this.all_cards = [];
        for (var i =1; i<14; i++){
            this.all_cards.push(new Card(i, Suit.Spade));
            this.all_cards.push(new Card(i, Suit.Heart));
            this.all_cards.push(new Card(i, Suit.Diamond));
            this.all_cards.push(new Card(i, Suit.Clubs));
        }
    }
    shuffle(){
        //Modern day implementation of Fisher-Yates Algorithm
        var i, j, x;
        for(i = this.all_cards.length; i>0; i--){
            j = Math.floor(Math.random()*(i+1));
            x = this.all_cards[i];
            this.all_cards[i] = this.all_cards[j];
            this.all_cards[j] = x;
        }
    }
    top(){
        while(true){
            var a = this.all_cards.pop(); 
            if(a){
                return a;
            }
            else{
                console.log(this.all_cards.length);
                console.log(this.all_cards[(this.all_cards.length-1)]);
            }
        }
    }
    print_deck(){
        for (var i = 0; i<this.all_cards.length; i++){
            (this.all_cards[i].show());
        }
    }
}