export default class Cliente {
    constructor(nombreS = "", dniS = "", telefonoS) {
        this.nombre = nombreS;
        this.dniS = dniS;
        this.telefonoS = telefonoS;

    }
    toString() {
        return this.nombre + " " + this.dniS;
    }
}