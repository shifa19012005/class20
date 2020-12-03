var  ball,ball1
function setup() {
  createCanvas(800,400);
  ball =  createSprite(400, 250, 70, 70);
 ball.shapeColor = "blue";
   ball1 = createSprite(600,200,50,50);
  ball1.shapeColor = "orange";
  }

function draw() {
  background("black"); 
  drawSprites();
  ball1.y = mouseY;
  ball1.x = mouseX;
  if(ball1.x - ball.x < ball1.width/2 + ball.width/2 &&
    ball.x - ball1.x < ball1.width/2 + ball.width/2 &&
     ball1.y - ball.y < ball1.height/2 + ball.height/2 &&
     ball.y -ball1.y < ball1.height/2 + ball.height/2){
    
ball.shapeColor = "red";
ball1.shapeColor= "red";

  }else{
    ball.shapeColor = "pink";
    ball1.shapeColor = "pink";
  }
}