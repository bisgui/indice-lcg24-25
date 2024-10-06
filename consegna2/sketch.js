function setup() {
  createCanvas(650, 200);
  //WEBGL estende la capacità dell'elemento HTML canvas per consentirgli di eseguire il rendering di grafica accelerata in qualsiasi browser web compatibile
}

  //ho preso colori da https://htmlcolorcodes.com/

function draw() {
  background(169, 144, 30);

  //piramide che ruota su se stessa
  //strokeWeight(0)
  //fill(234, 203,63)
  //rotateY(frameCount * 0.03);
  //velocità di rotazione (più numero è grande, più velocità è alta)
  //reference mi dà all'inizio misure "relative", in modo che triangolo sia sempre al centro del canva qualsiasi siano le dimensioni del canva
//triangle(275, 100, 312, 50, 350, 100); --> NON RIESCO A FAR COESISTERE ANIMAZIONE E ALTRE FIGURE STATICHE (CAUSA WEBGL?)

//raggio del sole
//lo scrivo prima del sole perché è come se fosse livello sotto
strokeWeight(0)
fill(244, 203, 0, 127) //127 indica opacità
triangle(300, 0, 215, 200, 390, 200)

//sole
  strokeWeight(5)
  stroke(244, 203, 0)
  fill("yellow")
circle(300, 0, 100)

for (i = 0; i < 4; i++) {
  d = (140*i) + (i*10);
  pop();
  //facciata frontale piramide
    strokeWeight(0)
    fill(234, 203,63)
  triangle(d, 200, d+50, 100, d+100, 200)

    //facciata in ombra piramide
    stroke(169, 144, 30)
    strokeWeight(1)
    fill(214, 183, 37)
  triangle(d+50, 100, d+100, 200, d+120, 200)

    //tronco palma (rettangolo)
    fill(106, 74, 12)
  rect(d+130, 150, 10, 50)

    //foglie palma (ellisse)
    fill(75, 134, 16)
  ellipse(d+135, 140, 10, 30)


  pop();
  push();
  //cancella le modifiche apportate prima e ne aggiunge di nuove

    translate(d+125, 140);
    rotate(-PI/8)
    fill(75, 134, 16)
  ellipse(0, 0, 10, 30)

  pop();
  push();

    translate(d+145, 140);
    rotate(PI/8);
    fill(75, 134, 16)
  ellipse(0, 0, 10, 30)
}

//https://stackoverflow.com/questions/70073115/how-do-i-rotate-an-object-in-p5js
//https://stackoverflow.com/questions/59167170/rectmodecenter-not-rotating-shape-around-its-center

}
