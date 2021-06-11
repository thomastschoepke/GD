var nome = "Thomas Soares";
var cargo = "Aprendiz";

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1=document.getElementById("texto-1");
var texto2=document.getElementById("texto-2");

function colocarCargonoHTML(cargo) {
  cargoHtml.innerHTML = cargo;
}

function colocarNomeNoHtml(nome){
   nomeHtml.innerHTML = nome;
}

function cliqueNoProjetos(){
  console.log("Clicou no botão Projoetos");
  texto2.style.display = "block";
  texto1.style.display= "none";
}

function cliqueNoSobre () {
  console.log("Clicou no botão Sobre");
  texto2.style.display = "none";
  texto1.style.display= "block";

}


colocarNomeNoHtml(nome);
colocarCargonoHTML(cargo);
