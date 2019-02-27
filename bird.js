class Bird{
    constructor(){
        this.radius=32;
        this.y=height/2;
        this.x=20;
    }
    show(){
        fill(255);
        ellipse(this.x,this.y,this.radius,this.radius);
    }
}