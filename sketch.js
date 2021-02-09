const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var img,bg;

function preload(){
  img = loadImage("hexagon (1).png");
  
}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


  block1 = new Block(600,460,30,40);
  block2 = new Block(570,460,30,40);
  block3 = new Block(540,460,30,40);
  block4 = new Block(630,460,30,40);
  block5 = new Block(660,460,30,40);



  block6 = new Block(585,420,30,40);
  block7 = new Block(555,420,30,40);
  block8 = new Block(615,420,30,40);
  block9 = new Block(645,420,30,40);



  bolck10 = new Block(600,370,30,40);
  block11 = new Block(570,380,30,40);
  block12 = new Block(630,380,30,40);


  block13 = new Block(600,340,30,40);

  ground1 = new Ground(600,485,300,10);
  ground2 = new Ground(1000,295,200,10);
  ground3 = new Ground(750, 600, 1500, 50)


  block14 = new Block(1000,250,30,40);
  block15 = new Block(1030,250,30,40);
  block16 = new Block(970,250,30,40);
  block17 = new Block(940,250,30,40);
  block18 = new Block(1060,250,30,40);

  block19 = new Block(1000,200,30,40);
  block20 = new Block(1030,200,30,40);
  block21 = new Block(970,200,30,40);

  block22 = new Block(1000,180,30,40);

  player = new Player(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling = new Chain(this.ball,{x:150, y:400});

}

function draw() {
  background("pink");
  Engine.update(engine);

  fill(rgb(135, 205, 236));

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  bolck10.display();
  block11.display();
  block12.display();
  fill(rgb(47, 48, 48));

  block13.display();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("lightGreen");

  block19.display();
  block20.display();
  block21.display();
  fill("yellow");

  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.setPosition(player.body,{x:235, y:420})
		chain.attach(player.body);
	}
}