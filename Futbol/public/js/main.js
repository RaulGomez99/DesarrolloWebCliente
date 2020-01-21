window.onload = init;
var equipos;

function init(){
    document.getElementById("addEquipo").addEventListener("click", addEquipo);
    document.getElementById("addJugador").addEventListener("click", addJugador);

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
            cargaEquipo(respuesta);
            
        });
}

function addJugador(){
    let nombreEquipo = {nombreJugador:document.getElementById("jugador").value, nombreEquipo:"Banquillo"};
    const fetchBusc = fetch("/jugadores",{
        method: 'PUT', 
        body: JSON.stringify(nombreEquipo), 
        headers:{
            'Content-Type': 'application/json'
        }
    });
    fetchBusc.then(res => {
        return res.json();
    }).then(respuesta => {
        let jugadorDiv = document.createElement("div");
        jugadorDiv.classList.add("jugador");
        jugadorDiv.draggable=true;
        jugadorDiv.innerText=respuesta.jugadores[respuesta.jugadores.length-1].nombre;
        jugadorDiv.id=respuesta.jugadores[respuesta.jugadores.length-1].id;
        jugadorDiv.addEventListener("dragstart", dragEvento);
        document.getElementById(respuesta._id).appendChild(jugadorDiv);
        
    });
}

function cargaEquipo(equipo){
    let equipoDiv = document.createElement("div");
    equipoDiv.classList.add("equipo");
    equipoDiv.id=equipo._id;
    let nombreEquipoDiv = document.createElement("div");
    nombreEquipoDiv.classList.add("nombreEquipo");
    nombreEquipoDiv.innerText=equipo.nombre;
    equipoDiv.appendChild(nombreEquipoDiv);
    equipo.jugadores.forEach(jugador=>{
        let jugadorDiv = document.createElement("div");
        jugadorDiv.classList.add("jugador");
        jugadorDiv.draggable=true;
        jugadorDiv.innerText=jugador.nombre;
        jugadorDiv.addEventListener("dragstart", dragEvento);
        jugadorDiv.id=jugador.id;
        equipoDiv.appendChild(jugadorDiv);
    })
    equipoDiv.addEventListener("dragover",allowDrop);
    equipoDiv.addEventListener("drop",dropEvento);
    document.querySelector("content").appendChild(equipoDiv)
}

function dragEvento(ev){
    console.log("Dragueando")
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function dropEvento(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    let equipoPadre = document.getElementById(data).parentNode.firstElementChild.innerText;
   // console.log(ev);
    ev.target.appendChild(document.getElementById(data));

    let nombreEquipo = {
        nombreJugador:document.getElementById(data).innerText,
        id:data,
        nombreEquipo:equipoPadre
    };
    const fetchBusc = fetch("/jugadores/delete",{
        method: 'PUT', 
        body: JSON.stringify(nombreEquipo), 
        headers:{
            'Content-Type': 'application/json'
        }
    });
    fetchBusc.then(res => {
        return res.json();
    }).then(respuesta=> {
        console.log(respuesta);
       let nombreEquipo = {nombreJugador:document.getElementById(data).innerText, nombreEquipo:ev.target.firstElementChild.innerText};
       console.log(nombreEquipo)
        const fetchBusc2 = fetch("/jugadores",{
            method: 'PUT', 
            body: JSON.stringify(nombreEquipo), 
            headers:{
                'Content-Type': 'application/json'
            }
        });
        fetchBusc2.then(res => {
            return res.json();
        }).then(resp => {console.log(resp)});
    })
}