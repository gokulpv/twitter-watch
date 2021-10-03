import * as React from "react";
import { shallow } from "enzyme";
import Feed from "./Feed";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Feed/> component", () => {
  const setState = jest.fn();

  const useStateMock = (initState) => [{}, setState];

  let component;
  beforeEach(() => {
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    component = shallow(
      <Router>
        <Feed />
      </Router>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render without issues", () => {
    expect(component.exists()).toBe(true);
  });

  it("should recieve tweets in state", () => {
    setState({
      POTUS: [
        {
          created_at: "Tue Sep 28 20:29:31 +0000 2021",
          id: 1,
          id_str: "1",
          full_text: "This is a first",
        },
      ],
    });

    expect(setState).toHaveBeenCalledTimes(1);
  });
});
