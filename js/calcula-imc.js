console.log("Fui carregado de outra pagina");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Franias WEB";
var pessoas = document.querySelectorAll(".pessoa")

for (var i = 0; i < pessoas.length; i++) {
  var pessoa = pessoas[i];
  var tdID = pessoa.querySelector(".info-ID");
  var id = tdID.textContent;
  var tdNome = pessoa.querySelector(".info-nome");
  var nome = tdNome.textContent;
  var tdCPF = pessoa.querySelector(".info-cpf");
  var cpf = tdAltura.textContent;
  var tdSenha = pessoa.querySelector(".info-senha");
  var senha = tdSenha.textContent;

  var cpfValido = validaCPF(cpf);

  if (!validaCPF) {
    validaCPF = false;    
    tdImc.textContent = "CPF invalido!";
    pessoa.classList.add("pessoa-invalido");
  }
}

function validaCPF(cpf){
  if (cpf.length == 11){
    return true;
  }else
  return false;
}
