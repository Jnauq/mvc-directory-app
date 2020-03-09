const express = require('express');
const artistController = require('../controllers/artistController');
const loginController = require('../controllers/loginController');
const router = express.Router();

router.get('/artists', artistController.getAll);

router.get('/artists/search', artistController.search);

router.post('/artists/add', artistController.add);

router.post('/artists/remove', artistController.remove);

router.post('/login', loginController.login);

router.post('/logout', loginController.logout);

module.exports = router;