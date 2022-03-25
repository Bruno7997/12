var path,boy, leftBoundary,rightBoundary, state = "life";
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 boyImg = loadAnimation("Jake1.png", "jake4.PNG","Jake2.png","jake3.png");
 pathImg = loadImage("path.png")
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path = createSprite (200, 0, 40, 400)
path.addAnimation ("rua", pathImg)
path.scale=1.2;
//crie um sprite de menino
//adicione uma animação de corrida para ele
boy = createSprite (200, 350, 20, 20);
boy.addAnimation ("run", boyImg);
boy.scale=0.5;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
//defina visibilidade como falsa para o limite à direita



}

function draw() {
  background("white");
  path.velocityY = 4;
  // mover o menino com o mouse usando mouseX
  if (mouseX > 0 && mouseX < 400){
    boy.x = mouseX}
  else{
    boy.x = 200;
  }
  
  //código para redefinir o fundo
  if(path.y >= 504 ){
    path.y = 48
  }
  edges = createEdgeSprites()
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  drawSprites();
}
