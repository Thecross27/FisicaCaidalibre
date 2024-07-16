function textos(elemento, texto) {
    let generadorTextos = document.querySelector(elemento);
    generadorTextos.innerHTML = texto;
}

mensajes();

function verificarIntento() {
    let segundo = document.querySelector("#numeroUser").value;
    segundo = parseFloat(segundo); 


        let resultado = (1 / 2) * 9.81*(segundo**2)
        let velocidad = segundo * 9.81 
        textos("p", `La distancia recorrida en ${segundo} ${segundo==1 ? "segundo":"segundos"} es ${resultado.toFixed(5)} metros y la velocidad en el segundo ${segundo} es de ${velocidad}`); 
        limpiacaja();  
        document.querySelector("#reiniciar").removeAttribute("disabled");


}
function limpiacaja(){
    document.querySelector("#numeroUser").value="";
}

function reiniciarJuego(){
    limpiacaja();
    mensajes();
    

}
function mensajes(){
    textos("h1", "Hallando el recorrido de un cuerpo en caida libre");
    textos("p", "Ingrese el segundo en el que desea hallar el recorrido y la velocidad");
}



