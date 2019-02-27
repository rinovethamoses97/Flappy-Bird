class Pipe{
    constructor(){
        this.spacing=random(40,300);
        this.spacingCentre=random(0,height);
        this.width=random(15,50);
        this.x=width-this.width;
        this.y1=0;
        this.bottom=this.spacingCentre-(this.spacing/2);
        this.top=height-this.spacingCentre-(this.spacing/2);
        this.y2=height-this.top;
        this.speed=3;
        this.hit=false;
    }
    show(){
        if(this.hit)
            fill(255,0,0)
        else
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
    offscreen(){
        if(this.x< -this.width){
            return true;
        }
        else{
            return false;
        }
    }
}