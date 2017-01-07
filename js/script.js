//arr1 = ['mau','gabi','benja','tati']
//arr2 = ['nati','mau','gabi','benja','nico']

arr1 = ['nati','mau','gabi','benja','nico']
arr2 = ['nati','mau','gabi','benja','nico']

function burbujeo (arreglo , arreglo2){
	var flag=true;
	var resultado = [];
	var j=0;

	if (arreglo.length >= 20 || arreglo2.length >= 20){
		alert("OVERFLOW");
	}
	if (arreglo.length < 3 || arreglo2.length < 3){
		alert("LONGITUD MINIMA");
	}
	
	for (var i in arreglo){
		while (j < arreglo2.length){
			if (arreglo[i] == arreglo2[j]){
				arreglo.splice(i,1);
				arreglo2.splice(j,1);
			} else{
				j++;
			}
		}
		j=0;
	}

	resultado.push(arreglo);
	resultado.push(arreglo2);

    resultado = resultado.toString();
	if (resultado == ","){
		console.log(" no todos los nombres coinciden en ambas listas");
	}
	document.getElementById("resultado").value = resultado;
}

function prueba(){
	burbujeo(arr1,arr2);
}