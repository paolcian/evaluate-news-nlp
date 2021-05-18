var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

//Here we are configuring express to use body-parser as middle-ware.


// Cors for cross origin allowance
const cors = require('cors');


const application_key = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.post('/add', (req, res) => {
    const url = req.body.url;
    const lang = "en";

    const response = fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${application-key}&url=${url}&lang=${lang}`, {method: 'POST'})
  .then(response => response.json())
  .then(response => res.send(response))
  .catch(error => console.log('error', error));
})