var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  this.value;
  var pessoas = document.querySelectorAll(".pessoa");

  if (this.value.length > 0) {
    for (var index = 0; index < pessoas.length; index++) {
      var pessoa = pessoas[index];
      var tdNome = pessoas.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value,"i");

      if (!expressao.test(nome)) {
        pessoa.classList.add("invisivel");

      } else {
        pessoa.classList.remove("invisivel")
      }
      
    }
  }else{
    for (var index = 0; index < pessoas.length; index++) {
    var pessoa = pessoas[index];
    pessoa.classList.remove("invisivel");
    }
  }

})