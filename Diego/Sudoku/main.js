/*var mapa = [
    [1,2,3,4,5,6,7,8,9],
    //[4,5,6,7,8,9,1,2,3],
    [4,5,6,7,8,9,1,2,3],
    [7,8,9,1,2,3,4,5,6],
    [2,3,4,5,6,7,8,9,1],
    [5,6,7,8,9,1,2,3,4],
    [8,9,1,2,3,4,5,6,7],
    [3,4,5,6,7,8,9,1,2],
    [6,7,8,9,1,2,3,4,5],
    [9,1,2,3,4,5,6,7,8]
]*/
var mapa = [
    [1,2,3,4],
    [4,1,2,3],
    [2,3,4,1],
    [3,4,1,2]
]

function porbarSiVa(){
    let comprueba;
    for (let i = 0; i < mapa.length; i++) {
        comprueba=[false,false,false,false];
        for (let j = 0; j < mapa[i].length; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else{
                console.log(mapa);
                return false;
            } 
        }  
    }
    
    for (let i = 0; i < mapa.length; i++) {
        comprueba=[false,false,false,false,false];
        for (let j = 0; j < mapa.length; j++) {
            if(!comprueba[mapa[j][i]]) comprueba[mapa[j][i]]=true;
            else{
                console.log(mapa);
                console.log(i+" "+j)
                return false;
            } 
        }  
    }

    comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 0; i <= 1; i++) {  
        for (let j = 0; j <= 1; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }
    comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 2; i <= 3; i++) {  
        for (let j = 0; j <= 1; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }
    comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 0; i <= 1; i++) {  
        for (let j = 2; j <= 3; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }
    comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 2; i <= 3; i++) {  
        for (let j = 2; j <= 3; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }

/*
    comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 0; i <= 2; i++) {  
        for (let j = 0; j <= 2; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }

    comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 3; i <= 5; i++) {
        for (let j = 0; j <= 2; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }

   /* comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 6; i <= 8; i++) {
        for (let j = 0; j <= 2; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }*/

  /*  comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 0; i <= 2; i++) {
        for (let j = 3; j <= 5; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }

    comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }

    comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 6; i <= 8; i++) {
        for (let j = 3; j <= 5; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }

    comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 0; i <= 2; i++) {
        for (let j = 6; j <= 8; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }

    comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 3; i <= 5; i++) {
        for (let j = 6; j <= 8; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }

    comprueba=[false,false,false,false,false,false,false,false,false];
    for (let i = 6; i <= 8; i++) {
        for (let j = 6; j <= 8; j++) {
            if(!comprueba[mapa[i][j]]) comprueba[mapa[i][j]]=true;
            else return false;
        }  
    }*/
    return true;
}

function mezclar(){
    for (let i = 0; i < mapa.length; i++) {
        mapa[i]=barajar(mapa[i]);
        
    }
}

function barajar(array) {

    var currentIndex = array.length;

    var temporaryValue, randomIndex;
 0

    while (0 !== currentIndex) {

 

        // Elige una posicion del array aleatoriamente

        randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex -= 1;

 

        // Ponemos el elemento seleccionado en la ultima posición del array (currentIndex)

        // para que no puede volver a ser seleccionado

        temporaryValue = array[currentIndex];

        array[currentIndex] = array[randomIndex];

        array[randomIndex] = temporaryValue;

    }

 

    return array;

}

function imprimir(){
    for (let i = 0; i < mapa.length; i++) {
        for (let j = 0; j < mapa[i].length; j++) {
            crearBoton(mapa[i][j]);
        }  
    }
}

function crearBoton(numero){
    let boton = document.createElement("button");
    boton.innerText=numero;
    document.getElementById("mapa").append(boton);
}

function init(){
    var i = 0;
    do{
        mezclar()
        i++;
        
    }while(!porbarSiVa() && i<20000);
    imprimir();
}
window.onload=init;