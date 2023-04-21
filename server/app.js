const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
var cors = require('cors')
const mongodb = require('mongodb');

const app = express();
app.use(bodyParser.json());
app.use(cors())

// Function to generate a schedule for a user based on their classes, activities, commute, sleepHours, studyHours, and wakeWindHours
function generateSchedule(classes, activities, commute, sleepHours, studyHours, wakeWindHours) {
    // Calculate the start and end times for the schedule
    const startTime = new Date();
    startTime.setHours(wakeWindHours);
    startTime.setMinutes(0);
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);

    const endTime = new Date();
    endTime.setHours(wakeWindHours + sleepHours + studyHours);
    endTime.setMinutes(0);
    endTime.setSeconds(0);
    endTime.setMilliseconds(0);

    // Shuffle the activities array
    for (let i = activities.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [activities[i], activities[j]] = [activities[j], activities[i]];
    }

    // Select the first two activities from the shuffled array
    const selectedActivities = activities.slice(0, 2);

    // Create an array to hold the appointments
    const appointments = [];

    // Add the classes to the schedule
    for (const course of classes) {
        const startDate = new Date(course.startTime);
        const endDate = new Date(course.endTime);
        appointments.push({
            title: `${course.subject} ${course.courseNumber} (${course.section})`,
            startDate,
            endDate,
            id: appointments.length,
            location: course.location
        });
    }

    // Add the selected activities to the schedule
    for (const activity of selectedActivities) {
        const startDate = new Date(activity.startTime);
        const endDate = new Date(activity.endTime);
        appointments.push({
            title: activity.title,
            startDate,
            endDate,
            id: appointments.length,
            location: activity.location
        });
    }

    // Add the commute to the schedule
    const commuteStartDate = new Date(startTime.getTime() + (commute.start * 60 * 1000));
    const commuteEndDate = new Date(startTime.getTime() + (commute.end * 60 * 1000));
    appointments.push({
        title: 'Commute',
        startDate: commuteStartDate,
        endDate: commuteEndDate,
        id: appointments.length,
        location: 'Home'
    });

    // Sort the appointments by start time
    appointments.sort((a, b) => a.startDate - b.startDate);

    return appointments;
}



// Create a MongoDB client and connect to the database
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/SOEN357';
MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    console.log('Connected to MongoDB database');

    // Get the Users collection
    const db = client.db('SOEN357');
    const usersCollection = db.collection('Users');

    // Handle signup requests
    app.post('/signup', async (req, res) => {
        const { email, firstName, lastName, password } = req.body;
        console.log(email)
        // Check if a user with this email already exists
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }

        // Create a new user document with default values for classes and activities
        const newUser = {
            email,
            firstName,
            lastName,
            password,
            classes: [],
            activities: []
        };

        // Insert the new user document into the database
        const result = await usersCollection.insertOne(newUser);

        // Return the newly created user data
        res.status(201).json({ message: 'User created', user: newUser });
        console.log("yaayyyy")
    });


    // Handle login requests
    app.post('/login', async (req, res) => {
        const { email, password } = req.body;

        // Find the user by email
        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Check if the password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Return the user's data
        res.status(200).json(user);
    });

    // Handle adding activities to the weekly schedule
    app.post('/schedule', async (req, res) => {
        const { email, classes, activities, commute, sleepHours, studyHours, wakeWindHours } = req.body;

        // Update the classes and activities fields for the user with the given email
        const result = await usersCollection.updateOne(
            { email },
            {
                $set: {
                    classes,
                    activities,
                    commute,
                    sleepHours,
                    studyHours,
                    wakeWindHours
                }
            }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'Schedule updated' });
    });



    // Handle updating additional user information
    app.put('/user', async (req, res) => {
        const { email, commuteTime, sleepTime, studyTime, windDownTime } = req.body;

        // Find the user by email
        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update the user document with the new information
        const updateObj = {};
        if (commuteTime !== undefined) updateObj.commuteTime = commuteTime;
        if (sleepTime !== undefined) updateObj.sleepTime = sleepTime;
        if (studyTime !== undefined) updateObj.studyTime = studyTime;
        if (windDownTime !== undefined) updateObj.windDownTime = windDownTime;
        const result = await usersCollection.updateOne({ email }, { $set: updateObj });

        // Return the updated user data
        const updatedUser = await usersCollection.findOne({ email });
        res.status(200).json({ message: 'User information updated', user: updatedUser });
    });

});

// Handle generating a schedule for a user
app.get('/generate_schedule', async (req, res) => {
    const { email } = req.query;

    // Find the user by email
    const user = await usersCollection.findOne({ email });
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Generate the schedule for the user
    const schedule = generateSchedule(user.classes, user.activities, user.commute, user.sleepHours, user.studyHours, user.wakeWindHours);

    res.status(200).json(schedule);
});

app.listen(8000, function () {
    console.log('Example app listening on port ' + 8000 + '!');
});