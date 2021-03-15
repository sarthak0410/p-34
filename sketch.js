var Engine = Matter.Engine,
 const World = Matter.World,
 const Events = Matter.Events,
 const Bodies = Matter.Bodies;
 const mouseConstraint= Matter.mouseConstraint

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  





}

function draw() {
  background(0);

}
function mouseDragged(){
  Matter.body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

