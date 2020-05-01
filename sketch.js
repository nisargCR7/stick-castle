const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box7,box4,box5,box6,box8,box9,box10,box11;
var ground,ground1,ground2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(350,200,20,100);
    box2 = new Box(300,100,100,200);
    box3 = new Box(50,200,20,100);
    box4 = new Box(100,100,100,200);
    box5 = new Box(200,30,100,20);
    box6 = new Box(200,30,100,20);
    box7 = new Box(390,1,20,20);
    box8 = new Box(10,1,20,20);
    
    
   
   
   
   
    ground  = new Ground(200,height,400,20)
    ground1 = new Ground(400,width,20,800)
    ground2 = new Ground(0,width,20,800)
 
  
 
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    


    
    
    ground .display();
    ground1.display();
    ground2.display();
  
}