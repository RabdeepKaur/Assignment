// WE will be using MVC architecture for this project
// this is  the model for the Reminder app 
// here we create the logic for the schema of the app 

// for the database I am using mongoose and mongodb

const mongoose= require('mongoose'); //importing mongoose 
const Schema= mongoose.Schema; //importing schema from mongoose

//for this schema the usser has to input as date, time message and the what kind of reminder they want 

const reminderSchema= new Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    reminderType: {
        type: String,
        enum: ['email', 'sms'],
        required: true
    },
    createAt:{ // create in case to check what sqeucence the message is create at 
        type: Date,
        default: Date.now
    }
});

module.export = mongoose.model('Reminder', reminderSchema); 