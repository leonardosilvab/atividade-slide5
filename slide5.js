function construtor(){

	
	var observer = {};
	var listaObservers = [];
	var contador = 0;

	var gatilhoscont = 0;

	observer.gatilho=function(){
		
		for(var x=0; x<listaObservers.length; x++){
			var funcao = listaObservers[x];
			funcao();
			++gatilhoscont;
			console.log("gatilho ativado "+gatilhoscont+" vez(es)")
		}
	}

	observer.contar = function(){
		++contador;
	}

	observer.exibeContador = function(){
		return contador;
	}

	observer.add = function(objeto){
		listaObservers.push(objeto);
	}

	return observer;
}


function exibirContador(){
	console.log(observer.exibeContador());
}


function greetings(){
	console.log("Hello world");
}




var observer = construtor();
observer.add(exibirContador);
observer.add(greetings);
observer.contar();
observer.contar();
observer.contar();
observer.contar();
observer.gatilho();