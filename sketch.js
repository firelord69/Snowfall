const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies;


var snow = [];

function preload(){
  bg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1280,720);
  engine = Engine.create();
  world = engine.world;

 
}

function draw() {
  background(bg);
  
  Engine.update(engine);
   
  if(frameCount%60===0){
    snow.push(new Snow(random(width/2-500,width/2+500),10,10))
  }

  for(var l = 0; l < snow.length; l++){
    snow[l].display();
  }

  drawSprites();
}