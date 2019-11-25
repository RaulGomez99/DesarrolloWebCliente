 //false = X true = O
 let jugadas = 0;
 let turno = false;
 let vict = false;
 window.onload = function () {
    var botones = document.querySelectorAll(".boton");
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", jugada);
    }

 }

 function jugada(){
     if(this.children.length==0){
         let insert = document.createElement("p");
         if(turno){
            insert.className="X";
            insert.innerText="X";
            jugadas++;

         }else{
            insert.className="O";
            insert.innerText="O";
            jugadas++;
         }
         turno=!turno;
         this.appendChild(insert);
         compruebaJugada(false);
     }
 }

 function compruebaJugada(maquina){
     vict=false;
    var botones = document.querySelectorAll(".boton");
     /////////
    //FILAS//
   /////////
    //Primera fila
    if(botones[0].innerText==botones[1].innerText && botones[1].innerText==botones[2].innerText && botones[0].children.length!=0){
        if(!maquina)alert("Gana "+botones[0].innerText);
        if(!maquina)quitarListeners();
        if(maquina) return true;
    }
    //Segunda fila
    else if(botones[3].innerText==botones[4].innerText && botones[4].innerText==botones[5].innerText && botones[3].children.length!=0){
        if(!maquina)alert("Gana "+botones[3].innerText);
        if(!maquina)quitarListeners();
        if(maquina) return true;
    }

    //Tercera fila
    else if(botones[6].innerText==botones[7].innerText && botones[7].innerText==botones[8].innerText && botones[6].children.length!=0){
        if(!maquina)alert("Gana "+botones[6].innerText);
        if(!maquina)quitarListeners();
        if(maquina) return true;
    }

     ////////////
    //Columnas//
   ////////////

    //Primera columna
    else if(botones[0].innerText==botones[3].innerText && botones[3].innerText==botones[6].innerText && botones[0].children.length!=0){
        if(!maquina)alert("Gana "+botones[0].innerText);
        if(!maquina)quitarListeners();
        if(maquina) return true;
    }

    //Segunda columna
    else if(botones[1].innerText==botones[4].innerText && botones[4].innerText==botones[7].innerText && botones[1].children.length!=0){
        if(!maquina)alert("Gana "+botones[1].innerText);
        if(!maquina)quitarListeners();
        if(maquina) return true;
    }

    //Tercera columna
    else if(botones[2].innerText==botones[5].innerText && botones[5].innerText==botones[8].innerText && botones[2].children.length!=0){
        if(!maquina)alert("Gana "+botones[2].innerText);
        if(!maquina)quitarListeners();
        if(maquina) return true;
    }


     //////////////
    //Diagonales//
   //////////////

    //Primera diagonal
    else if(botones[0].innerText==botones[4].innerText && botones[4].innerText==botones[8].innerText && botones[0].children.length!=0){
        if(!maquina)alert("Gana "+botones[0].innerText);
        if(!maquina)quitarListeners();
        if(maquina) return true;
    }

    //Segunda diagonal
    else if(botones[2].innerText==botones[4].innerText && botones[4].innerText==botones[6].innerText && botones[2].children.length!=0){
        if(!maquina)alert("Gana "+botones[2].innerText);
        if(!maquina)quitarListeners();
        if(maquina) return true;
    }

    //Empate
    else if(jugadas==9){
        alert("Empate");
        quitarListeners();
    }
 }


 function quitarListeners(){
    var botones = document.querySelectorAll(".boton");
    for (let i = 0; i < botones.length; i++) {
        botones[i].removeEventListener("click", jugada);
    }
 }

 function maquina(){
    let insert = document.createElement("p");
    insert.className="O";
    insert.innerText="O";
    var botones = document.querySelectorAll(".boton");
    //Comprueba si gana
    for (let i = 0; i < botones.length; i++) {
        botones[i].appendChild(insert);
        if(compruebaJugada(true)){
            compruebaJugada(false);
            return;
        }else{
            botones[i].innerText="";
            botones[i].className="";
        }
        
    }
 }