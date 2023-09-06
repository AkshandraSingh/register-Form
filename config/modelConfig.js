let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/loginForm', {
    useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
    console.log("MongoDB is Connected 😁")
})

mongoose.connection.on('error', (err) => {
    console.log("Mongoose Connection Error: " + err)
})