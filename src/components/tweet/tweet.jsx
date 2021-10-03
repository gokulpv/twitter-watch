import React from "react";

import {
  Container,
  TweetHeader,
  TweetBody,
  TweetFooter,
  Stat,
} from "./tweet.components";
import Date from "./date/date";
import Media from "./media/media";
import Favouriteicon from "../../assets/icons/favourite-icon.svg";
import ReTweetIcon from "../../assets/icons/retweet-icon.svg";

const Tweet = ({ tweet }) => {
  const isMediaAvailable = tweet?.entities?.media?.length > 0;
  return (
    <Container data-testid="tweet-component">
      <TweetHeader>
        <Date data-testid="tweet-date" dateString={tweet.created_at} />
      </TweetHeader>
      <TweetBody data-testid="tweet-text">
        {tweet.full_text && <div> {tweet.full_text} </div>}
        {isMediaAvailable && <Media media={tweet.entities.media} />}
      </TweetBody>
      <TweetFooter>
        <Stat>
          <img alt="icon-for-post-stats" src={Favouriteicon}></img>
          <span>{tweet.favorite_count}</span>
        </Stat>
        <Stat>
          {" "}
          <img alt="icon-for-post-stats" src={ReTweetIcon}></img>
          <span>{tweet.retweet_count}</span>
        </Stat>
      </TweetFooter>
    </Container>
  );
};

export default React.memo(Tweet);
