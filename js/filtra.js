var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  this.value;
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    console.log("Tema glo aoiigeitaod");
    for (var index = 0; index < pacientes.length; index++) {
      var paciente = pacientes[index];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value,"i");

      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");

      } else {
        paciente.classList.remove("invisivel")
      }
    }
  }else{
    for (var index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];
    paciente.classList.remove("invisivel");
    }
  }



})