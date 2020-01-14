const mongoose= require('mongoose');

const EquiposSchema = mongoose.Schema({
    nombre:String,
    jugadores:JSON
},{
    timestamps:true
});
module.exports = mongoose.model('Equipo',EquiposSchema);