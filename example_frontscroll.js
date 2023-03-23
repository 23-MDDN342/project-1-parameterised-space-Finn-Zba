function draw_one_frame(_cur_frac_2) {
  let sun_size = canvasHeight/50;
  
  noStroke();
  //fill(100, 100, 214);
  rect(0,0,0);

  fill(0, 0, 0);
  //ellipse(width/2, height/2, sun_size);

  //fill(0, 200, 0);
  rect(0, height/2, width, height/2);

  stroke(0);
 // line(width/2, height/2, width/2, height);
 // line(0.40*width, height/2, 0.20*width, height);
 // line(0.60*width, height/2, 0.80*width, height);

  strokeWeight(0);
  let grid_points = [
    0.50 * height,
    0.53 * height,
    0.60 * height,
    0.75 * height,
    1.00 * height,
    1.25 * height,
  ]

  if (debugView) {
    strokeWeight(1);
    stroke(255, 0, 0);
    for(let i=0; i<grid_points.length; i++) {
      line(0, grid_points[i], width, grid_points[i]);
    }
  }

  strokeWeight(2);
  stroke(0);
  for(let i=0; i<grid_points.length-1; i++) {
    let cur_grid_line = map(cur_frac, 0, 1, grid_points[i], grid_points[i+1])
    let numb = ['1','2','3','4','5','6','7','8','9','0'];
   // line(0, cur_grid_line, width, cur_grid_line);
    //ellipse(width/2,cur_grid_line, width/10, width/10)
    fill(255, 255, 0);
    text(random(numb), width/2,cur_grid_line, width/10, width/10)

    text(random(numb), width/3,cur_grid_line, width/10, width/10)

    text(random(numb), width/6,cur_grid_line, width/10, width/10)

    text(random(numb), width/1,cur_grid_line, width/10, width/10)

    text(random(numb), width/1.5,cur_grid_line, width/10, width/10)

    text(random(numb), width/1.2,cur_grid_line, width/10, width/10)

    text(random(numb), width/50,cur_grid_line, width/10, width/10)




    

  }

  

  fill(0, 100, 214);
  //rect(0, 0, width, height/2);
}