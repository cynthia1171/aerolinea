/* array asientos */
var asientoP = [true,true,true,true];
var asientoE = [true,true,true,true,true,true];

/* obtengo el id del boton reservar */
var reservar = document.getElementById('reservar');

/* obtengo las clases de los div que mostraran la disponibilidad de los asientos */
var divP = document.querySelectorAll('.divP');
var divE = document.querySelectorAll('.divE');

/* obtengo el id del div que mostrara el pase de abordo */
var contenedor = document.getElementById('cont');

/* funcion para asignar asiento a primera clase */
function primera(){
	var cont = 0;
	for (var i = 0; i < asientoP.length; i++) {
		if (asientoP[i]===true) {
			divP[i].classList.add('noDisp');
			asientoP[i]=false;
			contenedor.innerHTML = '<div><h3>Pase de abordar</h3><p>Numero de asiento: '+(i+1)+'</p><p>clase: Primera</p></div>';
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

/* funcion para asignar asiento a clase economica */
function economica(){
	var cont = 0;
	for (var i = 0; i < asientoE.length; i++) {
		if (asientoE[i]===true) {
			divE[i].classList.add('noDisp');
			asientoE[i]=false;
			contenedor.innerHTML = '<div><h3>Pase de abordar</h3><p>Numero de asiento: '+(i+1)+'</p><p>clase: Economica</p></div>';
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

/* al presionar el boton reservar, se llama al evento click y se ejecuta la funcion */
reservar.addEventListener('click', function(){
	/* pregunto que clase desea y guardo la respuesta en la variable */
	var reserva = prompt('¿En qué zona prefieres reservar tu asiento?\n 1. Primera Clase\n 2. Económica');

	if (reserva === '1') {
		primera();/* si la respuesta es 1, se ejecuta la funcion primera(). */
		
	}else if(reserva === '2'){
		economica();/* si la respuesta es 2, se ejecuta la funcion economica(). */
	}else{
	 	alert("ingrese opcion valida");
	}
});
