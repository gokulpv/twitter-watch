const express = require("express");
const Twitter = require("twitter");
var cors = require("cors");
require("dotenv").config();

const client = new Twitter({
  consumer_key: "OunkzQLUzkvDjNjIBOg9UYvhx",
  consumer_secret: "X1OTApWfhe4Ht9XM9Q3YHwGCgoVdb3xSwzkNmiy8XUeBs2rY6y",
  access_token_key: "1443084453836775429-YUEVeXF20kphD0tQ4vcad2LfSYT6Xs",
  access_token_secret: "KEg1NA9sNbtEhQxVzfg96LMscOcDNiygMNLJWWuCsxrXS",
});

const defaults = {
  screen_name: "realDonaldTrump",
  tweet_mode: "extended",
  count: 20,
};

const app = express();
app.use(cors());

app.route("/:handle").get(function (req, res) {
  const params = {
    ...defaults,
    max_id: req.query.max_id,
    screen_name: req.params.handle,
  };
  client.get(
    "statuses/user_timeline",
    params,
    function (error, tweets, response) {
      if (!error) {
        res.json(tweets);
      } else {
        console.error(error);
      }
    }
  );
});

app.listen(3000, function (error) {
  console.log("POTUS listening on port 3000");
});
