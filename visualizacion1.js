let poppins;

var Juventud;

var JIra;
var JImpaciencia;
var JNervios;
var JCansancio;

var Adultez;

var AIra;
var AImpaciencia;
var ANervios;
var ACansancio;

var Vejez;

var VIra;
var VImpaciencia;
var VNervios;
var VCansancio;

var PorcentajeHombres;

var PorcentajeMujeres;

function preload() {
	soundFormats('m4a');
    Juventud = loadSound('visualizacion_1/Juventud.m4a');
    Juventud.setVolume(1);

    soundFormats('m4a');
    JIra = loadSound('visualizacion_1/JIra.m4a');
    Juventud.setVolume(1);
    soundFormats('m4a');
    JImpaciencia = loadSound('visualizacion_1/JImpaciencia.m4a');
    Juventud.setVolume(1);
    soundFormats('m4a');
    JNervios = loadSound('visualizacion_1/JNervios.m4a');
    Juventud.setVolume(1);
    soundFormats('m4a');
    JCansancio = loadSound('visualizacion_1/JCansancio.m4a');
    Juventud.setVolume(1);

    soundFormats('m4a');
    Adultez = loadSound('visualizacion_1/Adultez.m4a');
    Juventud.setVolume(1);

    soundFormats('m4a');
    AIra = loadSound('visualizacion_1/AIra.m4a');
    Juventud.setVolume(1);
    soundFormats('m4a');
    AImpaciencia = loadSound('visualizacion_1/AImpaciencia.m4a');
    Juventud.setVolume(1);
    soundFormats('m4a');
    ANervios = loadSound('visualizacion_1/ANervios.m4a');
    Juventud.setVolume(1);
    soundFormats('m4a');
    ACansancio = loadSound('visualizacion_1/ACansancio.m4a');
    Juventud.setVolume(1);

    soundFormats('m4a');
    Vejez = loadSound('visualizacion_1/Vejez.m4a');
    Juventud.setVolume(1);

    soundFormats('m4a');
    VIra = loadSound('visualizacion_1/VIra.m4a');
    Juventud.setVolume(1);
    soundFormats('m4a');
    VImpaciencia = loadSound('visualizacion_1/VImpaciencia.m4a');
    Juventud.setVolume(1);
    soundFormats('m4a');
    VNervios = loadSound('visualizacion_1/VNervios.m4a');
    Juventud.setVolume(1);
    soundFormats('m4a');
    VCansancio = loadSound('visualizacion_1/VCansancio.m4a');
    Juventud.setVolume(1);

    soundFormats('m4a');
    PorcentajeHombres = loadSound('visualizacion_1/PorcentajeHombres.m4a');
    Juventud.setVolume(1);

    soundFormats('m4a');
    PorcentajeMujeres = loadSound('visualizacion_1/PorcentajeMujeres.m4a');
    Juventud.setVolume(1);

	poppins = loadFont('visualizacion_1/Poppins-Regular.ttf');
}

function setup() {
	createCanvas(1500, 870);
	
}

function draw() {
	background(0);

	// k no haya borde
	noStroke();

	// Juventud
	// k el rellenito sea verdeazulito oscurito
	fill(80, 178, 153);
	// posX posY ancho alto
	ellipse(250, 250, 450, 450);
	// k el rellenito sea verdeazulito clarito
	fill(109, 187, 167);
	// ira
	ellipse(250, 170, 150, 150);
	// impaciencia
	ellipse(380, 270, 150, 150);
	// nervios
	ellipse(120, 270, 150, 150);
	// cansancio
	ellipse(250, 380, 150, 150);

	// Adultez
	// k el rellenito sea rosadito oscuro
	fill(231, 150, 138);
	ellipse(725, 250, 425, 425);
	// k el rellenito sea rosadito clarito
	fill(229, 164, 154);
	// ira
	ellipse(725, 170, 140, 140);
	// impaciencia
	ellipse(605, 270, 140, 140);
	// nervios
	ellipse(845, 270, 140, 140);
	// cansancio
	ellipse(725, 380, 140, 140);

	// Vejez
	// k el rellenito sea azulito oscurito
	fill(154, 179, 209);
	ellipse(500, 640, 400, 400);
	// k el rellenito sea azulito clarito
	fill(173, 191, 214);
	// ira
	ellipse(500, 570, 130, 130);
	// impaciencia
	ellipse(380, 660, 130, 130);
	// nervios
	ellipse(620, 660, 130, 130);
	// cansancio
	ellipse(500, 750, 130, 130);

	// Hombres
	fill(247, 212, 127);
	rect(950, 560, 180, 180);

	// Mujeres
	fill(118, 203, 209);
	rect(1200, 550, 200, 200);


	// Textitos
	// k el relleno sea blanquis
	fill(255);
	// k la fuente sea bitter regular
	textFont(poppins);
	// tamaño texto
	textSize(20);
	// texto, posx, posy
	text('Juventud (18 - 29)', 160, 70);
	text('Adultez (30 - 49)', 640, 80);
	text('Vejez (+ 50)', 440, 480);

	text('Hombres', 995, 625);

	text('Mujeres', 1260, 625);

	text('Porcentaje de personas que se sienten afectadas por la cuarentena según sexo', 970, 780, 500);

	// juventud
	text('Ira', 240, 150);
	text('Impaciencia', 320, 250);
	text('Nervios', 85, 250);
	text('Cansancio', 200, 360);

	// adultez
	text('Ira', 715, 150);
	text('Impaciencia', 540, 250);
	text('Nervios', 810, 250);
	text('Cansancio', 675, 360);

	// vejez
	text('Ira', 490, 550);
	text('Impaciencia', 320, 640);
	text('Nervios', 590, 640);
	text('Cansancio', 450, 730);

	// juventud
	if(mouseX >= 175 && mouseX <= 325)
	{
		if(mouseY >= 95 && mouseY <= 245)
		{
			// ira
			textSize(40);
			text('49%', 215, 190);
		} 		
	}
	if(mouseX >= 305 && mouseX <= 455)
	{
		if(mouseY >= 195 && mouseY <= 345)
		{
			// impaciencia
			textSize(40);
			text('62%', 350, 290);
		} 		
	}
	if(mouseX >= 45 && mouseX <= 195)
	{
		if(mouseY >= 195 && mouseY <= 345)
		{
			//nervios
			textSize(40);
			text('62%', 85, 290);
		} 		
	}
	if(mouseX >= 175 && mouseX <= 325)
	{
		if(mouseY >= 305 && mouseY <= 455)
		{
			//cansancio
			textSize(40);
			text('62%', 220, 400);
		} 		
	}

	// adultez
	if(mouseX >= 655 && mouseX <= 795)
	{
		if(mouseY >= 95 && mouseY <= 235)
		{
			//ira
			textSize(40);
			text('28%', 695, 190);
		} 		
	}
	if(mouseX >= 535 && mouseX <= 675)
	{
		if(mouseY >= 195 && mouseY <= 335)
		{
			//impaciencia
			textSize(40);
			text('42%', 570, 290);
		} 		
	}
	if(mouseX >= 775 && mouseX <= 915)
	{
		if(mouseY >= 195 && mouseY <= 335)
		{
			//nervios
			textSize(40);
			text('52,5%', 800, 290);
		} 		
	}
	if(mouseX >= 655 && mouseX <= 795)
	{
		if(mouseY >= 305 && mouseY <= 445)
		{
			//cansancio
			textSize(40);
			text('49,5%', 675, 400);
		} 		
	}

	// vejez
	if(mouseX >= 435 && mouseX <= 565)
	{
		if(mouseY >= 505 && mouseY <= 635)
		{
			//ira
			textSize(40);
			text('19%',  470, 590);
		} 		
	}
	if(mouseX >= 315 && mouseX <= 445)
	{
		if(mouseY >= 595 && mouseY <= 725)
		{
			//impaciencia
			textSize(40);
			text('32%', 340, 680);
		} 		
	}
	if(mouseX >= 555 && mouseX <= 685)
	{
		if(mouseY >= 595 && mouseY <= 725)
		{
			//nervios
			textSize(40);
			text('40%', 590, 680);
		} 		
	}
	if(mouseX >= 435 && mouseX <= 565)
	{
		if(mouseY >= 685 && mouseY <= 815)
		{
			//cansancio
			textSize(40);
			text('34%', 460, 770);
		} 		
	}

	if(mouseX >= 950 && mouseX <= 1130)
	{
		if(mouseY >= 560 && mouseY <= 740)
		{
			textSize(50);
			text('68%', 990, 680);
		} 		
	}


	if(mouseX >= 1200 && mouseX <= 1400)
	{
		if(mouseY >= 550 && mouseY <= 750)
		{
			textSize(50);
			text('78%', 1250, 680);
		} 		
	}

	textSize(50);
	text('Afectaciones en la salud mental de los colombianos durante la cuarentena', 1000, 150, 450);



}

function mousePressed() 
{
	if(mouseX >= 160 && mouseX <= 360)
	{
		if(mouseY >= 50 && mouseY <= 80)
		{
			Juventud.play(); // k suene
		} 		
	}

	if(mouseX >= 175 && mouseX <= 325)
	{
		if(mouseY >= 95 && mouseY <= 245)
		{
			JIra.play(); // k suene
		} 		
	}
	if(mouseX >= 305 && mouseX <= 455)
	{
		if(mouseY >= 195 && mouseY <= 345)
		{
			JImpaciencia.play(); // k suene
		} 		
	}
	if(mouseX >= 45 && mouseX <= 195)
	{
		if(mouseY >= 195 && mouseY <= 345)
		{
			JNervios.play(); // k suene
		} 		
	}
	if(mouseX >= 175 && mouseX <= 325)
	{
		if(mouseY >= 305 && mouseY <= 455)
		{
			JCansancio.play(); // k suene
		} 		
	}

	if(mouseX >= 640 && mouseX <= 840)
	{
		if(mouseY >= 50 && mouseY <= 80)
		{
			Adultez.play(); // k suene
		} 		
	}

	if(mouseX >= 655 && mouseX <= 795)
	{
		if(mouseY >= 95 && mouseY <= 235)
		{
			AIra.play(); // k suene
		} 		
	}
	if(mouseX >= 535 && mouseX <= 675)
	{
		if(mouseY >= 195 && mouseY <= 335)
		{
			AImpaciencia.play(); // k suene
		} 		
	}
	if(mouseX >= 775 && mouseX <= 915)
	{
		if(mouseY >= 195 && mouseY <= 335)
		{
			ANervios.play(); // k suene
		} 		
	}
	if(mouseX >= 655 && mouseX <= 795)
	{
		if(mouseY >= 305 && mouseY <= 445)
		{
			ACansancio.play(); // k suene
		} 		
	}

	if(mouseX >= 440 && mouseX <= 560)
	{
		if(mouseY >= 460 && mouseY <= 500)
		{
			Vejez.play(); // k suene
		} 		
	}

	if(mouseX >= 435 && mouseX <= 565)
	{
		if(mouseY >= 505 && mouseY <= 635)
		{
			VIra.play(); // k suene
		} 		
	}
	if(mouseX >= 315 && mouseX <= 445)
	{
		if(mouseY >= 595 && mouseY <= 725)
		{
			VImpaciencia.play(); // k suene
		} 		
	}
	if(mouseX >= 555 && mouseX <= 685)
	{
		if(mouseY >= 595 && mouseY <= 725)
		{
			VNervios.play(); // k suene
		} 		
	}
	if(mouseX >= 435 && mouseX <= 565)
	{
		if(mouseY >= 685 && mouseY <= 815)
		{
			VCansancio.play(); // k suene
		} 		
	}


	if(mouseX >= 950 && mouseX <= 1130)
	{
		if(mouseY >= 560 && mouseY <= 740)
		{
			PorcentajeHombres.play(); // k suene
		} 		
	}


	if(mouseX >= 1200 && mouseX <= 1400)
	{
		if(mouseY >= 550 && mouseY <= 750)
		{
			PorcentajeMujeres.play(); // k suene
		} 		
	}
}