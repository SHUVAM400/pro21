var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(150,500,200,50);
    block1.shapeColor=rgb(0,0,255);
    block2 = createSprite(250,500,200,50);
    block2.shapeColor="green";
    block3 = createSprite(350,500,200,50);
    block3.shapeColor="yellow";
    block4 = createSprite(450,500,200,50);
    block4.shapeColor="red";






    //create box sprite and give velocity
     ball = createSprite(400,300,50,50);
     ball.shapeColor="orange"
}

function draw() {
    background("gray");
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges);


if(block1.isTouching(ball) && ball.bounceOff (block1)){
    ball.shapeColor = "purple";
    music.play()
}
if(block2.isTouching(ball) ){
    ball.shapeColor = "green";
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop()
}
if(block3.isTouching(ball) && ball.bounceOff (block3)){
    ball.shapeColor = "yellow";
    music.play()
}
if(block4.isTouching(ball) && ball.bounceOff (block4)){
    ball.shapeColor = "red";
    music.play()
}

    //add condition to check if box touching surface and make it box

    drawSprite();
}