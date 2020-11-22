// Set the project title
document.title = "P5 Starter";

setup = function() {
  createCanvas(400, 400);
  background(40,40,40);
}

var x = 0;
var y = 0;

draw = function() {
    
    noStroke();
    fill(79, 255, 94);
    
    // Moves across the canvas, getting taller
    ellipse(x, 200, 30, 30+x/3);
    
    // Moves down the canvas, getting wider
    ellipse(200, y, 30+y/3, 30);
    
    // Add one to each of the variables
    x++;
    y++;
};