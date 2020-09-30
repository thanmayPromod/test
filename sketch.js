const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var c26
var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1
var background2
function preload(){
background2=loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20)
    //layer 1
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1=new Pig(810,350)
    log1=new Log(810,260,300,PI/2)
    //layer 2
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2=new Pig(810,220)
    log2=new Log(810,180,300,PI/2)
    //layer 3
    box5=new Box(810,160,70,70)
    log3=new Log(760,120,150,PI/7)
    log4=new Log(870,120,150,-PI/7)
    //bird
    bird1=new Bird(50,50)

}

function draw(){
    background(background2);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    pig1.display();
    log1.display();
    box1.display();
    box2.display();

    pig2.display();
    log2.display();
    box3.display();
    box4.display();

    log3.display();
    log4.display();
    box5.display();
    ground.display();

    bird1.display();
}