console.log("Fui carregado de outra pagina");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var alturaValida = true;
  var pesoValida = true;
  var tdImc = paciente.querySelector(".info-imc");

  if (peso <= 0 || peso >= 500) {
    pesoValida = false;
    tdImc.textContent = "Peso invalido!";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.00) {
    alturaValida = false;
    tdImc.textContent = "Altura invalido!";
    paciente.classList.add("paciente-invalido");
  }
  if (alturaValida && pesoValida) {

    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);

  }
}
