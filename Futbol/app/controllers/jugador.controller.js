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
    Equipo.findOne({nombre:"Banquillo"})
        .then(equipo=>{
            equipo.jugadores.push(req.body.nombreJugador);
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
/*
// Obtener un puntuacion por Id
exports.findOne = (req,res) => {
    Puntuacion.findById(req.params.puntuacionId)
    .then(puntuacion=>{
        if (!puntuacion){
            return res.status(404).send({
                message: "Puntuacion NOT FOUND con ID " +req.params.puntuacionId
            });
            }
            res.send(puntuacion);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "Puntuacion no encontrado con ese id :" +req.params.puntuacionId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.puntuacionId
             });
        });
    };

    exports.ip = (req, res)=>{
        const ip = req.connection.remoteAddress;
        console.log("Se ha conectado cliente con IP "+ip);
        res.send({"ip":ip});
    }

    exports.findIpFalla = (req,res) => {
        Puntuacion.findOne({"idFalla":req.params.fallaId,"ip":req.params.ipId})
        .then(puntuacion=>{
            if (!puntuacion){
                res.send({"puntuacion":-1});
            }
                //Puntuacion.findById(puntuacion.id).then(punt=>res.send(punt));
            else res.send(puntuacion);
            }).catch(err=>{
                if(err.kind === 'ObjectId'){
                    return res.status(404).send({
                        message: "Puntuacion no encontrado con ese id :" +req.params.ipId
                    });
                }
                 return res.status(500).send({
                    message: "Tenemos NOSOTROS problemas con ese id :" +req.params.ipId
                 });
            });
        };




// Actualizar un puntuacion
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Puntuacion vacio"
        });
    }

    // Find note and update it with the request body
    Puntuacion.findByIdAndUpdate(req.params.puntuacionId, {
        idFalla: req.body.idFalla || "idFalla",
        ip: req.body.ip || "127.0.0.1",
        puntuacion: req.body.puntuacion|| -1
    }, {new: true})
    .then(puntuacion => {
        if(!puntuacion) {
            return res.status(404).send({
                message: "Puntuacion not found with id " + req.params.puntuacionId
            });
        }
        res.send(puntuacion);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Puntuacion not found with id " + req.params.puntuacionId
            });                
        }
        return res.status(500).send({
            message: "Error updating Puntuacion with id " + req.params.puntuacionId
        });
    });
};

// Borrar un puntuacion 
exports.delete = (req,res)=>{
    Puntuacion.findByIdAndRemove(req.params.puntuacionId)
    .then(puntuacion => {
        if(!puntuacion) {
            return res.status(404).send({
                message: "Puntuacion no encontrado " + req.params.puntuacionId
            });
        }
        res.send({message: "Cthulhu ha vencido !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Puntuacion not found with id " + req.params.puntuacionId
            });                
        }
        return res.status(500).send({
            message: "No podemos matar a ese Puntuacion with id " + req.params.puntuacionId
        });
    });
};*/