// External import
const express = require('express');

// Internal import
const { getUsers } = require('../controllers/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router();

// Users page
router.get('/', decorateHtmlResponse('Users'),getUsers);

module.exports = router;