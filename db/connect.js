const mongoose = require('mongoose');

const uri = "mongodb+srv://DeepakSingh:jmPokQUQKqP9TkqQ@cluster0.lpe9kln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
    console.log("Database");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectDB;
