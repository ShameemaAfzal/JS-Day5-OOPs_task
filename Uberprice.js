class Uber {
    constructor(km){
        this.km = km;
    }
    calculatePrice(){
        let fixed = 10; //per km
        let cost = this.km * fixed;
        return cost;
    }
}
const price = new Uber(10);
console.log(price.calculatePrice())