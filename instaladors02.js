
var rutaImatges = "img/";
var imatges = ["pos_1.jpg", "pos_2.jpg", "pos_3.jpg", "pos_4.jpg", "pos_5.jpg", "pos_6.jpg", "pos_7.jpg", "pos_8.jpg", "pos_9.jpg",
"pos_10.jpg", "pos_11.jpg", "pos_12.jpg", "pos_13.jpg", "pos_14.jpg", "pos_15.jpg", "pos_16.jpg", "pos_17.jpg", "pos_18.jpg",
"pos_19.jpg", "pos_20.jpg", "pos_21.jpg", "pos_22.jpg", "pos_23.jpg", "pos_24.jpg", "pos_25.jpg", "pos_26.jpg", "pos_27.jpg",
"pos_28.jpg", "pos_29.jpg", "pos_30.jpg", "pos_31.jpg", "pos_32.jpg", "pos_33.jpg", "pos_34.jpg", "pos_35.jpg", "pos_36.jpg",
"pos_37.jpg", "pos_38.jpg", "pos_39.jpg"];

var equipoE8 = " <strong>ESSENTIAL 8</strong>";
var equipoE11 = " <strong>ESSENTIAL 11</strong>";
var equipoE17 = " <strong>ESSENTIAL 17</strong>";

var unidadDureza = "ºHF";
var negritaApertura = "<strong>";
var negritaCierre = "</strong>";

var error = '<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>' + 
'<span class="sr-only">Error:</span>'+" <strong>ATENCIÓN:</strong> ESTE EQUIPO NO ES VÁLIDO PARA ESTA DUREZA DE AGUA";

document.getElementById('error').style.display='none';



function showError(nombreEquipo,urlEquipo){
        
    document.getElementById("error").style.display='block';
    document.getElementById("error").innerHTML = error; 

}

function hideError(){
    document.getElementById('error').style.display='none';
}
 

function evaluarResultats(){

	document.getElementById('error').style.display='none';

	var equipo = document.getElementById("equipo").value;
    var dureza = document.getElementById("dureza").value;

    document.getElementById("mostraEquipo").innerHTML = equipo;
	document.getElementById("mostraDureza").innerHTML = negritaApertura + dureza + unidadDureza + negritaCierre;

	mostrarResultats(equipo, dureza);
    
    
}

 function mostrarResultats(equipo, dureza){

 	document.getElementById("mostraEquipo").innerHTML = "";
    document.getElementById("mostraDureza").innerHTML = "";
    document.getElementById("error").innerHTML = "";

	 if(equipo == "essential8"){

	document.getElementById("mostraEquipo").innerHTML = equipoE8;
	document.getElementById("mostraDureza").innerHTML = negritaApertura + dureza + unidadDureza + negritaCierre;

		switch (dureza){
			case "5": 
			document.getElementById("imatge").src = rutaImatges+imatges[1];
			break;

			case "10":
			document.getElementById("imatge").src = rutaImatges+imatges[1];
			break;

			case "15":
			document.getElementById("imatge").src = rutaImatges+imatges[13];
			break;

			case "20":
			document.getElementById("imatge").src = rutaImatges+imatges[21];
			break;

			case "25":
			document.getElementById("imatge").src = rutaImatges+imatges[25];
			break;

			case "30":
			document.getElementById("imatge").src = rutaImatges+imatges[28];
			break;

			case "35":
			document.getElementById("imatge").src = rutaImatges+imatges[30];
			break;

			case "40":
			document.getElementById("imatge").src = rutaImatges+imatges[31];
			break;

			case "45":
			document.getElementById("imatge").src = rutaImatges+imatges[33];
			break;

			case "50":
			document.getElementById("imatge").src = rutaImatges+imatges[34];
			break;

			case "55":
			document.getElementById("imatge").src = rutaImatges+imatges[35];
			break;

			case "60":
			document.getElementById("imatge").src = rutaImatges+imatges[36];
			break;

			default:
			document.getElementById("imatge").src = "img/choose.png";
			showError();
		}

	 }

	 if(equipo == "essential11"){

	 	document.getElementById("mostraEquipo").innerHTML = equipoE11;
		document.getElementById("mostraDureza").innerHTML = negritaApertura + dureza + unidadDureza + negritaCierre;

	switch (dureza){
			case "5": 
			document.getElementById("imatge").src = rutaImatges+imatges[1];
			break;

			case "10":
			document.getElementById("imatge").src = rutaImatges+imatges[1];
			break;

			case "15":
			document.getElementById("imatge").src = rutaImatges+imatges[21];
			break;

			case "20":
			document.getElementById("imatge").src = rutaImatges+imatges[27];
			break;

			case "25":
			document.getElementById("imatge").src = rutaImatges+imatges[31];
			break;

			case "30":
			document.getElementById("imatge").src = rutaImatges+imatges[33];
			break;

			case "35":
			document.getElementById("imatge").src = rutaImatges+imatges[34];
			break;

			case "40":
			document.getElementById("imatge").src = rutaImatges+imatges[35];
			break;

			case "45":
			document.getElementById("imatge").src = rutaImatges+imatges[36];
			break;

			case "50":
			document.getElementById("imatge").src = rutaImatges+imatges[36];
			break;

			case "55":
			document.getElementById("imatge").src = rutaImatges+imatges[37];
			break;

			case "60":
			document.getElementById("imatge").src = rutaImatges+imatges[38];
			break;

			case "65":
			document.getElementById("imatge").src = rutaImatges+imatges[39];
			break;

			case "70":
			document.getElementById("imatge").src = rutaImatges+imatges[39];
			break;

			default:
			document.getElementById("imatge").src = "img/choose.png";
			showError();
		}

	

	 }

	 if(equipo == "essential17"){

	 	document.getElementById("mostraEquipo").innerHTML = equipoE17;
		document.getElementById("mostraDureza").innerHTML = negritaApertura + dureza + unidadDureza + negritaCierre;

	switch (dureza){
			case "5": 
			document.getElementById("imatge").src = rutaImatges+imatges[1];
			break;

			case "10":
			document.getElementById("imatge").src = rutaImatges+imatges[1];
			break;

			case "15":
			document.getElementById("imatge").src = rutaImatges+imatges[1];
			break;

			case "20":
			document.getElementById("imatge").src = rutaImatges+imatges[13];
			break;

			case "25":
			document.getElementById("imatge").src = rutaImatges+imatges[19];
			break;

			case "30":
			document.getElementById("imatge").src = rutaImatges+imatges[23];
			break;

			case "35":
			document.getElementById("imatge").src = rutaImatges+imatges[26];
			break;

			case "40":
			document.getElementById("imatge").src = rutaImatges+imatges[28];
			break;

			case "45":
			document.getElementById("imatge").src = rutaImatges+imatges[30];
			break;

			case "50":
			document.getElementById("imatge").src = rutaImatges+imatges[31];
			break;

			case "55":
			document.getElementById("imatge").src = rutaImatges+imatges[32];
			break;

			case "60":
			document.getElementById("imatge").src = rutaImatges+imatges[33];
			break;

			case "65":
			document.getElementById("imatge").src = rutaImatges+imatges[34];
			break;

			case "70":
			document.getElementById("imatge").src = rutaImatges+imatges[35];
			break;

			case "75":
			document.getElementById("imatge").src = rutaImatges+imatges[35];
			break;

			case "80":
			document.getElementById("imatge").src = rutaImatges+imatges[36];
			break;

			case "85":
			document.getElementById("imatge").src = rutaImatges+imatges[36];
			break;

			case "90":
			document.getElementById("imatge").src = rutaImatges+imatges[36];
			break;

			case "95":
			document.getElementById("imatge").src = rutaImatges+imatges[37];
			break;

			default:
			document.getElementById("imatge").src = "img/choose.png";
			showError();
		}

	

	 }

	
}

