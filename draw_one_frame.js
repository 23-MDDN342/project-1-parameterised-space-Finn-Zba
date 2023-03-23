//////////////////////////////////////////////Noise setup/////////////////////////////////////////;
///this is the primary setup for the noise code (tempate by Pheobe Zeller);
function draw_one_frame(cur_frac) {
	noStroke();
	let backgroundColor = color("#dbbea1");
	fill(backgroundColor);
	
	let mainColor = color("#64d86b"); //green
	let backupColor = color("#000000"); //black
	
	let noiseColor;
	let noiseyColor; 
	let moveXMap; //green background noise
	let moveXMap2;//white background noise
	let sp = 24 //frame rate change
	
	//noise values, used to chang number of generated coulmns and space between;
	let binarySize = width / 1; //size generation
	let spacingSize = width / 25; //spacing
	let numb = ['1','0']; //binary digits in the background come from this array
	textFont('Courier'); //hack text font
	
	
	//////////////////////////////////////////////Noise part/////////////////////////////////////////;
	//This is the values to have fun with a change the noise around (tempate by Pheobe Zeller);
	setFrameRate(sp);
	for(let accross = 1; accross < width /spacingSize; accross++ ){
		for(let down = 1; down +1 < height /spacingSize; down++){		
			
		noiseColor = getNoiseValue(spacingSize*accross,spacingSize*down, cur_frac, "noiseColor",0,0, 500 );
		noiseyLerp = lerpColor(mainColor,backupColor,noiseColor);
		fill(noiseyLerp+1);
			if(cur_frac <= 5){
				fill(225)
				noiseSeed(50);
				moveXMap2 = map(cur_frac,-1,0, 5, spacingSize*accross-9, spacingSize*(accross)); //green background binary digits
				moveXMap = map(cur_frac,0, 1, spacingSize*accross, spacingSize*(accross+1));// white binary background digits
				////////bacgkround text//////
				fill(100,216,107,25);
				textSize(20);
				text(random(numb), moveXMap,spacingSize*down,binarySize); //binarys (1s and 0s) willl be rapidly seected from array (green)
				fill(255,255,255,25);
				text(random(numb), moveXMap2,spacingSize*down,binarySize);//binarys (1s and 0s) willl be rapidly seected from array (white)
	
	//////////Background of ease///////////////;
	//These notes give different zoom indications	
	//dimentions are x= 1000 y=550 (normal);
	//dimentions are x= 1000 y=1100 (large)
	//dimentions are x= 1000 y=1300;
				noFill();
				stroke(100, 216, 107);
				rect(0,-5,360,1300 ); //code inspred ease rect as a frame
			
	////////////////////////////////////////ease part/////////////////////////////////////////
	//This section is where easing happens. (ease template by Pheobe Zeller)
		strokeWeight(10);
		//grid points to determine start and end of ease animation
		let grid_points = [
		  -2 * height,
		  2 * height,
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
		 fill(100,216,10);
		 textSize(18);
	  
		 //originally meant to pull out of an array for cleanliness, changed due to time constraints. tecxt will move dowards like code being scrolled through with random code mumbo jumbo;
		//Sometimes slows down frames if system overloads, works on windows fine, imac can get choppy - unsure why.
		text("struct_group_info init_groups={.usage=ATOMIC_INIT2", 4,cur_grid_line/1, 1, width/1);		
		text("   __________struct_group_info_init _____groups={.usage=AT|)", 4,cur_grid_line/1, 1, width/1);	
		text("	   structgroup_info*group_info ________________int_nblocks;", 4,cur_grid_line/1, 1, width/1);	
		text("	     ___nblocks=(gidsetsize+NGROUPS ____PER_BLOCK_NGROUPS_PER_BLOCK;", 4,cur_grid_line/1, 1, width/1);
		text("	       ________if(!group_info)", 4,cur_grid_line/1, 1, width/1);
		text("	        _____________returnNULL;if(info)", 4,cur_grid_line/1, 1, width/1);
		text("	       	     if_(gidsetsize<=NGROUPS_SMALL)", 4,cur_grid_line/1, 1, width/1);
		text("	        	   ___group_info->blocks[0]=group_i", 4,cur_grid_line/1, 1, width/1);
		text("	        	     else{", 4,cur_grid_line/1, 1, width/1);
		text("	        	   	   ___for(i=0;_i<_nblocks;_i++){", 4,cur_grid_line/1, 1, width/1);
		text("	        	   	     _____group_info->ngroups=gidset;", 4,cur_grid_line/1, 1, width/1);
		text("	        	   	       EXPORT_SYMBOL(groups_alloc);", 4,cur_grid_line/1, 1, width/1);
		text("	        	   	        out_undo_partial_alloc:);", 4,cur_grid_line/1, 1, width/1);
		text("	        	   	         ___while_(--i>=0){", 4,cur_grid_line/1, 1, width/1);
		text("	        	   	          _______kfree(group_info);", 4,cur_grid_line/1, 1, width/1);
		text("                              struct_group_info init_groups={.usage=ATOMIC_INIT2", 4,cur_grid_line/1, 1, width/1);
		text("                                 __________struct_group_info_init _____groups={.usage=AT|)", 4,cur_grid_line/1, 1, width/1);
		text("	                                 structgroup_info*group_info ________________int_nblocks;", 4,cur_grid_line/1, 1, width/1);
		text("	                                    ___nblocks=(gidsetsize+NGROUPS ____PER_BLOCK_NGROUPS_PER_BLOCK;", 4,cur_grid_line/1, 1, width/1);
		text("	                                       ________if(!group_info)", 4,cur_grid_line/1, 1, width/1);
	
	}
	}
	
	} 
		}
	  
	  
	}
	