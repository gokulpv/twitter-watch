import React from "react";
import { MediaContainer, MediaPlaceholder } from "./media.components";
import useIntersection from "../../../hooks/useIntersectionObserver";
import Loader from "../../loader/loader";

const Media = ({ media }) => {
  const ref = React.createRef();

  // Custom hook for observing intersection ( Direction : bottom to up  )
  const { isIntersecting } = useIntersection(ref, {
    rootMargin: "0px 0px -180px 0px",
    filterCondition: (entry) => entry.isIntersecting,
  });

  // Load image when image placeholders intersect the viewpot
  const src = isIntersecting ? media[0].media_url : "";

  return (
    <MediaPlaceholder ref={ref}>
      {src ? <MediaContainer alt="post-media" src={src} /> : <Loader />}
    </MediaPlaceholder>
  );
};

export default Media;
