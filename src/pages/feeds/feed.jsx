import React from "react";
// components
import Tweet from "../../components/tweet/tweet";
import Loader from "../../components/loader/loader";
import { useIntersection } from "../../hooks/useIntersectionObserver";
import { PageHeader } from "./feed.components";
import { useParams } from "react-router-dom";

// actions
import { getTweets } from "./Feed.actions";

let lastId = {};

const Feed = () => {
  // get params from url.
  const { handleName } = useParams();
  const bottomElement = React.useRef();
  const [tweets, setTweets] = React.useState({});

  // Custom hook for observing intersection ( Direction : bottom  up  )
  const { count } = useIntersection(bottomElement, {
    rootMargin: "0px 0px -20px 0px",
  });

  // Make new requests upon the first render and and subsequently after intersection entry
  React.useEffect(() => {
    getTweets(handleName, lastId[handleName]).then((data) => {
      if (data) {
        // Check if the handleName key already exists in the state
        const isTweetsEmpty = !tweets[handleName];
        if (isTweetsEmpty) {
          setTweets({
            ...tweets,
            [handleName]: data,
          });
        } else {
          // Remove first element from every batch starting from second api call
          data.shift();
          setTweets({
            ...tweets,
            [handleName]: [...tweets[handleName], ...data],
          });
        }
        lastId[handleName] = data[data.length - 1]?.id_str;
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      {tweets && Object.keys(tweets).length > 0 && (
        <>
          <PageHeader data-testid="top-element">
            <div>Latest tweets </div>
            <div>
              Showing results for tweets <span>{`@${handleName}`}</span>
            </div>
          </PageHeader>{" "}
          {tweets[handleName]?.map((tweet, idx) => (
            <Tweet key={idx} tweet={tweet} data-testid="tweet" />
          ))}
        </>
      )}

      <div ref={bottomElement}>
        <Loader data-testid="loader" />
      </div>
    </>
  );
};

export default Feed;
