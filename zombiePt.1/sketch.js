const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var rGround,lGround;
var ground;
var link;
var bridge;
var jp;
var stones= [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  rGround = new Base (width-300,height/2+50,600,100,"#8d6e63",true);
  lGround = new Base (300,height/2+50,600,100,"#8d6e63",true)
  ground = new Base (0,height-10,width*2,20,"#795548",true);
  jp = new Base (width-600,height/2+10,40,20,"#8d6e63",true);


  bridge = new Bridge (21,{x:width/2-400,y:height/2});
  
  link = new Link (bridge,jp);
  Composite.add (bridge.body,jp);

  for (var i = 0;i <= 8; i++){
    var x = random(width/2-100,width/2);
    var y = random (-10,140);
    var stone = new Balls (x,y,80);
    stones.push (stone);
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  rGround.show();
  lGround.show();
  ground.show();
  bridge.show();
  jp.show();

  for (var i of stones){
    i.show ()
  }
}
