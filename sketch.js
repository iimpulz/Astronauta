var astronaut, iss, sleep, brush, gym, eat, drink,move,bath,edges;
var bg, sleepImg, brushImg, gymImg, eatImg, drinkImg,moveImg,bathImg;

function preload(){
  bg = loadImage("iss.png");
  sleepImg = loadImage("sleep.png");
  brushImg = loadImage("brush.png");
  gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eatImg = loadAnimation("eat1.png","eat2");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  bathImg = loadAnimation("bath1.png","bath1.png","bath2.png","bath2.png");
  moveImg = loadAnimation("move.png","move1.png");
}



function setup() {
  createCanvas(800,400);
  edges = createEdgeSprites();

  astronaut = createSprite(300,230);
  astronaut.addImage("sleeping", sleepImg);
  astronaut.scale=0.1;
}

function draw() {
  background(bg);  
  drawSprites();
  text("Instrucciones: ",10,10);
  text("Flecha hacia arriba = Cepillarse",10,30);
  text("Flecha hacia abajo = Ejercitarse",10,50);
  text("Flecha hacia la izquierda = Comer",10,70);
  text("Flecha hacia la derecha = Bañarse",10,90);
  text("Tecla M = Moverse",10,110);
  astronaut.bounceOff(edges);

  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing");
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("exercise",gymImg);
    astronaut.changeAnimation("exercise");
  }

  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eatImg);
    astronaut.changeAnimation("eating");
  }

  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing",bathImg);
    astronaut.changeAnimation("bathing");
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",moveImg);
    astronaut.changeAnimation("moving");
    astronaut.velocityX=1;
    astronaut.velocityY=1;
  }

  
}