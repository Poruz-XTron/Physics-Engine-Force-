const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options = {
    restitution:0.95,
    frictionAir:0.01,
  }
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball=Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  button1=createImg("right.png")
  button1.position(220,30);
  button1.size(50,50);
  button1.mouseClicked(HForce);
  button2=createImg("push.png");
  button2.position(20,30);
  button2.size(50,50);
  button2.mouseClicked(VForce);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20);
}
function HForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function VForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
