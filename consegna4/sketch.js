let colors = [[255, 80, 0], [255, 159, 0], [255, 218, 0], [255, 250, 0], [255, 176, 253]];

let strokes = [[219, 65, 31], [205, 127, 1], [206, 176, 2], [202, 199, 1], [202, 136, 200]];

let backgrounds = [[[255, 153, 33], [255, 103, 33]], [[255, 179, 79], [236, 141, 53]], [[183, 152, 32], [210, 175, 39]], [[255, 252, 97], [198, 195, 0]], [[255, 202, 253], [214, 93, 209]]];

let n;
let slider;

function setup() {
  createCanvas(650, 200);
  
  slider = createSlider(0, 255, 0);
  slider.position(10, 10);
  slider.size(80);
}

function draw() {
  let x = 3.5 + slider.value()*0.01;
  
  push();
  
  if ((x == 3.5)) {
      n = 0
  } else if ((x == 4)) {
      n = round(random(0, 4));
  } else if ((x == 4.5)) {
      n = round(random(0, 4));
  } else if ((x == 5)) {
      n = round(random(0, 4));
  } else if ((x == 5.5)) {
      n = round(random(0, 4));
  }
  
  color_1 = color(backgrounds[n][0]);
  color_2 = color(backgrounds[n][1]);
  
  for (i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let new_color = lerpColor(color_1, color_2, inter);
    stroke(new_color);
    line(0, i, width, i);
  }

    translate(330, 320);
    rotate(x);
    strokeWeight(5)
    stroke(244, 203, 0)
  
  fill(colors[n])
  stroke(strokes[n]);
  
  circle(300, 0, 100)

  pop();

  for (i = 0; i < 4; i++) {
    d = (140*i) + (i*10);
    pop();
      strokeWeight(0)
      fill(234, 203,63)
    triangle(d, 200, d+50, 100, d+100, 200)

      stroke(169, 144, 30)
      strokeWeight(1)
      fill(214, 183, 37)
    triangle(d+50, 100, d+100, 200, d+120, 200)

      fill(106, 74, 12)
    rect(d+130, 150, 10, 50)

      fill(75, 134, 16)
    ellipse(d+135, 140, 10, 30)


    pop();
    push();

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
}
