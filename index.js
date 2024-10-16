const express = require('express')
app = express()

const cors = require("cors")
app.use(cors({origin: '*'}))

var url = require('url')
var dt = require('./date-time')

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 3

// creates a variable to hold the points for the health insurance
let healthPoints;

/* This method when called from the static sight should take in the height and weight in 
pounds and inches respetively. This method should then convert the values to the metric system 
and then calculate the BMI for the individual and return that value back to the static site.
*/
app.get("/calculate-bmi", (request, response) => {

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

app.listen(port, () => console.log(
    `Expressed Started at \"http:localhost:${port}\"\n`
    `press Ctrl-C to terminate session.`
))