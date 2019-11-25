var peliculas = ["Solo en casa", "Pesadilla antes de navidad","Cuento de navidad"];
var pelicula; //Variable que guardaré la pelicula actual
var arrayLetrasUsadas;
var fallos;
var aciertos;
var enPartida;
var letrasLen;
window.addEventListener("keydown", imprimirLetra);
window.onload = function() {
    document.querySelectorAll(".reiniciar").forEach(element => {
        element.addEventListener("click", iniciar);
    });
    var teclado = document.getElementById("teclado");
    for(let teclaActual = 65; teclaActual <= 90;teclaActual++) {
        tecla = document.createElement("button");
        tecla.innerText = String.fromCharCode(teclaActual);
        tecla.classList.add("tecla");
        tecla.addEventListener("click", imprimirLetra);
        teclado.appendChild(tecla);
    }
    iniciar(); //Función para hacer la pelicula e imprimirla
    
}

//Metodo de inicio y reinicio
function iniciar(){
    enPartida=true;
    document.getElementById("final").innerText="";
    document.getElementById("final").setAttribute("hidden","");
    document.querySelector("#score div").innerText="00000000";
    document.getElementById("ultimaLetra").innerText="";
    document.getElementById("letrasUsadasDentro").innerText="";
    document.getElementById("pelicula").innerText="";
    pelicula = peliculas[Math.floor(Math.random()*3)];
    letrasLen=0;
    imprimirPelicula(pelicula);
    arrayLetrasUsadas=[];
    fallos=0;
    aciertos=0;
    document.querySelectorAll(".extremidad").forEach(parte => {
        if(!parte.hasAttribute("hidden"))  parte.setAttribute("hidden","");
    });
}

//Metodo para poner la pelicula con rayas y que cada _ ponga su value
function imprimirPelicula(pelicula){
    var palabras = pelicula.split(" ");
    palabras.forEach(palabra => {
        letrasLen+=palabra.length;
        for (let i = 0; i < palabra.length; i++) {
            let span = document.createElement("span");
            //span.classList.add(palabra[i]);
            span.setAttribute("value",palabra[i]);
            span.innerText="_"
            document.getElementById("pelicula").appendChild(span);
            document.getElementById("pelicula").innerHTML+=" ";
        }
        document.getElementById("pelicula").innerHTML+='&nbsp;&nbsp;&nbsp;';
    });
}

//Para saber que letra pasarle
function imprimirLetra(e){
    if(!enPartida) return;
    if(e.key){
        mostrarLetra(e.key);
    }else{
        mostrarLetra(e.target.innerText);
    }
}

function mostrarLetra(letra){
    //Primero comprobamos si ya esta usada y si lo está la marcamos y si no la mostramos
    document.getElementById("ultimaLetra").innerText=letra;
    if(!arrayLetrasUsadas[letra.toUpperCase()]){
        //Si esa letra NO esta usada
         arrayLetrasUsadas[letra.toUpperCase()]=true;
         var div = document.createElement("div");
         div.classList.add("letraUsada");
         div.innerText=letra.toUpperCase();
         document.getElementById("letrasUsadasDentro").appendChild(div);
         if(pelicula.includes(letra)|| pelicula.includes(letra.toUpperCase())){
             //Si esta la letra
            document.querySelectorAll("span").forEach(span => {
                if(span.attributes["value"].value.toLowerCase()==letra.toLowerCase()){ 
                    span.innerText=span.attributes["value"].value;
                    aciertos++;
                    let divScore = document.querySelector("#score div");
                    let score = parseInt(divScore.innerText);
                    score+=1000-(fallos*100);
                    score+="";
                    for (let i = score.length; i < 8; i++) {
                        score="0"+score;
                        
                    }
                    divScore.innerText=score;
                }
            });
            //Victoria
            if(letrasLen==aciertos){
                enPartida=false;
                var cartel = document.createElement("div");
                cartel.classList.add("victoria");
                cartel.innerHTML="Has ganado<br>Has conseguido "+document.querySelector("#score div").innerText+" puntos<br>";
                var boton = document.createElement("button");
                boton.addEventListener("click", iniciar);
                boton.innerText="Volver a Jugar";
                cartel.appendChild(boton);
                document.querySelector("#final").appendChild(cartel);
                document.querySelector("#final").removeAttribute("hidden");
            }
        }else{
            //No esta la letra
            document.querySelectorAll(".extremidad")[fallos].removeAttribute("hidden");
            fallos++;
            //Derrota
            if(fallos==10){
                enPartida=false;
                var cartel = document.createElement("div");
                cartel.classList.add("derrota");
                cartel.innerHTML="Has perdido<br>";
                var boton = document.createElement("button");
                boton.addEventListener("click", iniciar);
                boton.innerText="Volver a Jugar";
                cartel.appendChild(boton);
                document.querySelector("#final").appendChild(cartel);
                document.querySelector("#final").removeAttribute("hidden");
            }
        }
    }else{
        //Si esa letra SI esta usada
        document.querySelectorAll(".letraUsada").forEach(element => {
            if(element.innerText==letra.toUpperCase()){
                element.classList.toggle("cambiaFondo");
                element.addEventListener("transitionend", quitarFondo);
            }
            
        });
        
    }
}

function quitarFondo(){
    this.classList.toggle("cambiaFondo");
    this.removeEventListener("transitionend", quitarFondo, false);
}
