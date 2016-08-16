/**
 * Javascript Scale Model HSI
 * HSIModel 
 * Autors: Daniel A. Keim, Hans-Peter Kriegel
 * Title: Issues in Visualizing Large Databases
 * ISBN 978-1-4757-6937-1
 * Url aviable http://link.springer.com/chapter/10.1007%2F978-0-387-34905-3_13
 * 
 * The color keywords is suportted by popular browsers X11 Color Names [http://en.wikipedia.org/wiki/X11_color_names]
 *  
 * version 1.0
 * This docuement is licensed as free software under the terms of 
 * the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Copyrighted 2015 by Evinton Antonio Cordoba Mosquera.
 * [HSIModel description]
 * @param {[type]} to   [description]
 * @param {[type]} from [description]
 */

 (function(hsi){
 	/**
 	 * [colors color keywords]
 	 * @type {Object}
 	 */
 	var colors = {
 		aliceblue : '240,248,255',
 	 	antiquewhite :	'250,235,215',
 	 	aqua :	'0,255,255',
 	 	aquamarine : '127,255,212',
 	 	azure :	'240,255,255',
 	 	beige :	'245,245,220',
 	 	bisque :	'255,228,196',
 	 	black :	'0,0,0',
 	 	blanchedalmond : '255,235,205',
 	 	blue :	'0,0,255',
 	 	blueviolet :	'138,43,226',
 	 	brown :	'165,42,42',
	 	burlywood :	'222,184,135',
 	 	cadetblue :	'95,158,160',
 	 	chartreuse :	'127,255,0',
 	 	chocolate :	'210,105,30',
 	 	coral :	'255,127,80',
 	 	cornflowerblue :	'100,149,237',
 	 	cornsilk :	'255,248,220',
 	 	crimson :	'220,20,60',
 	 	cyan :	'0,255,255',
 	 	darkblue :	'0,0,139',
 	 	darkcyan :	'0,139,139',
 	 	darkgoldenrod :	'184,134,11',
 	 	darkgray :	'169,169,169',
 	 	darkgreen :	'0,100,0',
 	 	darkgrey :	'169,169,169',
 	 	darkkhaki :	'189,183,107',
 	 	darkmagenta :	'139,0,139',
 	 	darkolivegreen : '85,107,47',
 	 	darkorange :	'255,140,0',
 	 	darkorchid :	'153,50,204',
 	 	darkred :	'139,0,0',
 	 	darksalmon :	'233,150,122',
 	 	darkseagreen :	'143,188,143',
 	 	darkslateblue :	'72,61,139',
 	 	darkslategray :	'47,79,79',
 	 	darkturquoise :	'0,206,209',
 	 	darkviolet :	'148,0,211',
 	 	deeppink :	'255,20,147',
 	 	deepskyblue :	'0,191,255',
 	 	dimgray :	'105,105,105',
 	 	dimgrey :	'105,105,105',
 	 	dodgerblue :	'30,144,255',
 	 	firebrick :	'178,34,34',
 	 	floralwhite :	'255,250,240',
 	 	forestgreen :	'34,139,34',
 	 	fuchsia :	'255,0,255',
 	 	gainsboro :	'220,220,220',
 	 	ghostwhite :	'248,248,255',
 	 	gold :	'255,215,0',
 	 	goldenrod :	'218,165,32',
 	 	gray :	'128,128,128',
 	 	green :	'0,128,0',
 	 	greenyellow :	'173,255,47',
 	 	grey :	'128,128,128',
 	 	honeydew :	'240,255,240',
 	 	hotpink :	'255,105,180',
 	 	indianred :	'205,92,92',
 	 	indigo :	'75,0,130',
 	 	ivory :	'255,255,240',
 	 	khaki :	'240,230,140',
 	 	lavender :	'230,230,250',
 	 	lavenderblush :	'255,240,245',
 	 	lawngreen :	'124,252,0',
 	 	lemonchiffon :	'255,250,205',
 	 	lightblue :	'173,216,230',
 	 	lightcoral :	'240,128,128',
 	 	lightcyan :	'224,255,255',
 	 	lightgoldenrodyellow :	'250,250,210',
 	 	lightgray :	'211,211,211',
 	 	lightgreen :	'144,238,144',
 	 	lightgrey :	'211,211,211',
 	 	lightpink :	'255,182,193',
 	 	lightsalmon :	'255,160,122',
 	 	lightseagreen :	'32,178,170',
 	 	lightskyblue :	'135,206,250',
 	 	lightslategray :	'119,136,153',
 	 	lightslategrey :	'119,136,153',
 	 	lightsteelblue :	'176,196,222',
 	 	lightyellow :	'255,255,224',
 	 	lime :	'0,255,0',
 	 	limegreen :	'50,205,50',
 	 	linen :	'250,240,230',
 	 	magenta :	'255,0,255',
 	 	maroon :	'128,0,0',
 	 	mediumaquamarine :	'102,205,170',
 	 	mediumblue :	'0,0,205',
 	 	mediumorchid :	'186,85,211',
 	 	mediumpurple :	'147,112,219',
 	 	mediumseagreen :	'60,179,113',
 	 	mediumslateblue :	'123,104,238',
 	 	mediumspringgreen :	'0,250,154',
 	 	mediumturquoise :	'72,209,204',
 	 	mediumvioletred :	'199,21,133',
 	 	midnightblue :	'25,25,112',
 	 	mintcream :	'245,255,250',
 	 	mistyrose :	'255,228,225',
 	 	moccasin :	'255,228,181',
 	 	navajowhite :	'255,222,173',
 	 	navy :	'0,0,128',
 	 	oldlace :	'253,245,230',
 	 	olive :	'128,128,0',
 	 	olivedrab :	'107,142,35',
 	 	orange :	'255,165,0',
 	 	orangered :	'255,69,0',
 	 	orchid :	'218,112,214',
 	 	palegoldenrod :	'238,232,170',
 	 	palegreen :	'152,251,152',
 	 	paleturquoise :	'175,238,238',
 	 	palevioletred :	'219,112,147',
 	 	papayawhip :	'255,239,213',
 	 	peachpuff :	'255,218,185',
 	 	peru :	'205,133,63',
 	 	pink :	'255,192,203',
 	 	plum :	'221,160,221',
 	 	powderblue :	'176,224,230',
 	 	purple :	'128,0,128',
 	 	red :	'255,0,0',
 	 	rosybrown :	'188,143,143',
 	 	royalblue :	'65,105,225',
 	 	saddlebrown :	'139,69,19',
 	 	salmon :	'250,128,114',
 	 	sandybrown :	'244,164,96',
 	 	seagreen :	'46,139,87',
 	 	seashell :	'255,245,238',
 	 	sienna :	'160,82,45',
 	 	silver :	'192,192,192',
 	 	skyblue :	'135,206,235',
 	 	slateblue :	'106,90,205',
 	 	slategray :	'112,128,144',
 	 	slategrey :	'112,128,144',
 	 	snow :	'255,250,250',
 	 	springgreen :	'0,255,127',
 	 	steelblue :	'70,130,180',
 	 	tan :	'210,180,140',
 	 	teal :	'0,128,128',
 	 	thistle :	'216,191,216',
 	 	tomato :	'255,99,71',
 	 	turquoise :	'64,224,208',
 	 	violet :	'238,130,238',
 	 	wheat :	'245,222,179',
 	 	white :	'255,255,255',
 	 	whitesmoke :	'245,245,245',
 	 	yellow :	'255,255,0',
 	 	yellowgreen : '154,205,50'
 	},
 	/**
 	 * [range The maximum number of color for to represent the scale]
 	 * @type {Number}
 	 */
 	range = 100,
 	defaultscalehsi = 0,
 	defaultscalergb = { from:[255,255,255],
 						to: [0,0,0]
 					  },
 	formatcolor = [['h','s','i'],
 					['r','g','b']];
 	var hsicolor = [];
 	var i = 0;


 	this.scale = function(){

 		for (i=0;i<range;i++){
 			var color =	 HSIModel({hue: 4.5, sat: 1, inte:0.4},{hue: 2, sat: 1, inte:1}, i / 99);
 		}
 	};
 	/**
 	 * [toRGB this method return the RGB color of HSI color]
 	 * @param  {[Object]} hsicolor [HSI model] [1,1,0.1] or {h:1,s:1,i:1}
 	 * @return {[type]}          [description]
 	 */
 	this.toRgb = function(hsicolor){
 		var data = verifycolorformat(rgbcolor);
 		var h = data[0],
 			s = data[1],
 			i = data[2];

 		/*if(typeof rgbcolor == 'string'){
 			rgbcolor.replace(/\s/,"");
 			if(rgbcolor.split(',').length){
 				r = parseInt(rgbcolor.split(',')[0]);
 				g = parseInt(rgbcolor.split(',')[1]);
 				b = parseInt(rgbcolor.split(',')[2]);
 			}else{
 				if(colors.hasOwnProperty(rgbcolor)){
 					toHis(colors[rgbcolor]);
 				}else{
 					throw new Error("tohis","String formt is not correct ex. => '255,255,255' ");
 				}
 			}
 		}

 		if(Array.isArray(hsicolor)){
 			h = hsicolor[0];
 			s = hsicolor[1];
 			i = hsicolor[2];
 		}else{
 			if(typeof hsicolor === 'object'){
 				if(hsicolor instanceof Array)
 					rgbcolor = to(hsicolor[0],hsicolor[1],hsicolor[2])
 			}
 		}*/

 	
	 		//grade 0 to 120
			if(0 <= h && h < ( (2/3) * Math.PI ) ) {
				b = (1/3) * (1 - s);
				r = (1/3) * ( 1 + ( (s * Math.cos(h)) / (Math.cos( ((1/3)*Math.PI) - h ) ) ) );
				g = 1 - ( r + b);
			}
			//grade 120 to 240
			if( ( (2/3) * Math.PI <= h ) && (h <  (4/3) * Math.PI) ) {
				h = h - (2/3) * Math.PI;
				r = (1/3)*(1-s);
				g = (1/3) * ( 1 + ( (s * Math.cos(h)) / (Math.cos( ((1/3)*Math.PI) - h ) ) ) );
				b = 1 - ( r + g);
			}
			//grade 240 to 360
			if( (4/3 * Math.PI  <=  h) && (h < 2 *  Math.PI)){
				h = h - ( (4/3) * Math.PI );
				g = (1/3)*(1-s);
				b = (1/3) * ( 1 + ( (s * Math.cos(h)) / (Math.cos( ((1/3)*Math.PI) - h ) ) ) );
				r =1 - ( g + b);
			}

			return	{
					 r : Math.abs(r)* 255 ,
				     b : Math.abs(b) * 255,
				 	 g : Math.abs(g) * 255
			};
		
 	};

 	this.toHis = function(rgbcolor){
 		var data = verifycolorformat(rgbcolor);

 		var r = data['d1'], 
 			g = data['d2'],
 			b = data['d3'];
 			var hue;
 		// when the value is passed by the string format
 		/*if(typeof rgbcolor == 'string'){
 			rgbcolor.replace(/\s/,"");
 			if(rgbcolor.split(',').length){
 				r = parseInt(rgbcolor.split(',')[0]);
 				g = parseInt(rgbcolor.split(',')[1]);
 				b = parseInt(rgbcolor.split(',')[2]);
 			}else{
 				if(colors.hasOwnProperty(rgbcolor)){
 					toHis(colors[rgbcolor]);
 				}else{
 					throw new Error("tohis","String formt is not correct ex. => '255,255,255' ");
 				}
 			}
 		}
 		// when the value is passed by the array format
 		if(Array.isArray(rgbcolor)){
 			r = parseInt(rgbcolor[0]);
 			g = parseInt(rgbcolor[1]);
 			b = parseInt(rgbcolor[2]);
 		}
 		// when the value is passed by the object format
 		if(rgbcolor instanceof Object){

 			r = rgbcolor['r'] || rgbcolor['R'];
 			g = rgbcolor['g'] || rgbcolor['G'];
 			b = rgbcolor['b'] || rgbcolor['B'];
 		}*/
 		r = r /(r + g + b );
		g = g /(r + g + b );
		b = b /(r + g + b );

		var mid = (r+g+b)/3;
		var mr = r - mid,
			mg = g - mid,
			mb = b - mid;
			//	var intensity = mid + Math.sqrt((2 * ( mr*mr + mg*mg + mb*mb)/3))
		var intensity = mid;
		var saturation = 1 - (3/(r+g+b)) * Math.min(r,g,b);
		//var saturation = 1 - 2 * (intensity	- mid) / intensity;
		//var cos_hue = (2 * mr - mg - mb)/ Math.sqrt((mr*mr + mg*mg + mb*mb) * 6)
		//hue = Math.acos(cos_hue) * 3 / Math.PI;
		var cos_hue = Math.acos( ( ( (r - g ) + ( r - b) ) / 2) / ( Math.sqrt( (r*r) + (g*g) + (b*b) - (r*g) -(r*b) - (g*b) ) ) );
		//if(b > g ) hue = 6 - hue;
		if(b > g ){

				hue = 2* Math.PI - cos_hue;
		}
		if(b<=g){
				console.log(hue);
				hue = cos_hue;
		}
		hue = Math.floor(hue * 10) / 10;
		saturation = Math.floor(saturation * 10) / 10;
		intensity = Math.floor(intensity * 10) / 10;
		
			return{h : hue,
						s : saturation,
						i : intensity}

 			return rgbcolor;
 		
 	};

 	this.toHex = function(){
 		var hsicolor = [];
 		if(typeof hsicolor == 'string'){

 		}
 		if(hsicolor instanceof Array){

 		}

 		return hsicolor;
 	}

 	function HSI(hs){
 		
 	}

 	function verifycolorformat(colordata){

 		var d1, d2, d3 = 0;
 		// when the value is passed by the string format
 		if(typeof colordata == 'string'){
 			colordata.replace(/\s/,"");
 			if(colordata.split(',').length > 1){

 				d1 = parseInt(colordata.split(',')[0]);
 				d2 = parseInt(colordata.split(',')[1]);
 				d3 = parseInt(colordata.split(',')[2]);
 				
 			}else{
				
 				if(colors.hasOwnProperty(colordata)){
 					return verifycolorformat('255,255,255');
 				}else{
 					throw new Error("format","Need to check the formt data color is not correct ex rgb. => '255,255,255' or ex. hsi '0.5,1,1' ");
 				}
 			}
 		}
 		// when the value is passed by the array format
 		if(Array.isArray(colordata)){
 			
 			d1 = parseInt(colordata[0]);
 			d2 = parseInt(colordata[1]);
 			d3 = parseInt(colordata[2]);
 		}
 		// when the value is passed by the object format
 		if(!Array.isArray(colordata) && colordata instanceof Object){
 			var format =0;
 			var formatrules =[];
 			for (var i = 0; i < formatcolor.length; i++) {
 				var count_true = 0;

 				for (var x = 0; x < formatcolor[i].length; x++) {
 					if(colordata.hasOwnProperty(formatcolor[i][x]) ){
 						formatrules.push(colordata[formatcolor[i][x]])
 						count_true++;
 					}
 					 				};
 				if(count_true == formatcolor[i].length){
 					format++;
 				}
 			}
 			if(format >= 1){
 				d1 = formatrules[0];
 				d2 = formatrules[1];
 				d3 = formatrules[2]
 			}else{
 				throw new Error("Rules of formats colors","Format ["+ Object.keys(colordata) + "] is wrong");
 			}
 			
 		}

 		return {d1, d2, d3};
 	}
 	function Error(state,msg){
 		this.value = state;
	   	this.message = msg;
	   	this.toString = function() {
	   	   return this.value + this.message;
	   	};
 	}
 }.apply(window));

//function

	/*Hsi(element).scale(); //x
	var hsimodel = Hsi(to,from);
	hsimodel(element).scale();
	
	Scale(numeber) //10, 
	toRGB(HSIColor)
	toHsi(RGBcolor)*/

function HSIModel(to,from){

			function convierteHexadecimal(num){
					//alert (num)
					var hexaDec = Math.floor(num/16)
					var hexaUni = num - (hexaDec * 16)
					return hexadecimal[hexaDec] + hexadecimal[hexaUni]
				}
			function HSIScale(to,from,percent){
					var hue_range = to.hue - from.hue;
					var sat_range = to.sat -  from.sat;
					var inte_range = to.inte - from.inte;

					if(hue_range < 0) hue_range	+=6;

				color = HSI(
					hue_range * percent	+ from.hue,
					sat_range * percent	+ from.sat,
					inte_range * percent + from.inte
					);

				return color;
			}

			function RbgToHsi(r,g,b){
				 r = r /(r + g + b );
				 g = g /(r + g + b );
				 b = b /(r + g + b );
				var mid = (r+g+b)/3;
				var mr = r - mid,
					mg = g - mid,
					mb = b - mid;
			//	var intensity = mid + Math.sqrt((2 * ( mr*mr + mg*mg + mb*mb)/3))
				var intensity = mid;
				var saturation = 1 - (3/(r+g+b)) * Math.min(r,g,b);
				//var saturation = 1 - 2 * (intensity	- mid) / intensity;

				//var cos_hue = (2 * mr - mg - mb)/ Math.sqrt((mr*mr + mg*mg + mb*mb) * 6)
				//hue = Math.acos(cos_hue) * 3 / Math.PI;
				var cos_hue = Math.acos( ( ( (r - g ) + ( r - b) ) / 2) / ( Math.sqrt( (r*r) + (g*g) + (b*b) - (r*g) -(r*b) - (g*b) ) ) );
				//if(b > g ) hue = 6 - hue;
				if(b > g ){
					hue = 2* Math.PI - cos_hue;
				}
				if(b<=g){
					hue = cos_hue;
				}

				hue = Math.floor(hue * 10) / 10;
				saturation = Math.floor(saturation * 10) / 10;
				intensity = Math.floor(intensity * 10) / 10;
				return{hue,saturation,intensity}
			}
			function HSI(h,s,i){
					
					var r,g,b;
					/*r=value(h);
					g=value(h+0.4);
					b = value(h+0.2);*/
					if(0 <= h && h < ( (2/3) * Math.PI ) ) {

						b = (1/3) * (1 - s);
						//b = (1 - s)/3;.
						//b = i - i*s;
						r = (1/3) * ( 1 + ( (s * Math.cos(h)) / (Math.cos( ((1/3)*Math.PI) - h ) ) ) );
						//r = ( 1 + ( (s * Math.cos(h)) / (Math.cos( ((1/3)*Math.PI) - h ) ) ) );
						g = 1 - ( r + b);
						
					}
					if( ( (2/3) * Math.PI <= h ) && (h <  (4/3) * Math.PI) ) {
					
						h = h - (2/3) * Math.PI;
						r = (1/3)*(1-s);
						g = (1/3) * ( 1 + ( (s * Math.cos(h)) / (Math.cos( ((1/3)*Math.PI) - h ) ) ) );
						b = 1 - ( r + g);

					}
					if( (4/3 * Math.PI  <=  h) && (h < 2 *  Math.PI)){
						h = h - ( (4/3) * Math.PI );
						g = (1/3)*(1-s);
						b = (1/3) * ( 1 + ( (s * Math.cos(h)) / (Math.cos( ((1/3)*Math.PI) - h ) ) ) );
						r =1 - ( g + b);
					}
					/*function value(hue_phase){
						var pure = 0.5 * (1 + Math.cos(hue_phase * Math.PI / 3));
						var re = i * (1 - s * (1 - pure));
						return re;
					}*/
				//console.log(r*3*i,g*3*i,b*3*i);
				return	{red : Math.abs(r)*255 ,
					     blue : Math.abs(b) * 255,
					 	 green : Math.abs(g) * 255};
			}
			return HSIScale(to,from,iter);
		}