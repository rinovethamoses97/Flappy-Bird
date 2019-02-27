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
    fill(255);
    textSize(10);
    text("Score= "+bird.score,0,10);
    bird.update();
    bird.show();
    if(frameCount%100==0){
        pipes.push(new Pipe());
    }
    for(var i=pipes.length-1;i>=0;i--){ //array is traversed in reverse to avoid skipping of pipes after splicing
        pipes[i].update();
        pipes[i].show();
        if(pipes[i].hits(bird) && !pipes[i].hit){
            pipes[i].hit=true;
            bird.score-=10;
        }
        if(bird.x-bird.diameter/2 > pipes[i].x+pipes[i].width && !pipes[i].hit && !pipes[i].crossedBird){
            bird.score+=10;
            pipes[i].crossedBird=true;
        }
        if(pipes[i].offscreen()){
            pipes.splice(i,1);
        }
    }
}
function keyPressed(){
    if(key===' '){
        bird.up();
    }
}