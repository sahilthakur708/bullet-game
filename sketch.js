var wall,bullet,speed,weight,thickness,height;

function setup(){
  createCanvas(700,600);
wall=createSprite(550,300,thickness,height);
bullet=createSprite(50,300,30,10);
bullet.shapeColor="white"
speed=random(50,70);
weight=random(30,52);
thickness=random(22,83);
  height=random(250,500);
bullet.velocityX=speed;
}

function draw(){
  background("blue")
  hasCollided();
  if(hasCollided(bullet,wall))
  {
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage<10)
{
  wall.shapeColour="green"
}
if(damage>10)
{
  wall.shapeColour="red"
}
  }
  drawSprites();
}
function hasCollided(){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
return true
  }
  return false
}