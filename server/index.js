const express = require("express");
const Twitter = require("twitter");
var cors = require("cors");
require("dotenv").config();

const client = new Twitter({
  consumer_key: "BuKKrNHWvP3qTkpj8eytyQ0mb",
  consumer_secret: "lePsFrQDxTSlnn0pjs59ShCpIJ2oFqo2pMe0dYfBOkC2orNxc3",
  access_token_key: "1443084453836775429-HCdNqgdY9gONULrADfbMVC01mUvIRU",
  access_token_secret: "rsscdeTnHgQA6V5mREKf0fenaU3ZS9QpUTHUTI5rTORTM",
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
