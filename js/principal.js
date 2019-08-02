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
  titulo.addEventListener("click", function () {
    console.log("Olá eu fui clicado numa funcao anonima.");
  });
  var botaoAdicionar = document.querySelector("#adicionar-paciente");
  botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
  });

}
