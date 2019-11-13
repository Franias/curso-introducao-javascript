// Global XMLHttpRequest
var xmlHttp;

function fnCreate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var cpf = document.getElementById("cpf").value;
  var passwd = document.getElementById("passwd").value;
  xmlHttp.onreadystatechange = createCallback;
  xmlHttp.open(
    "GET",
    "server.php?op=create&&name=" + name + "&&email=" + email+ "&&cpf=" + cpf+ "&&passwd=" + passwd,
    true
  );
  xmlHttp.send();
}

/* */
function createCallback() {
  if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
    var json = JSON.parse(xmlHttp.responseText);
    var table = document.getElementById("tabela-pessoas");
    createRow(table, json);
  }
}

function fnRead() {
  xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = readCallback;
  xmlHttp.open("GET", "server.php?op=read", true);
  xmlHttp.send();
}

function readCallback() {
  if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
    // get json from the server
    var json = JSON.parse(xmlHttp.responseText);
    var table = document.getElementById("tabela-pessoas");
    for (var key in json) {
      createRow(table, json[key]);
    }
  }
}

function enableUpdate(id) {
  var tr = document.getElementById(id);
  var trChildNodes = tr.childNodes;

  for (var index = 0; index <= 1; index++) {
    // Get the table value
    var text = trChildNodes[index].innerText;
    trChildNodes[index].innerText = "";

    //Creating the input element
    var input = document.createElement("input");
    input.setAttribute("onblur", "fnUpdate(" + id + ");");
    // seting the old value
    input.value = text;
    // append to the column
    trChildNodes[index].appendChild(input);
  }
}

function fnUpdate(id) {
  var tr = document.getElementById(id);
  var trChildNodes = tr.childNodes;
  var textName = trChildNodes[0].firstChild.value;
  var textEmail = trChildNodes[1].firstChild.value;
  var textCpf = trChildNodes[2].firstChild.value;
  var textPasswd = trChildNodes[3].firstChild.value;

  var url =
    "server.php?op=update&id=" +
    id +
    "&name=" +
    textName +
    "&email=" +
    textEmail    
    "&cpf=" +
    textCpf
    "&passwd=" +
    textPasswd;

  xmlHttp.onreadystatechange = updateCallback;
  xmlHttp.open("GET", url, true);
  xmlHttp.send();
}

function updateCallback() {
  if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
    var json = JSON.parse(xmlHttp.responseText);
    var tr = document.getElementById(json.id);
    var trChildNodes = tr.childNodes;
    trChildNodes[0].innerText = json.name;
    trChildNodes[1].innerText = json.email;
    trChildNodes[2].innerText = json.cpf;
    trChildNodes[3].innerText = json.passwd;
  }
}

function fnDelete(id) {
  xmlHttp.onreadystatechange = deleteCallback;
  xmlHttp.open("GET", "server.php?op=delete&&id=" + id, true);
  xmlHttp.send();
}

function deleteCallback() {
  if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
    var json = JSON.parse(xmlHttp.responseText);
    // If returns true of the server then remove table row
    if (json.result === "true") {
      //gets the table row
      var tr = document.getElementById(json.id);
      // get table row parent
      var trParent = tr.parentNode;
      // remove table row
      trParent.removeChild(tr);
    }
  }
}