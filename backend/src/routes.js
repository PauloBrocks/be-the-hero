const express = require('express');

const IncidentController = require('./controller/IncidentController');
const OngConstroller = require('./controller/OngController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/ongs', OngConstroller.index);
routes.post('/ongs',OngConstroller.create);

routes.get('/profile', ProfileController.index);

module.exports = routes;