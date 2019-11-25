
var primeraVez = true;
var anteriorOperacion = false;
var coma = false;
var  calculoAnterior=false;
window.onload = function () {
    let botones = document.getElementsByClassName("boton");
    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", calculadora);
        botones[i].addEventListener("mousedown", sombrear);
        botones[i].addEventListener("mouseup", desombrear);
        botones[i].addEventListener("mouseover", desombrear);
    }
    document.addEventListener("keydown", patata, false);

    function patata(e) {
        let operaciones = "+-x/%";
        var pantalla = document.querySelector(".pantalla input");
        var keyCode = e.keyCode;
        console.log(keyCode);
        if((keyCode>=48 && keyCode<=57) || (keyCode>=96 && keyCode<=105)){
            if(e.key=="%"){
                if(!primeraVez || calculoAnterior){
                    if(!anteriorOperacion){
                        primeraVez=false;
                        calculoAnterior=false;
                        coma=false;
                        pantalla.value += e.key;
                        anteriorOperacion=true;
                    }
                }
            }
            if(isNaN(e.key)) return;
            console.log(e.key);
            console.log((pantalla.value[pantalla.value.length-1]==")") );
            if(pantalla.value[pantalla.value.length-1]==")") return;
            console.log("a");
            anteriorOperacion=false;
            if (primeraVez || anteriorOperacion) {
                console.log("a");
                pantalla.value = e.key;
                primeraVez = false;
                calculoAnterior=false;
            } else {
                console.log("b");
                pantalla.value += e.key;
            }

        }else if(keyCode==107 || keyCode==109 || keyCode==111 || keyCode==88){
            if(!primeraVez || calculoAnterior){
                if(!anteriorOperacion){
                    primeraVez=false;
                    calculoAnterior=false;
                    coma=false;
                    pantalla.value += e.key;
                    anteriorOperacion=true;
                }
            }
        }else if(keyCode==8){
            if(calculoAnterior){
                pantalla.value = "0";
                primeraVez = true;
                coma=false;
                anteriorOperacion=false;
                calculoAnterior=false;
            }
            if(pantalla.value[pantalla.value.length-1]==".") coma=false;
            if(operaciones.indexOf(pantalla.value[pantalla.value.length-1])!=-1) coma=true;
            pantalla.value = pantalla.value.slice(0, -1);
            if (!pantalla.value.length) {
                pantalla.value = "0";
                primeraVez = true;
            }
        }else if(keyCode==190){
            if(!coma && !anteriorOperacion && !calculoAnterior && pantalla.value[pantalla.value.length-1]!=")"){
                coma=true;
                anteriorOperacion=true;
                primeraVez=false;
                pantalla.value += e.key;
            }
        }else if(keyCode==13){
             //alert(eval("5*5"));
        if(!anteriorOperacion && !primeraVez){
            var calc = pantalla.value.replace(/x/g, "*");
            calc = calc.replace(/%/g, "/100*");
            console.log(calc);
            let num = eval(calc);
            if(isNaN(num)){
                alert("Has escrito algún calculo fallido");
                num=0;
            }
            if(num==Infinity){
                alert("Da infinito");
                num=0;
            }
            pantalla.value= num;
            calculoAnterior=true;
            primeraVez = true;
            anteriorOperacion = false;
            coma = false;
        }
        }
    }
}

function botones(evt){
    console.log(evt);
}

function sombrear() {
    this.classList.add("sombrear");
   // this.style.boxShadow = "10px 10px inset black";
}

function desombrear() {
    this.classList.remove("sombrear");
  //  this.style.boxShadow = "";
}

function calculadora() {
    let seleccionado = this.innerText;
    let operaciones = "+-x/%";
    let especiales = "C«"
    var pantalla = document.querySelector(".pantalla input");
    if (especiales.indexOf(seleccionado) != -1) {
        if (seleccionado == "C") {
            pantalla.value = "0";
            primeraVez = true;
            coma=false;
            anteriorOperacion=false;
            calculoAnterior=false;
        } else {
            if(calculoAnterior){
                pantalla.value = "0";
                primeraVez = true;
                coma=false;
                anteriorOperacion=false;
                calculoAnterior=false;
            }
            if(pantalla.value[pantalla.value.length-1]=="."){
                coma=false;
                anteriorOperacion=false;
            } 
            if(operaciones.indexOf(pantalla.value[pantalla.value.length-1])!=-1){
                anteriorOperacion=false;
            }
            if(operaciones.indexOf(pantalla.value[pantalla.value.length-1])!=-1) coma=true;
            if(pantalla.value[pantalla.value.length-1]==")"){
                pantalla.value = pantalla.value.substring(1,pantalla.value.length);
            }
            pantalla.value = pantalla.value.slice(0, -1);
            if (!pantalla.value.length) {
                pantalla.value = "0";
                primeraVez = true;
            }
            if(operaciones.indexOf(pantalla.value[pantalla.value.length-1]) || pantalla.value[pantalla.value.length-1]=="."){
                anteriorOperacion=true;
            }
            
        }
    } else if(operaciones.indexOf(seleccionado)!=-1){  
        if(!primeraVez || calculoAnterior){
            if(!anteriorOperacion){
                primeraVez=false;
                calculoAnterior=false;
                coma=false;
                pantalla.value += this.innerText;
                anteriorOperacion=true;
            }
        }
    }else if(seleccionado=="="){
        //alert(eval("5*5"));
        if(!anteriorOperacion && !primeraVez){
            var calc = pantalla.value.replace(/x/g, "*");
            calc = calc.replace(/%/g, "/100*");
            console.log(calc);
            let num = eval(calc);
            if(isNaN(num)){
                alert("Has escrito algún calculo fallido");
                num=0;
            }
            if(num==Infinity){
                alert("Da infinito");
                num=0;
            }
            pantalla.value= num;
            calculoAnterior=true;
            primeraVez = true;
            anteriorOperacion = false;
            coma = false;
        }
        
       // coma=false;
    }else if(seleccionado=="."){
        console.log(anteriorOperacion);
        if(!coma && !anteriorOperacion && !calculoAnterior && pantalla.value[pantalla.value.length-1]!=")"){
            coma=true;
            anteriorOperacion=true;
            primeraVez=false;
            pantalla.value += this.innerText;
        }
    }else if(seleccionado=="()"){
        if(!anteriorOperacion && !primeraVez){
            pantalla.value="("+pantalla.value+")";
        }
    } else {
        if(primeraVez && this.innerText=="0" ){
            if(calculoAnterior){
                pantalla.value = this.innerText;
            }
            return;
        }
        if(pantalla.value[pantalla.value.length-1]==")") return;
        anteriorOperacion=false;
        if (primeraVez || anteriorOperacion) {
            console.log(primeraVez)
            pantalla.value = this.innerText;
            primeraVez = false;
            calculoAnterior=false;
        } else {
            pantalla.value += this.innerText;
        }
       
    }

}
