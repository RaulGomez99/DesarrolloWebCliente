const Equipo = require('../models/jugador.model.js');

// Crear y salvar
exports.create = (req,res)=>{
    // Validamos el Puntuacion
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Puntuacion Vacio..." 
        });
    }

    const equipo = new Equipo({
        nombre: req.body.nombreEquipo || "Sin identificar",
        jugadores:[]
       
    })
    //console.log(req)
    equipo.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating Puntuacion"
        });
    });
};

exports.createJugador = (req,res)=>{
    // Validamos el Puntuacion
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Puntuacion Vacio..." 
        });
    }
    Equipo.findOne({nombre:req.body.nombreEquipo})
        .then(equipo=>{
            let jugador = {
                id:Math.floor(Math.random() * ((99999999999999999+1)-1000)+1000),
                nombre: req.body.nombreJugador
            }
            equipo.jugadores.push(jugador);
            Equipo.findByIdAndUpdate(equipo._id,equipo,{new:true}).then(equip => {
                res.send(equip);
            }).catch(err => {
                res.status(500).send({
                    message: err.message|| "Something was wrong creating Puntuacion"
                });
            })
        
    });
};

exports.deleteJugador = (req,res)=>{
    // Validamos el Puntuacion
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Puntuacion Vacio..." 
        });
    }
    Equipo.findOne({nombre:req.body.nombreEquipo})
        .then(equipo=>{
            console.log(equipo)
            for (let i = 0; i < equipo.jugadores.length; i++) {
                const jugador = equipo.jugadores[i];
                if(jugador.id==req.body.id){
                    equipo.jugadores.splice(i,1);
                    console.log("a")
                }
            }
            Equipo.findByIdAndUpdate(equipo._id,equipo,{new:true}).then(equip => {
                res.send(equip);
            }).catch(err => {
                res.status(500).send({
                    message: err.message|| "Something was wrong creating Puntuacion"
                });
            })
        
    });
};



// Obtener todos los puntuaciones
exports.findAll = (req,res) => {

        Equipo.find().then(equipos=>{
            res.send(equipos);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};

exports.delete = (req,res) => {
    Equipo.remove().then(()=>{
        res.send("Arriba España")
    })
}