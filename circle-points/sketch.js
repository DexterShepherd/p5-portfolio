function setup() {
  // put setup code here
  createCanvas(500, 500)
}

function draw() {
  // put drawing code here
  background(0) 

  map(i, 0, 10, 0, 255)


  let numPoints = 100
  for(let i = 0; i < numPoints; i += 1) {
    ellipse(250 + sin(angle) * 100, 250 + cos(angle) *  100, 10, 10)
  }
}
