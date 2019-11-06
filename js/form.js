var botaoAdicionar = document.querySelector("#adicionar-pessoa");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var pessoa = obtemPessoa(form);

  var erros = validaPessoa(pessoa);
  if (erros.length > 0) {
    exibeMensagemDeErro(erros);
    return;
  }

  adicionaPessoa(pessoa);

  form.reset();

  var mensagensErro =document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});
function adicionaPessoa(pessoa){
  var pessoaTr = montaTr(pessoa);
  var tabela = document.querySelector("#tabela-pessoas");
  tabela.appendChild(pessoaTr);

}
function exibeMensagemDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPessoa(form) {
  var pessoa = {
    id: form.id.value,
    nome: form.nome.value,
    cpf: form.cpf.value,
    email: form.email.value,
    senha: form.senha.value
  }
  return pessoa;
}

function montaTr(pessoa) {
  var pessoaTr = document.createElement("tr");
  pessoaTr.classList.add("pessoa");

  pessoaTr.appendChild(montaTd(pessoa.id, "info-ID"));
  pessoaTr.appendChild(montaTd(pessoa.nome, "info-nome"));
  pessoaTr.appendChild(montaTd(pessoa.email, "info-email"));
  pessoaTr.appendChild(montaTd(pessoa.cpf, "info-cpf"));
  pessoaTr.appendChild(montaTd(pessoa.senha, "info-senha"));

  return pessoaTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPessoa(pessoa) {

  var erros = [];

  if(pessoa.nome.length == 0) erros.push("O nome não pode ser em branco");
  if (!validaCPF(pessoa.cpf)) erros.push("O CPF é invalido");
  if(pessoa.email.length == 0) erros.push("A E-mail não pode ser em branco");

  return erros;
}