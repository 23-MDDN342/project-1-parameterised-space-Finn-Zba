/* 
   getNoiseValue arguments:
     x: current grid location across
     y: current grid location down
     loop: can be any value from 0-1 and will loop
     name: the "name" of the lookup table. probably change this each time.
     min/max: the minimum and maximum of the value to return
     smoothness: 1 means elements are not related. larger numbers cause groupings.
*/
function draw_one_frame(cur_frac) {
//////////////////////////////////////////////Noise setup/////////////////////////////////////////
noStroke();
let backgroundColor = color("#dbbea1");
fill(backgroundColor);
//rect(0,0, width, height)

let mainColor = color("#3F292B"); // brown
let backupColor = color("#D34F73"); // blush
let DetailColor = color("#DB7F67");


let noiseColor;
let noiseyColor; 
let moveXMap;
let moveXMap2;


let orbSize = width / 100;
let spacingSize = width / 19;
let numb = ['1','2','3','4','5','6','7','8','9','0'];
//let backfill = ['100,216,107,100','255, 255, 255,100'];


//////////////////////////////////////////////Noise part/////////////////////////////////////////
fill(mainColor);

for(let accross = 1; accross < width /spacingSize; accross++ ){
	for(let down = 1; down +1 < height /spacingSize; down++){		
		
	noiseColor = getNoiseValue(spacingSize*accross,spacingSize*down, cur_frac, "noiseColor",0,1, 200 );
	noiseyLerp = lerpColor(mainColor,backupColor,noiseColor)  // https://p5js.org/reference/#/p5/lerpColor
	fill(noiseyLerp);
	//ellipse(spacingSize*accross,spacingSize*down ,orbSize)

		if(cur_frac > 0.3 && noiseColor < 0.3){
			fill(225)
			noiseSeed(-100);
			moveXMap = map(cur_frac,0.3, 1, spacingSize*accross, spacingSize*(accross+1));
			moveXMap2 = map(cur_frac-100,0, 100, spacingSize*accross, spacingSize*(accross+5));
			
			//ellipse(moveXMap,spacingSize*down,orbSize/15)

            ////////bacgkround text//////
			fill(100,216,107,75);
			textSize(20);
			text(random(numb), moveXMap,spacingSize*down,orbSize);
			fill(255,255,255,75);
			text(random(numb), moveXMap2,spacingSize*down,orbSize);

//////////////////////////////////////////////ease part/////////////////////////////////////////
			let grid_points = [
				0 * height,
				1 * height,
				25 * height,
				0 * height,
				1 * height,
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
				let cur_grid_line = map(cur_frac-40, 1, -6, grid_points[i], grid_points[i+1])
				let numb = ['1','2','3','4','5','6','7','8','9','0'];
			   // line(0, cur_grid_line, width, cur_grid_line);
				//ellipse(width/2,cur_grid_line, width/10, width/10)
				fill(100,216,107);
				textSize(75);

				 
				text(random(numb), width/2,cur_grid_line/1, 1, width/1)
			
			//	text(random(numb), width/3,cur_grid_line, width/10, width/10)
			
			//	text(random(numb), width/6,cur_grid_line, width/10, width/10)
			
			//	text(random(numb), width/1,cur_grid_line, width/10, width/10)
			
			//	text(random(numb), width/1.5,cur_grid_line, width/10, width/10)
			
			//	text(random(numb), width/1.2,cur_grid_line, width/10, width/10)
			
			//	text(random(numb), width/50,cur_grid_line, width/10, width/10)
			
		}
	}
}
}





strokeWeight(10);
let grid_points = [
  0 * height,
  0.53 * height,
  0.60 * height,
  0.75 * height,
  1.00 * height,
  4 * height
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
  let cur_grid_line = map(cur_frac, 0, 1, grid_points[i], grid_points[i+1]);
 // line(0, cur_grid_line, width, cur_grid_line);
  //ellipse(width/2,cur_grid_line, width/10, width/10)
  //text(random(numb), width/2,cur_grid_line/1, 1, width/1)

  //ellipse(width/3,cur_grid_line, width/10, width/10)
  //text(random(numb), width/3,cur_grid_line/1, 1, width/1)

  //ellipse(width/6,cur_grid_line, width/10, width/10)

  text(random(numb), 0,cur_grid_line/1, 1, width/1);

  text(random(numb), 100,cur_grid_line/1, 1, width/1);

  text(random(numb), 200,cur_grid_line/1, 1, width/1);

  text(random(numb), 300,cur_grid_line/1, 1, width/1);

  text(random(numb), 400,cur_grid_line/1, 1, width/1);

  text(random(numb), 500,cur_grid_line/1, 1, width/1);

  text(random(numb), 600,cur_grid_line/1, 1, width/1);

  text(random(numb), 700,cur_grid_line/1, 1, width/1);

  text(random(numb), 800,cur_grid_line/1, 1, width/1);

  text(random(numb), 900,cur_grid_line/1, 1, width/1);

  text(random(numb), 1000,cur_grid_line/1, 1, width/1);


}



}
