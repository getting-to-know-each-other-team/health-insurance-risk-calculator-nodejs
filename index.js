const express = require('express')
app = express()
const http = require('http')

const cors = require("cors")
app.use(cors({origin: '*'}))

var url = require('url')
var dt = require('./date-time')

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 3

//Ping API functionality. Added a response message incase we want to showcase on the website that the Ping API Pogue wanted is working.
app.get('/ping', (req, res) => {
    console.log('Received a ping from the client');
    res.status(200).json({ message: 'Server is awake!' });
  });

// creates a variable to hold the points for the health insurance
let healthPoints;

function calculateBloodPressure(systolic, diastolic) {
    if (systolic < 120 && diastolic) {
        healthPoints += 0
    } else if ((systolic >= 120 && systolic<= 129) && (diastolic < 80)) {
        healthPoints += 15
    } else if ((systolic >= 130 && systolic <= 139) || (diastolic <= 80 && diastolic >= 89)) {
        healthPoints += 30
    } else if ((systolic >= 140) || (diastolic >= 90)) {
        healthPoints += 75
    } else if (systolic >= 180 || diastolic >= 120) {
        healthPoints += 100
    }
}

/* This method when called from the static sight should take in the height and weight in 
pounds and inches respetively. This method should then convert the values to the metric system 
and then calculate the BMI for the individual and return that value back to the static site.
*/
app.get("/calculate-bmi", (request, response) => {

})

/* This method should be called when clicking on the button ot calculate the health insurance risk
of the user and should be passed all of the values that the user choose as well as the BMI points
and then adds them all together and sends the data back to the static site in JSON format
*/
app.get("/calculate-health-insurnace-risk", (request, response) => {

})

// custom 404 page
app.use((request, response) => {
    response.type('text/plain')
    response.status(404)
    response.send('404 - Not Found')
})

// custom 500 page
app.use((err, request, response, next) => {
    console.error(err.message)
    response.type('text/plain')
    response.status(500)
    response.send('500 - Server Error')
})

app.listen(port, () => {
    console.log(`Express Started at "http://localhost:${port}"\n` +
                `Press Ctrl-C to terminate session.`);
});