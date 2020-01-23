function setup() {
	width = 700
	height = 500
	createCanvas(width, height);
	background(88,24,69);
	fill(144, 12, 63);
	rect(0, 0, width, height/3);
	noStroke(); 
}

function draw() {
	noStroke(); 
	background(88,24,69);
	
	//top half
	//fill(243, 156, 18);
	fill(245, 203, 167);
	rect(0, 0, width, height/2);

	//bottom half
	fill( 125, 192, 255 );
	rect(0, height/2, width, height/2);

	//middle
	fill(245, 203, 167);
	rect(width/3, 0, width/3, height/2);
	rect(0, 0, 100, height/2);
	rect(width-100, 0, 100, height/2);



	//second, minute, hour
	var s = second();
	var m = minute();
	var h = hour();
	var s_ratio = map(s, 0 , 60, 0, height/2)
	var m_ratio = map(m, 0 , 60, 0, height/2)
	var h_ratio = map(h, 0 , 24, 0, height/2)


	//hour
	fill(254, 135, 123);
	//rect(width/3, height-h_ratio, width/3, h_ratio);
	rect(0, height/2 - h_ratio, width, h_ratio);
	//second
	if (s_ratio < 0) {
	s_ratio = height;
	}
	stroke(52, 73, 94 ); 
	line(0, height/2, width, height/2);
	line(100, s_ratio, width/3, s_ratio);
	line(width/3*2, s_ratio, width-100, s_ratio);

	//minute
	fill(52, 73, 94);
	rect(100, height/2, width/3-100, m_ratio);
	rect(width/3*2, height/2, width/3-100, m_ratio);

	//sun
	fill( 255, 54, 0, 150);
	//noStroke();
	//fill(199, 0, 57);
	arc(width/2, height/2, 200, 200, PI, TWO_PI);

	printMinute();

}

function printMinute(){
	var m = minute();
	if (Number.isInteger(m)){
	console.log(m);
	}
}