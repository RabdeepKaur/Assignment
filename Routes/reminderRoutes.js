// this is the route folder we will be creating usinfg express
const express = require('express');
const router = express.Router();
const ReminderController = require('../models/Reminder');

// createing a post request to send user enter data to the database

// we will use async methord to prevent blocking  of the loop when the user send too many request
router.post('/reminders', async (req, res) => {
    //here we are suing try catch block to validate impurt and handel any errors
    try{
        const { date, time, message, reminderType } = req.body;
        
        // validation to esure all field are working and not empty
        //here we can use ZOD also for  more secure validation
        if (!date || !time || !message || !reminderType) {
      return res.status(400).json({ error: 'All fields are required' });
    }

        const newReminder = new ReminderController({
            date,
            time,
            message,
            reminderType
        });
        await newReminder.save();
        res.status(201).json({ message: 'Reminder created successfully', reminder: newReminder });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating reminder', error: error.message });
    }
},
router.get('/ping', (req, res) => {
  res.send('pong');
})
);

module.exports=router;