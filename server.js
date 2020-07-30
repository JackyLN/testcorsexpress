const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 2345;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("This is a test API for checking CORS middleware with Express router")
})

const AdminRouter = require('./AdminRouter');
app.use('/admin', AdminRouter);

//App Start
app.listen(port, () => console.log(`API running on PORT ${port}!`))