var x=300;
var y=300;
var a=100;
var b=100;

function draw_one_frame() {
  background(0);
  x+=2;
  y+=2;
	a-=2;
	b-=2;
	strokeWeight(0);
	
  translate(width/2, height/2);
  for(var i=0;i<15;i++){
	  for(var k=0;k<20;k++){
		stroke(1,1,1);
   // rotate(PI / 12.0);
	 // fill(255,255-i*10,255-k*10);
  	//line(a%100,b%100,x%300,y%300);
	 // ellipse((x+i*20)%width,(y+k*20)%height,i+4,i+4);
	//	drawtriangle((a-i*20)%width,(b-k*20)%height,k/8);
	//	rect(x%width, y%height, k+10, k+10);
		fill(0,i*10,255-k*10);
	//	ellipse((x-i*20)%width,(y-k*20)%height,i+3,i+3); //wirlpool circle
		rotate(PI / 24.0);
		fill(255-(i+k)*5,(i+k)*7,i*20);
		//drawtriangle((a+i*20)%width,(b+k*20)%height,k/8); //swirl triangles
	//	rect(a%width, b%height, k+5, k+5); //swirl rectange
		drawflower(k,x);
		
	  }
  }

}
//this is the drawing triangle
function drawtriangle(x,y,r){
	//triangle(x, y, x+7*r, y-13.75*r, x+14*r, y);
}


//This is the central circle in the centre
function drawflower(i,k){
		if(i%2==1){
			rotate(random);
			//fill(255,(k*0.4)%255,30);
			fill(255);
			ellipse(0,0,100,100);
			fill(249, 252, 43);
			stroke(k%249, 252, 43);
			arc(0,0,200+i+300*sin(k*PI/24),100,400,PI / 40);
			fill(255);
			ellipse(0,0,200,200);
		}
		else{
			//fill(k%255,0,255);
			//stroke(0,(k*0.4)%255,255);
			//arc(0,0,(100+100*cos(k*PI/24))%255,50,0,PI / 20);
		}

fill(255);
//ellipse(25,25,25,25);

}
