
function draw_one_frame(cur_frac) {
//////////////////////////////////////////////Noise setup/////////////////////////////////////////
noStroke();
let backgroundColor = color("#dbbea1");
fill(backgroundColor);

let mainColor = color("#3F292B"); // brown
let backupColor = color("#D34F73"); // blush
let DetailColor = color("#DB7F67");


let noiseColor;
let noiseyColor; 
let moveXMap;
let moveXMap2;
//let height = canvasHeight;


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
		if(cur_frac > 0.1 && noiseColor < 0.8){
			fill(225)
			noiseSeed(-100);
			moveXMap2 = map(cur_frac,-1,0, 2, spacingSize*accross-9, spacingSize*(accross+15));
			moveXMap = map(cur_frac,0.3, 1, spacingSize*accross, spacingSize*(accross+1));

			//ellipse(moveXMap,spacingSize*down,orbSize/15)

            ////////bacgkround text//////
			fill(100,216,107,50);
			textSize(20);
			text(random(numb), moveXMap,spacingSize*down,orbSize);
			fill(255,255,255,50);
			text(random(numb), moveXMap2,spacingSize*down,orbSize);

//////////////////////////////////////////////ease part/////////////////////////////////////////

stroke(0);
line(width/2, height/2, width/2, height);
line(0.40*width, height/2, 0.20*width, height);
line(0.60*width, height/2, 0.80*width, height);

strokeWeight(10);
let grid_points = [
  -1 * height,
  1 * height,
    //-1 * height,
    1 * height,
//   1.00 * height,
//    1.25 * height
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
 // line(0, cur_grid_line, width, cur_grid_line);
 let numb = [1,2,3,4,5,6,7,8,9,0];
 fill(100,216,107);
 textSize(75);

}

		}
	}

}
}
function drawnumber(cur_frac){
	let sun_size = canvasHeight/1;
	strokeWeight(10);
	let grid_points = [
	  0 * height,
	  1.1 * height,
  //    0.60 * height,
  //    0.75 * height,
  //   1.00 * height,
  //    1.25 * height
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
	 // line(0, cur_grid_line, width, cur_grid_line);
	 let numb = ['1','2','3','4','5','6','7','8','9','0'];
	 fill(100,216,107);
	 textSize(75);
  
	 //s text(random(numb), width/2,cur_grid_line/1, 1, width/1)
	  
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

