window.onload=function(){
    document.getElementById("formulario").addEventListener("submit", function(e){
        try{
            var fila = document.getElementById("fila").value;
            var columna = document.getElementById("columna").value;
            var palabra = document.getElementById("palabra").value;
            document.getElementById("tablita").children[0].children[fila].children[columna].innerText=palabra
        }catch{
            console.log("No existe dicha celda");
        }finally{
            e.preventDefault();
        }
       
        
    })
}