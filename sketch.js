var redB, pinkB, blueB, greenB, backGround, bow, arrow, score;
var redImg, pinkImg, blueImg, greenImg, backgroundImg, bowImg,arrowImg; 


function preload(){
redImg = loadImage("red_balloon0.png");  
pinkImg = loadImage("pink_balloon0.png"); 
greenImg = loadImage("green_balloon0.png"); 
blueImg = loadImage("blue_balloon0.png"); 
backgroundImg = loadImage("background0.png"); 
bowImg = loadImage("bow0.png"); 
arrowImg = loadImage("arrow0.png");  
}


function setup() {
  createCanvas(600, 600);
backGround = createSprite(0,0,600,600);
backGround.addImage(backgroundImg);
backGround.scale =2.5;
bow = createSprite(450,250,10,10);
bow.addImage(bowImg);
redB = new Group();
pinkB = new Group();
blueB = new Group();
greenB = new Group();
arrow = new Group();
score = 0;



}

function draw() {
backGround.velocityX=-2;
if (backGround.x < 0){
backGround.x= backGround.width / 2; 
  
}
bow.y= World.mouseY;
if (keyDown("space") ){
  createarrow();
}
var balloonSelector=Math.round(random(1,4));
if (frameCount % 100===0){
  if (balloonSelector===1){
    drawRedB();
  }
  if ( balloonSelector===2){
    drawGreenB();
  }
  if (balloonSelector===3){
    drawBlueB();
  }
  if (balloonSelector===4){
    drawPinkB();
  }
}
if (arrow.isTouching(redB)){
redB.destroyEach();
arrow.destroyEach();
score=score+1;
  
}
  if (arrow.isTouching(greenB)){
greenB.destroyEach();
arrow.destroyEach();
score=score+1; 
}
  if (arrow.isTouching(pinkB)){
pinkB.destroyEach();
arrow.destroyEach();
 score=score+1; 
}
  if (arrow.isTouching(blueB)){
blueB.destroyEach();
arrow.destroyEach();
score=score+1; 

} 
drawSprites();
text("Score :"+score,400,100);
}
function drawRedB(){
var red_B= createSprite(0,Math.round(random(20,370)),10,10);
red_B.addImage(redImg);
red_B.velocityX=3;
red_B.lifetime=150;
red_B.scale=0.1;
redB.add(red_B);
}
function drawBlueB(){
var blue_B= createSprite(0,Math.round(random(20,370)),10,10);
blue_B.addImage(blueImg);
blue_B.velocityX=3;
blue_B.lifetime=150;
blue_B.scale=0.1;
blueB.add(blue_B);
}
function drawPinkB(){
var pink_B= createSprite(0,Math.round(random(20,370)),10,10);
pink_B.addImage(pinkImg);
pink_B.velocityX=3;
pink_B.lifetime=150;
pink_B.scale=1;
pinkB.add(pink_B);
}
function drawGreenB(){
var green_B= createSprite(0,Math.round(random(20,370)),10,10);
green_B.addImage(greenImg);
green_B.velocityX=3;
green_B.lifetime=150;
green_B.scale=0.1;
greenB.add(green_B);
}
function createarrow() {
var arrowS = createSprite (bow.x,bow.y,60,10);
arrowS.addImage(arrowImg);
arrowS.velocityX=-4;
arrowS.scale=0.3;
arrowS.lifetime=150;           
arrow.add(arrowS);
}



