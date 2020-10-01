/* Requirements */
var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");

/* GET home page. */
router.get('/', function(req, res, next) {
    return res.render('pages/home');
});

/* POST text to API for analytics */
router.post('/api', async (req,res,next) => {
  try {
    //TODO: Fetch request
    /*
    let request = await fetch("www", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "auth key"
      },
      body: req.body,
    });
    //TODO await response from api and return its json to client
    let response = await request.json();
    */
    //DUMMY
    let response = { data: [{content: 1}, {content: 2}, {content: 3}]};
    return res.render('pages/home', response);
  }
  //handle eventual errors
  catch (error) {
    return res.status(500).json({
      error: "Internal server error",
      message: error.message
    });
  }
});

/* Make routes accessible elsewhere */
module.exports = router;
