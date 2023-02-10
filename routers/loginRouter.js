// External import
const express = require('express');

// Internal import
const { getLogin } = require('../controllers/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router();

// Login page
router.get('/', decorateHtmlResponse('Login'),getLogin);

module.exports = router;