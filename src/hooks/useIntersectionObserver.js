import { useState, useEffect } from "react";

export const useIntersection = (ref, config) => {
  // register a state so that the component will rerender
  const [event, setIntersecting] = useState({
    isIntersecting: false,
    count: 0,
  });

  useEffect(() => {
    // create observer with config
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting({
            isIntersecting: true,
            count: event.count++,
          });
        }
      },
      //{ rootMargin: "0px 0px -100px 0px" }
      { rootMargin: config.rootMargin }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return event;
};

export default useIntersection;
