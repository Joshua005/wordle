let intentos = 6
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const button = document.getElementById("guess-button")


window.addEventListener('load', init)
button.addEventListener("click", intenar)




function intenar(){
    const INTENTO = leerIntento();
    const regex = /\d/
    if(INTENTO === palabra){
        terminar("<h1>GANASTE! :)</h1>")
        
    }
    else if (regex.test(INTENTO)){
        alert("Solo letras sin numeros")
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        SPAN.style.width ="50px"
        SPAN.style.height= "50px"
        SPAN.style.borderRadius = '5px'
        if (INTENTO[i]===palabra[i]){ 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else { 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
GRID.appendChild(ROW)
intentos--
if (intentos==0){
    terminar("<h1>PERDISTE!</h1>")
}

}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input")
    const button = document.getElementById("guess-button")
    INPUT.disabled = true
    button.disabled = true;
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = mensaje
}




function leerIntento(){
    let intento = document.getElementById("guess-input")
    intento = intento.value
    intento = intento.toUpperCase()
    return intento    
}


function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
    console.log(palabra)
}

