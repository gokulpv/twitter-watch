const express = require("express");
const Twitter = require("twitter");
var cors = require("cors");

const client = new Twitter({
  consumer_key: "11OZMZAPBfxdcUkVEAYkEModR",
  consumer_secret: "6nliXToSdOrpXX5p7s7kNzJFv4v1J0CdjAlFFXo4YrHklxLzn7",
  access_token_key: "1443084453836775429-dpUruS72DHWdK2BYPCczMYdXBGPUoK",
  access_token_secret: "HNfussJ1q3qDn6p3l3wP5hw23FeSg0J94cF4Q1d70Dxxy",
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
