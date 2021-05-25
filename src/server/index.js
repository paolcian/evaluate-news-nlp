var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const application_key = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
console.log(`aplication key is ${process.env.API_KEY}`);
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('My app listening on port 8081!')
})

app.get('/test', function (req,res) {
    res.send(mockAPIResponse)
});

app.post('/val', async(req, res)=> {
    console.log(req.body);
    const url = req.body.address;
    const lang = "en";

    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${application_key}&url=${url}&lang=${lang}`)
  try {
      const data = await response.json();
      res.send(data);
  }
  catch(error) {console.log('error', error);}
});