const express = require('express')
const router = express.Router()


router.post('/test', async(req, res) => {
  res.status(200).send(req.body);
})

router.post('/login', async(req, res) => {
  res.status(200).send("login successful");
})

module.exports = router;