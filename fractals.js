var canvas;

var set;

// Credit for this system goes to the P5js website: https://p5js.org/examples/simulate-l-systems.html
var rules = [];
rules[0] = ["A", "-BF+AFA+FB-"];
rules[1] = ["B", "+AF-BFB-FA+"];

var x = 0, y = innerHeight-1;
let currentangle = 0;
let angle;

var maxRadius = 15;
var step = 20;

var index = 0;

var iterations = 5; // Keep it at 5 or it breaks

var system;
var pause = false;

// colorSets [set][r, g, b][min, max]
var colorSets = [];
colorSets[0] = [];
colorSets[0][0] = [0, 255];
colorSets[0][1] = [0, 255];
colorSets[0][2] = [0, 255];

colorSets[1] = [];
colorSets[1][0] = [128, 255];
colorSets[1][1] = [0, 192];
colorSets[1][2] = [0, 50];

colorSets[2] = [];
colorSets[2][0] = [0, 192];
colorSets[2][1] = [0, 50];
colorSets[2][2] = [128, 255];

colorSets[3] = [];
colorSets[3][0] = [0, 75];
colorSets[3][1] = [128, 255];
colorSets[3][2] = [0, 192];

var colorSet;

var rMax;
var gMax;
var bMax;

function windowResized () {
  resizeCanvas (innerWidth, innerHeight);
  background (0, 0, 0);
  changeScreen();
}

function setup () {
    console.log ("start");

    canvas = createCanvas (windowWidth, windowHeight);

    background (0, 0, 0);

    set = "A";

    set = genSystem (set, iterations);

    console.log (set);

    changeScreen();

    // Starts the drawing of the L-system
    startSystem();
}

function draw () {
    fill (20, 20, 20);
    stroke(20, 20, 20);
}

// Generates the L-System
function genSystem (tset, num) {
    if (num <= 0)
        return tset;

    tset = tset.split("");

    for (let i = 0; i < tset.length; i++) {
        var c = tset[i];
        for (let rule = 0; rule < rules.length; rule++)
          if (rules[rule][0] == tset[i])
            tset[i] = rules[rule][1];
    }

    tset = tset.join ("");

    return genSystem(tset, num-1);
}

function pickColorSet () {
  colorSet = colorSets [Math.floor (Math.random() * colorSets.length)];
}

function randomAngle () {
  angle = Math.floor (Math.random() * 5) + 88;
  if (angle >= 91.5)
    angle = Math.random () + 89;
}

function drawSystem () {

  resetSystem();

  var c = set.charAt (index); 

  if (c=='F') { // draw forward
    // polar to cartesian based on step and currentangle:
    let x1 = x + step*cos(radians(currentangle));
    let y1 = y + step*sin(radians(currentangle));
    line(x, y, x1, y1); // connect the old and the new

    // update the turtle's position:
    x = x1;
    y = y1;
  } 

  else if (c == '+') 
    currentangle += angle; // turn left
  else if (c == '-')
    currentangle -= angle; // turn right

  if (x > innerWidth || y > innerHeight)
    return;

  // give me some random color values:
  let r = random(colorSet[0][0], colorSet[0][1]);
  let g = random(colorSet[1][0], colorSet[1][1]);
  let b = random(colorSet[2][0], colorSet[2][1]);
  let a = random(50, 100);

  // pick a gaussian (D&D) distribution for the radius:
  let radius = 0;
  radius += random(0, maxRadius);
  radius += random(0, maxRadius);
  radius += random(0, maxRadius);
  radius = radius / 2.2;

  // draw the stuff:
  fill(r, g, b, a);
  ellipse(x, y, radius, radius);
}

function resetSystem () {
  if (index >= set.length)
    index = 0;
}

function changeScreen () {
  x = 0, y = innerHeight-1;
  currentangle = 0;
  index = 0;
  
  setSize();

  startSystem();
  console.log ("Screen changed");
}

function setSize () {
  var windowRatio = innerHeight/innerWidth;
  console.log (windowRatio);
  if (windowRatio > 2) {
    maxRadius = innerWidth/18;
    step = innerWidth/13;

    var mainText = document.getElementById("mainText");
    if (!mainText.classList.contains("mainTextX")) {
      mainText.classList.remove("mainText" || "mainTextMobile");
      mainText.classList.add ("mainTextX");
    }
  }
  else if (windowRatio > 1.4) {
    maxRadius = innerWidth/25;
    step = innerWidth/17;

    var mainText = document.getElementById("mainText");
    if (!mainText.classList.contains("mainTextMobile")) {
      mainText.classList.remove("mainText" || "mainTextX");
      mainText.classList.add ("mainTextMobile");
    }
  }
  else if (windowRatio > 1.15) {
    maxRadius = innerWidth/30;
    step = innerWidth/22;

    var mainText = document.getElementById("mainText");
    if (!mainText.classList.contains("mainText")) {
      mainText.classList.remove ("mainTextMobile" || "mainTextX");
      mainText.classList.add ("mainText");
    }
  }
  else {
    maxRadius = innerWidth/55;
    step = innerWidth/35;

    var mainText = document.getElementById("mainText");
    if (!mainText.classList.contains("mainText")) {
      mainText.classList.remove ("mainTextMobile" || "mainTextX");
      mainText.classList.add ("mainText");
    }
  }
}

function startSystem () {
  if (system != null)
    stopSystem();
  pickColorSet();
  randomAngle();
  system = setInterval(() => {
    drawSystem();
    index++;
  }, 1);
  console.log ("System started");
}

function stopSystem () {
  clearInterval(system);
  system = null;
  console.log ("System stopped");
}

function clearScreen () {
  background (0);
  changeScreen();
  stopSystem();
  console.log ("Screen cleared");
}