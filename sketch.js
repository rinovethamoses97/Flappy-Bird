var bird;
var pipes=[];
function setup(){
    createCanvas(400,600);
    background(0);
    bird=new Bird();
    pipes.push(new Pipe());
}
function draw(){
    background(0);
    bird.update();
    bird.show();
    if(frameCount%100==0){
        pipes.push(new Pipe());
    }
    for(var i=0;i<pipes.length;i++){
        pipes[i].update();
        pipes[i].show();
        if(collisonCheck(pipes[i])){
            noLoop();
            alert("Game Over!!!");
        }
    }
}
function collisonCheck(pipe){
    if(collideRectCircle(pipe.x,pipe.y1,pipe.width,pipe.bottom,bird.x,bird.y,bird.diameter) || collideRectCircle(pipe.x,pipe.y2,pipe.width,pipe.top,bird.x,bird.y,bird.diameter)){
        return true;     
    }
    else{
        return false;
    }
}
function keyPressed(){
    if(key===' '){
        bird.up();
    }
}