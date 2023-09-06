const userSchema = require('../model/userSchema');
const path = require('path');

let addUser = async (req,res) => {
    try {
        console.log(req.body);
        let addUser = new userSchema(req.body);
        addUser.save();
        res.sendFile(path.join(__dirname,'..','views','congo.html'));
    } catch (err) {
        res.send({
            success: false,
            message: err.message
        });
    }
}

module.exports = addUser
