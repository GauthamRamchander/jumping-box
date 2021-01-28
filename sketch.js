var canvas;
var music;
var box
var surface1,surface2,surface3,surface4
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
 edges=createEdgeSprites()   
canvas = createCanvas(800,600);
box=createSprite(100,100,50,50)
box.velocityX=3
box.velocityY=3
surface1=createSprite(50,590,60,20)
surface2=createSprite(250,590,60,20)
surface3=createSprite(500,590,60,20)
surface4=createSprite(700,590,60,20)
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    createEdgeSprites()
        box.bounceOff(edges)
     //add condition to check if box touching surface and make it box
}
