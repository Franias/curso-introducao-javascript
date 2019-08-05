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
  var tdImc = paciente.querySelector(".info-imc");

  var alturaValida = validaAltura(altura);
  var pesoValida = validaPeso(peso);

  if (!pesoValida) {
    pesoValida = false;
    tdImc.textContent = "Peso invalido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    alturaValida = false;
    console.log("Altura invalido!");    
    tdImc.textContent = "Altura invalido!";
    paciente.classList.add("paciente-invalido");
  }
  if (alturaValida && pesoValida) {

    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
    console.log(imc);

  }
}
function validaPeso(peso){
  if (peso > 0 && peso <500){
    return true;
  }else
  return false;
}

function validaAltura(altura){
  if (altura > 0 && altura <3){
    return true;
  }else
  return false;
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
