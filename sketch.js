let protag1;
let npc01, npc02, npc03;
let rand1;
let scene = 1;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);

  protag1 = new Protagonist(width / 2, height - 5);

  npc01 = new NPCs(200, 300, color(27, 195, 75));
  npc02 = new NPCs(400, 100, color(27, 195, 75));
  npc03 = new NPCs(300, 300, color(86, 170, 251));
  npc04 = new NPCs(100, 300, color(171, 86, 251));
  npc05 = new NPCs(500, 300, color(171, 86, 251));
  npc06 = new NPCs(420, 200, color(248, 86, 251));
  npc07 = new NPCs(200, 100, color(248, 86, 251));
  npc08 = new NPCs(300, 200, color(251, 86, 98));
  npc09 = new NPCs(400, 300, color(251, 161, 86));
  npc10 = new NPCs(250, 200, color(252, 255, 158));
  npc11 = new NPCs(250, 200, color(0, 255, 0));

  let rand1 = random(10, 390);
}

function draw() {
  background(80);

  let grassIO;
  let rocks;
  let trees;
  let spikes;
  let rough;
  let sand;

  if (scene == 1) {
    Scene1();
  } else if (scene == 2) {
    Scene2();
  } else if (scene == 3) {
    Scene3();
  } else if (scene == 4) {
    Scene4();
  } else if (scene == 5) {
    Scene5();
  } else if (scene == 6) {
    Scene6();
  } else if (scene == 7) {
    Scene7();
  }

  protag1.show();

  if (keyIsPressed == true) {
    if (keyCode == UP_ARROW) {
      protag1.protagY -= 3;
    }
  }
  if (keyIsPressed == true) {
    if (keyCode == DOWN_ARROW) {
      protag1.protagY += 3;
    }
  }
  if (keyIsPressed == true) {
    if (keyCode == RIGHT_ARROW) {
      protag1.protagX += 3;
    }
  }
  if (keyIsPressed == true) {
    if (keyCode == LEFT_ARROW) {
      protag1.protagX -= 3;
    }
  }

  if (protag1.protagY < 0) {
    protag1.protagY = height;
    scene++;
  }

  if (protag1.protagY > 400) {
    protag1.protagY = height - 400;
    scene--;
  } else if (scene < 1) {
    scene = 1;
    protag1.protagY = height;
  }
  print(scene);
}

function Scene1() {
  background(21, 71, 35);

  noStroke();
  fill(26, 85, 42);
  bezier(459, 292, 336, 218, 363, 296, 283, 292);
  bezier(279, 236, 156, 162, 183, 240, 103, 236);
  bezier(191, 69, 68, -5, 95, 73, 15, 69);
  bezier(442, 154, 319, 80, 346, 158, 266, 154);
  bezier(584, 225, 461, 151, 488, 229, 408, 225);
  bezier(196, 319, 73, 245, 100, 323, 20, 319);

  stroke(0);
  npc01.show();
  npc01.checkCollision();
  npc01.dialogBox("text1");

  npc02.show();
  npc02.checkCollision();
  npc02.dialogBox("text2");

}

function Scene2() {
  background(35, 69, 94);

  noStroke();
  fill(44, 84, 114);
  bezier(210, 389, 87, 315, 114, 393, 34, 389);
  bezier(502, 353, 379, 279, 406, 357, 326, 353);

  fill(44, 84, 114, 90);

  grassIO(20, 140);
  grassIO(20, 50);
  grassIO(20, 260);

  grassIO(50, 140);
  grassIO(50, 50);
  grassIO(50, 260);

  grassIO(80, 140);
  grassIO(80, 50);
  grassIO(80, 260);

  grassIO(110, 140);
  grassIO(110, 50);
  grassIO(110, 260);

  grassIO(140, 140);
  grassIO(140, 50);
  grassIO(140, 260);

  grassIO(170, 140);
  grassIO(170, 50);
  grassIO(170, 260);

  grassIO(200, 140);
  grassIO(200, 50);
  grassIO(200, 260);

  grassIO(230, 140);
  grassIO(230, 50);
  grassIO(230, 260);

  grassIO(260, 140);
  grassIO(260, 50);
  grassIO(260, 260);

  grassIO(290, 140);
  grassIO(290, 50);
  grassIO(290, 260);

  grassIO(320, 140);
  grassIO(320, 50);
  grassIO(320, 260);

  grassIO(350, 140);
  grassIO(350, 50);
  grassIO(350, 260);

  grassIO(380, 140);
  grassIO(380, 50);
  grassIO(380, 260);

  grassIO(410, 140);
  grassIO(410, 50);
  grassIO(410, 260);

  grassIO(440, 140);
  grassIO(440, 50);
  grassIO(440, 260);

  grassIO(470, 140);
  grassIO(470, 50);
  grassIO(470, 260);

  grassIO(500, 140);
  grassIO(500, 50);
  grassIO(500, 260);

  grassIO(530, 140);
  grassIO(530, 50);
  grassIO(530, 260);

  grassIO(560, 140);
  grassIO(560, 50);
  grassIO(560, 260);

  npc03.show();
  npc03.checkCollision();
  npc03.dialogBox("text3");
}

function Scene3() {
  background(72, 47, 110);

  npc04.show();
  npc04.checkCollision();
  npc04.dialogBox("text4");

  npc05.show();
  npc05.checkCollision();
  npc05.dialogBox("text5");
}

function Scene4() {
  background(96, 62, 93);

  npc06.show();
  npc06.checkCollision();
  npc06.dialogBox();

  npc07.show();
  npc07.checkCollision();
  npc07.dialogBox();
}

function Scene5() {
  background(118, 38, 38);

  npc08.show();
  npc08.checkCollision();
  npc08.dialogBox();
}

function Scene6() {
  background(97, 63, 10);

  npc09.show();
  npc09.checkCollision();
  npc09.dialogBox();
}

function Scene7() {
  background(251, 250, 86);

  npc10.show();
  npc10.checkCollision();
  npc10.dialogBox();
}

function Scene7() {
  background(178, 189, 172);

  npc11.showfinal();
  npc11.endGame();
}

function grassIO(grX1, grY1) {
  triangle(grX1, grY1, grX1 + 16, grY1, grX1 + 9, grY1 - 37);
  triangle(grX1 + 9, grY1, grX1 + 25, grY1, grX1 + 16, grY1 - 25);

}


function rocks(rokX, rokY) {
  rect(68, 120, 42, 27);
  ellipse(108, 134, 30, 27);
  ellipse(108, 84, 30, 27);
}


function trees() {

}


function spikes() {

}


function rough() {

}


function sand() {

}

class Protagonist {
  constructor(x, y) {
    this.protagX = x;
    this.protagY = y;
  }

  show() {
    stroke(0);
    fill(0, 255, 0);
    rect(this.protagX, this.protagY, 30, 30, 5);
  }

}

class NPCs {
  constructor(x, y, c) {
    this.npcX = x;
    this.npcY = y;
    this.npcC = c;
  }

  show() {
    fill(this.npcC);
    rect(this.npcX, this.npcY, 50, 50, 10);
  }

  showfinal() {
    fill(this.npcC);
    rect(this.npcX, this.npcY, 25, 25, 10);
  }

  checkCollision() {
    if ((this.npcX > protag1.protagX - 35) && (this.npcX < protag1.protagX + 35) && (this.npcY > protag1.protagY - 35) && (this.npcY < protag1.protagY + 35)) {
      fill(240);
      rect(300, 500, 600, 400, 20);
    }

  }

  endGame() {
    if ((this.npcX > protag1.protagX - 35) && (this.npcX < protag1.protagX + 35) && (this.npcY > protag1.protagY - 35) && (this.npcY < protag1.protagY + 35)) {
      fill(10, 10, 10, 30);
      rect(100, 1000, 1000, 1000);
      protag1.protagY = height;
      scene = 1;
    }
  }

  // I want to figure out how to give different NPCs different speech text boxes. 
  dialogBox(dialog) {
    if ((this.npcX > protag1.protagX - 35) && (this.npcX < protag1.protagX + 35) && (this.npcY > protag1.protagY - 35) && (this.npcY < protag1.protagY + 35)) {
      
        fill(0);
        textSize(25);
        text(dialog, 20, 335);

      // if (npc01) {
      //   fill(0);
      //   textSize(25)
      //   text("example text 1", 20, 335)
      // } else if (npc02) {
      //   textSize(30)
      //   text("example text 2", 20, 335)
      // } else if (npc03) {
      //   textSize(30)
      //   text("example text 3", 20, 335)
      // } else if (npc04) {
      //   textSize(30)
      //   text("example text 4", 20, 335)
      // } else if (npc05) {
      //   textSize(30)
      //   text("example text 5", 20, 335)
      // } else if (npc06) {
      //   textSize(30)
      //   text("example text 6", 20, 335)
      // } else if (npc07) {
      //   textSize(30)
      //   text("example text 7", 20, 335)
      // } else if (npc08) {
      //   textSize(30)
      //   text("example text 8", 20, 335)
      // } else if (npc09) {
      //   textSize(30)
      //   text("example text 9", 20, 335)
      // } else if (npc10) {
      //   textSize(30)
      //   text("example text 10", 20, 335)
      // }
    }
  }
}