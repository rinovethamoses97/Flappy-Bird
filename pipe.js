class Pipe{
    constructor(){
        this.width=15;
        this.x=width-this.width;
        this.y1=0;
        this.bottom=random(height/2);
        this.top=random(height/2);
        this.y2=height-this.top;
        this.speed=3;
    }
    show(){
        fill(255);
        rect(this.x,this.y1,this.width,this.bottom);
        rect(this.x,this.y2,this.width,this.top);
    }
    update(){
        this.x-=this.speed;
    }
    hits(bird){
        if(collideRectCircle(this.x,this.y1,this.width,this.bottom,bird.x,bird.y,bird.diameter) || collideRectCircle(this.x,this.y2,this.width,this.top,bird.x,bird.y,bird.diameter)){
            return true;     
        }
        else{
            return false;
        }
    }
}