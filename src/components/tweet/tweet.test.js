import React from "react";
import Tweet from "./Tweet";
import { shallow } from "enzyme";
import { findByTestId } from "../../utils/test";
import Date from "./date/Date";
import Media from "./media/media";

const mockProps = {
  created_at: "Tue Sep 28 20:29:31 +0000 2021",
  id_str: "1442949613971935233",
  full_text: "This is a test",

  entities: {
    hashtags: [],
    symbols: [],
    user_mentions: [],
    urls: [],
    media: [
      {
        media_url: "4487257089/img/csZRMkgU7c6nRv33.jpg",
      },
    ],
  },
};

describe("Tweet component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Tweet tweet={mockProps} />);
  });

  // Test for render without any errors
  it("should render Tweet component", () => {
    expect(component).toMatchSnapshot();
  });

  it("find the text content to be the same as mocked", () => {
    expect(findByTestId(component, "tweet-text").text()).toMatch(
      /This is a test/
    );
  });
  it("renders a <Date /> components", () => {
    expect(component.find(Date).length).toBe(1);
  });
  it("renders a <Media /> component as per the given prop", () => {
    expect(component.find(Media).length).toBe(1);
  });
});
