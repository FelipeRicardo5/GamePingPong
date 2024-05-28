// variáveis da bolinha
let xBolinha = 960;
let yBolinha = 477;
let dBolinha = 50;
let raio = dBolinha / 2;
//Variáveis da Raquete
let xRaquete = 15;
let yRaquete = 400;
let LarguraRaquete = 15;
let AlturaRaquete = 140;

//Variáveis da Raquete Oponente
let xRaqueteOponente = 1895;
let yRaqueteOponente = 400;
let LarguraRaqueteOponente = 15;
let AlturaRaqueteOponente = 140;
let velocidadeYOponente = 10;

//Velocidade da bolinha
let velocidadeX = 15;
let velocidadeY = 15;

//Variáveis pontos
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(1920, 945);
}

function draw() {
  background(255);
  designBolinha();
  movimentacaoBolinha();
  colisaoBordaBola();
  designRaquete(xRaquete, yRaquete);
  designRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentacaoRaquete();
  movimentacaoRaqueteOponente();
  colisaoRaqueteOponenteBolinha();
  colisaoRaqueteBolinha();
  incluiPlacar();
  marcaPonto();
  linhaMeio();
}

// FUNÇÃO BOLA------------------------------

function designBolinha() {
  circle(xBolinha, yBolinha, dBolinha);
}
function movimentacaoBolinha() {
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}
function colisaoBordaBola() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeX *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeY *= -1;
  }
}

//FUNÇÃO RAQUETE-------------------------

function designRaquete(x, y) {
  rect(x, y, LarguraRaquete, AlturaRaquete);
}
function movimentacaoRaquete() {

  if (keyIsDown(87)) {
    yRaquete -= 10;
  }
  if (keyIsDown(83)) {
    yRaquete += 10;
  }
  
  yRaquete = constrain(yRaquete, 10, 800);
}
// COLISÃO RAQUETE / RAQUETE OPONENTE
function colisaoRaqueteBolinha() {
  if (
    xBolinha - raio < xRaquete + LarguraRaquete &&
    yBolinha - raio < yRaquete + AlturaRaquete &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeX *= -1;
  }
}

function colisaoRaqueteOponenteBolinha() {
  if (
    xBolinha + raio > xRaqueteOponente &&
    xBolinha - raio < xRaqueteOponente + LarguraRaqueteOponente &&
    yBolinha + raio > yRaqueteOponente &&
    yBolinha - raio < yRaqueteOponente + AlturaRaqueteOponente
  ) {
    velocidadeX *= -1;
  }
}
// Possivel localização do erro 'bola se mexendo apenas no meio' -- solucionado

function movimentacaoRaqueteOponente() {
  // velocidadeYOponente =
  //   yBolinha - yRaqueteOponente - LarguraRaquete / 2 - 30;
  // yRaqueteOponente += velocidadeYOponente;
  // yRaqueteOponente = constrain(yRaqueteOponente, 10, 800);
  if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 10;
  }
}
// Placar do JOGO
function incluiPlacar(){
  
  
  textAlign(CENTER);
  fill('red')
  
  text(meusPontos, 920, 55)
  text(pontosDoOponente, 1000, 55)
  textSize(50)
  textStyle(BOLD)
  
}
function marcaPonto(){
  if(xBolinha > 1900){
    meusPontos += 1;
  }
  if(xBolinha < 20){ 
    pontosDoOponente += 1;
  }
}
// Mapa do jogo
function linhaMeio (){
  line(960, 10, 960, 930);
  
  // stroke(2)
  // fill(255)
  // circle(960, 472, 100)
  

}