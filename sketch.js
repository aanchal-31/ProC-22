const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball;

function setup(){
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(10,400,400,40,options);
  World.add(world,ground);
  console.log(ground);
  var ball_options={
    restitution:1.0
  }
  ball=Bodies.rectangle(200,200,50,50,ball_options);
 World.add(world,ball);
}
function draw()
{
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,10);
  rect(ball.position.x,ball.position.y,60,60);
}
