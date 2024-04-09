class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    setRadius(radius){
        this.radius = radius;
    }
    setColor(color){
        this.color=color;
    }
    toString(){
        return circle[radius=1.0,color=red];
    }
    getArea(){
        return 3.14*this.radius*this.radius;
    }
    getCircumference(){
        return 2*3.14*this.radius;
    }

    }
        let data = new Circle(1.0,'red');
        console.log("Circle radius:",data.getRadius());
        console.log("Circle color:",data.getColor());
        console.log("Area of circle:",data.getArea());
        console.log("Area of circumference:",data.getCircumference ());