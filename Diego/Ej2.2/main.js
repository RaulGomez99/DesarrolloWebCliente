function getFormValue(e){
    var url = window.location.search;
    var datos = url.split("&");
    var nombre = datos[0].split("=")[1];
    //nombre = nombre.substring(1);
    var apellido = datos[1].split("=")[1];
    alert(nombre+" "+apellido);
}