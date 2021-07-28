var bombImage,coinImage,energyDrinkImage, pathImage, powerImage, runner1Image, runner2Image;
var bomb, coin, energyDrink, path, power, runner1, runner2;
var boundary1, boundary2;

function preload(){
  //pre-load images
bombImage = loadImage("bomb.png");
coinImage = loadImage("coin.png");
energyDrinkImage = loadImage("energyDrink.png");
pathImage = loadImage("path.png");
powerImage = loadImage("power.png");
runner1Image = loadImage("runner-1.png");
runner2Image = loadImage("runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

 
path = createSprite(200,200,20,20);
path.addImage(pathImage);
path.velocityY = 4;
path.scale = 1.2;
if(path.y > 400){
  path.y = height/2;
}

energyDrink = createSprite(200,50,10,10);
energyDrink.addImage(energyDrinkImage);
energyDrink.scale = 0.08;

runner1 = createSprite(300,300,10,10);
runner1.addImage(runner1Image);
runner1.velocityY = -0;
runner1.scale = 0.07;

runner2 = createSprite(100,300,10,10);
runner2.addImage(runner2Image);
runner2.scale = 0.08;

bomb = createSprite(200,10,10,10);
bomb.addImage(bombImage);
bomb.scale = 0.07;

coin = createSprite(300,100,10,10);
coin.scale = 0.5;
coin.addImage(coinImage);

boundary1 = createSprite(390,200,00,400);
boundary1.visible = false;
boundary2 = createSprite(10,200,00,400);
boundary2.visible = false;
}
bomb.debug = true;
if(path.y > 400){
  path.y = height/2;
}


function draw() {
  background(0);

  coin.velocityY = 1;
  bomb.velocityY = 2; 
  energyDrink.velocityY = 1;

runner1.x = World.mouseX;
runner1.collide(boundary1);
runner1.collide(boundary2);
runner2.velocityX = 6;
runner2.bounceOff(boundary1);
runner2.bounceOff(boundary2);



  if(runner1.isTouching(coin)){
    coin.destroy();
    
  } 
  if(runner2.isTouching(coin)){
    coin.destroy();

 } 
  if(runner1.isTouching(bomb)){
    runner1.destroy();
  }

  if(runner2.isTouching(bomb)){
    runner2.destroy();
  
  }
  if(runner1.isTouching(energyDrink)){
    energyDrink.destroy();

 } 
 if(runner2.isTouching(energyDrink)){
  energyDrink.destroy();

} 
  

  if(path.y > 400){
    path.y = height/2;
  }
drawSprites();
}
