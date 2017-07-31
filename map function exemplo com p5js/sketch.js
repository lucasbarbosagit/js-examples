// var col = 0;
var r = 0; // cores iniciais rgb formando a cor azul juntas
var g = 0;
var b = 255;

function setup() {
  createCanvas(600, 400); // área de desenho no tamanho 600x400 de altura
}

function draw() {
  // background
  //col = mouseX;
  //col = map(mouseX, 0, 600, 0, 255);
  r = map(mouseX, 0, 600, 0, 255); // cor r mapeada de 0 a 600 para entre 0 a 255 e linkada com o mouse na horizontal x
  g = map(mouseX, 0, 600, 0, 255); // cor g mapeada de 0 a 600 para entre 0 a 255 e linkada com o mouse na horizontal x
  b = map(mouseX, 0, 600, 255, 0); // cor b mapeada de 0 a 600 para entre 255 a 0 e linkada com o mouse na horizontal x
  // background(col);
  background(r, g, b); // bg final na tela com as cores indo do azul para o amarelo
  
  // ellipse
  fill(255, 255, 255); // cor do circulo
  ellipse(mouseX, 200, 64, 64); // tamanho e a posição do circulo no canvas, que no caso o eixo x vai ser a posição do mouse na horizontal
}