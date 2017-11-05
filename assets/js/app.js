/* array asientos */
var asientoP = [true,true,true,true];
var asientoE = [true,true,true,true,true,true];

var reservar = document.getElementById('reservar');
var divP = document.querySelectorAll('.divP');
var divE = document.querySelectorAll('.divE');

function primera(){
	var cont = 0;
	for (var i = 0; i < asientoP.length; i++) {
		if (asientoP[i]===true) {
			divP[i].classList.add('noDisp');
			asientoP[i]=false;
			break;
		}else{
			cont++;
			if (cont === 4) {
				var resp = confirm("Ya no quedan lugares en Primera Clase\n ¿Quieres reservar asiento en Clase Económica?");
				if (resp === true) {
					economica();
				}else{
					alert("El próximo vuelo sale en 3 horas");
				}
			}
			continue;
		}
	}
}

function economica(){
	var cont = 0;
	for (var i = 0; i < asientoE.length; i++) {
		if (asientoE[i]===true) {
			divE[i].classList.add('noDisp');
			asientoE[i]=false;
			break;
		}else{
			cont++;
			if (cont === 6) {
				var resp = confirm("Ya no quedan lugares en Primera Clase\n ¿Quieres reservar asiento en Clase Económica?");
				if (resp === true) {
					primera();
				}else{
					alert("El próximo vuelo sale en 3 horas");
				}	
			}
			continue;
		}
		
	}
}

reservar.addEventListener('click', function(){
	/* pregunto que clase desea y guardo la respuesta en la variable */
	var reserva = prompt('¿En qué zona prefieres reservar tu asiento?\n 1. Primera Clase\n 2. Económica');

	if (reserva === '1') {
		primera();
	}else{
		economica();
	}
});
