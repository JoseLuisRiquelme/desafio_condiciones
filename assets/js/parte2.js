let inputGithub = document.querySelector("#cantidadGithub");
let inputSlack = document.querySelector("#cantidadSlack");
let inputGit = document.querySelector("#cantidadGit");
let parrafoLlevas = document.getElementById("llevas");

let spanCantidadTotal = document.querySelector("#cantidadTotal");

function calcularTotalStickers(){
    let cantidadGithub = Number(inputGithub.value);
    let cantidadSlack = Number(inputSlack.value);
    let cantidadGit = Number(inputGit.value);

    let cantidadTotal = cantidadGithub + cantidadSlack + cantidadGit;

    if(cantidadTotal <= 10){
        spanCantidadTotal.innerHTML = cantidadTotal;
        parrafoLlevas.style.color = "blue";
        parrafoLlevas.style.border = "2px solid ";
        parrafoLlevas.style.borderRadius = "8px";
    }
    else{
        spanCantidadTotal.innerHTML = "demasiados";
        parrafoLlevas.style.color = "red";
        parrafoLlevas.style.border = " 2px solid";
        parrafoLlevas.style.borderRadius = "8px";   
    }
}