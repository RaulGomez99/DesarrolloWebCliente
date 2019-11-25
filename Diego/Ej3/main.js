window.onload = function() {
    window.addEventListener("keydown", tecla);

    function tecla(e) {
        let keyCode = e.keyCode;
        switch (keyCode) {
            case 87: case 104:
                moverCuadrado(1,keyCode<97)
                break;
            case 65: case 100:
                moverCuadrado(4,keyCode<97)
                break;
            case 68: case 102:
                moverCuadrado(2,keyCode<97)
                break;
            case 88: case 98:
                moverCuadrado(3,keyCode<97)
                break;
        }
    }
    function moverCuadrado(direccion, cuadrado){ //Direccion 1 Arriba 2 Derecha 3 Abajo 4 Izquierda Cuadrado 1 true 2 false
        let caja;
        if(cuadrado){
            caja = document.getElementById("caja1");
        }else{
            caja = document.getElementById("caja2");
        }
        if(direccion%2==0){
            let num;
            if(cuadrado)num = caja.style.left;
            else num = caja.style.right
            num=num.substring(0,num.length-2);
            if((direccion==2 && !cuadrado) || (direccion==4 && cuadrado))num-=1;
            else num-=-1;
            if(cuadrado)caja.style.left=num+"px";
            else caja.style.right=num+"px";
        }else{
            let num = caja.style.top;
            num=num.substring(0,num.length-2);
            if(direccion==1) num-=1;
            else num-=-1;
            caja.style.top=num+"px";
        }
    }
}