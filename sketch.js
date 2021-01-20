var garden,rabbit;
var gardenImg,rabbitImg;
var fruit, fruitimg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  fruitimg = loadImage ("carrot.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
  
//creating fruit
  fruit = createSprite(200,200,20,20);
  fruit.addImage(fruitimg);
  fruit.scale = 0.2;
} 


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  

  if(frameCount%180){
   fruit.x = Math.round(random(0,400));  
  }
  
  if(keyDown("space"))
  rabbit.velocityY = -4 ; 
  rabbit.velocityY = +3;

  drawSprites();
}