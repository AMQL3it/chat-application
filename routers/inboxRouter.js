// External import
const express = require('express');

// Internal import
const { getInbox } = require('../controllers/inboxController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = express.Router();

// Inbox page
router.get('/', decorateHtmlResponse('Inbox'), getInbox);

module.exports = router;