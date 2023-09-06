const express = require('express')
const addUser = require('../controller/userController')
const path = require('path');

let router = express.Router()
let app = express()

router.post('/submit',addUser)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..",'views', 'login.html'));
});

module.exports = router
