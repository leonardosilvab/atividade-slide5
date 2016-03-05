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

	observer.multiplicador = function(x,y){
		return x * y;
	};

	
	return observer;
}

var varObserver = construtor();

function exibirContador(){
	console.log(varObserver.exibeContador());
}


function greetings(){
	console.log("Hello world");
}

function printarMultiplicador(){
	console.log(varObserver.multiplicador(3,5));
}

varObserver.add(exibirContador);
varObserver.add(greetings);
varObserver.add(printarMultiplicador);
varObserver.contar();
varObserver.contar();
varObserver.contar();
varObserver.contar();
varObserver.gatilho();