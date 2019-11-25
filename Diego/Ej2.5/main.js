window.onload=function(){
    document.getElementById("botonCuadrado").addEventListener("click", ()=>{
        document.getElementById("Solucion").innerText="La solución es: "+document.getElementById("cuadrado").value**2;
    })
    document.getElementById("half-button").addEventListener("click", ()=>{
        document.getElementById("Solucion").innerText="La solución es: "+document.getElementById("half-input").value/2;
    })
    document.getElementById("botonPorcentaje").addEventListener("click", ()=>{
        document.getElementById("Solucion").innerText="La solución es: "+document.getElementById("porcentaje1").value/100*document.getElementById("porcentaje2").value;
    })
    document.getElementById("botonArea").addEventListener("click", ()=>{
        document.getElementById("Solucion").innerText="La solución es: "+(document.getElementById("area").value**2)*Math.PI;
    })
}