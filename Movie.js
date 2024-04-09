class Movie {
    constructor(title = '', studio = '', rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        
    }
    getPG(){
        if(this.rating == 'PG' || this.rating == 'PG13'){
           this.findPG(this.title);
        }
    } 
    findPG(result = []){
        console.log(result);
    }
}

const filmOne = new Movie('Avatar the way of water', '20th century', 'PG13');
const filmTwo = new Movie('jurassic world','Universal pictures', 'PG13')
const filmThree = new Movie('Oppenheimer', 'Syncopy Atlas Entertainment', 'R')
const filmFour = new Movie('Harry potter and deathly hollows', 'Warner Bros Pictures')
const filmFive = new Movie('Joker','DC studios', 'R')
filmOne.getPG(); 
filmTwo.getPG();
filmThree.getPG();
filmFour.getPG();
filmFive.getPG();