module.exports = (app) => {
    const jugadores = require('../controllers/jugador.controller.js');

    // Create a new puntuaciones
    app.post('/jugadores', jugadores.create);

    // Retrieve all puntuaciones
    app.get('/jugadores', jugadores.findAll);

    app.put('/jugadores', jugadores.createJugador);

  /*  // Retrieve a single puntuaciones with puntuacionId
    app.get('/puntuaciones/:puntuacionId', puntuaciones.findOne);

    app.get('/puntuaciones/:fallaId/:ipId', puntuaciones.findIpFalla);

    app.get('/ip', puntuaciones.ip);

    // Update a puntuaciones with puntuacionId
    app.put('/puntuaciones/:puntuacionId', puntuaciones.update);

    // Delete a puntuaciones with puntuacionId*/
    app.get('/jugadores/delete', jugadores.delete);
}