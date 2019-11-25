function circulear(cuadrado){
    cuadrado.classList.add("circulo");
  }

  function desCirculear(cuadrado){
    cuadrado.classList.remove("circulo");
  }

  function sombra(cuadrado){
    cuadrado.classList.remove("sombra");
  }

  function sombra2(cuadrado){
    cuadrado.classList.add("sombra");
  }
  function sombra3(cuadrado){
    cuadrado.classList.remove("sombra");
    cuadrado.classList.add("sombra2");
    cuadrado.onmouseout= function() {return false};
  }

  function eliminar(boton){
    boton.style.display="none";
   boton.parentNode.classList.add("menguado");
/*  boton.parentNode.children[0].classList.add("menguado");*/
   setTimeout(function(){boton.parentNode.remove();}, 2000);
  }