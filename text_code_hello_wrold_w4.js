function preload(){
  font = loadFont('data/QanelasSoftDEMO-UltraLight.otf');
  font2 = loadFont('data/AdobeThai-Italic.otf');
}
function setup() {
createCanvas(600,600);
background(255);
fill(100, 100, 0);
textAlign(RIGHT);
}

function draw() {
 
 textSize(36);
 textFont (font);
 textFont(font,36);
 text('nice to meet you',300,300);
 textSize(26);
 textFont (font);
 textFont(font,26);
 text('my name is ciellit',300,200);
 textSize(16);
 textFont (font);
 textFont(font,16);
 text('hello world',300,100);

}
