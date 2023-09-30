const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://karan:karan@cluster0.gfuxd.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
