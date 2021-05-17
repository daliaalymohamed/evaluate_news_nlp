/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const port = 8080

// main routes
const apiRoutes = require('./routes')
/**
 * Create Express server.
 */
const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'))

console.log(__dirname)

// When every request is sent, those headers are in every response
app.use((req, res, next) => {
    // for allowing cross origin - to access all servers
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')
        return res.status(200).json({})
    }
    next();
})

// main routes found
app.use('/api', apiRoutes);

// routes not found
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error)
  })
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message // Not Found
        }
    })
  })
  
// designates what port the app will listen to for incoming requests
app.listen(port, (error) => {
    if (error) throw new Error(error)
    console.log(`Server is running on port ${port}!`)
})

module.exports = app;