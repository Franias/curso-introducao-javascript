var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
	console.log("Bucandooo");
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
	xhr.addEventListener("load", function () {
		var resposta = xhr.responseText;
		var pacientes = JSON.parse(resposta);
		
		pacientes.forEach(function(paciente) {
			adicionaPaciente(paciente);
		});
	})
	xhr.send();
}); 