function rolar(){

document.querySelector("#sobre").scrollIntoView({

behavior:"smooth"

});

}

const tema=document.getElementById("tema");

tema.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

tema.innerHTML="☀️";

}else{

tema.innerHTML="🌙";

}

}

function calcular(){

let diaria=parseFloat(document.getElementById("diaria").value);

if(isNaN(diaria)){

alert("Digite um valor.");

return;

}

let salario=diaria*22;

document.getElementById("resultado").innerHTML=

"Salário aproximado por mês: R$ "+salario.toFixed(2);

}

function quiz(resposta){

let texto=document.getElementById("quizResultado");

if(resposta=="B"){

texto.innerHTML="✅ Correto! A colher de pedreiro é usada para aplicar argamassa e assentar tijolos.";

texto.style.color="green";

}else{

texto.innerHTML="❌ Resposta incorreta.";

texto.style.color="red";

}

}