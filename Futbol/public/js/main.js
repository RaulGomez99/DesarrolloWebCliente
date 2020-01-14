window.onload = init;
var equipos;

function init(){
    document.getElementById("addEquipo").addEventListener("click", addEquipo);
    document.getElementById("addJugador").addEventListener("click", addJugador);
    let content = document.querySelector("content");
    fetch("/jugadores").then(res => {return res.json();}).then(respuesta => {
        equipos = respuesta;
        equipos.forEach(equipo => {
            cargaEquipo(equipo);
        });
    });
}

function addEquipo(){
    let nombreEquipo = {nombreEquipo:document.getElementById("equipo").value};
    const fetchBusc = fetch("/jugadores",{
        method: 'POST', 
        body: JSON.stringify(nombreEquipo), 
        headers:{
            'Content-Type': 'application/json'
        }
    });
    fetchBusc
        .then(res => {
            return res.json();
        })
        .then(respuesta => {
            console.log(respuesta)
            
        });
}

function addJugador(){
    let nombreEquipo = {nombreJugador:document.getElementById("jugador").value};
    const fetchBusc = fetch("/jugadores",{
        method: 'PUT', 
        body: JSON.stringify(nombreEquipo), 
        headers:{
            'Content-Type': 'application/json'
        }
    });
    fetchBusc
        .then(res => {
            return res.json();
        })
        .then(respuesta => {
            document.getElementById(respuesta._id).innerHTML+="<div class='jugador'>"
                                        +respuesta.jugadores[respuesta.jugadores.length-1]+"</div>"
            
        });
}

function cargaEquipo(equipo){
    let text = "<div class='equipo' id="+equipo._id+">"+equipo.nombre;
    equipo.jugadores.forEach(jugador=>{
        text+="<div class='jugador'>"+jugador+"</div>";
    })
    text+="</div>";
    document.querySelector("content").innerHTML+=text;
}