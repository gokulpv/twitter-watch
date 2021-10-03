import React from "react";
import Date from "./Date";
import { shallow } from "enzyme";
import { findByTestId } from "../../../utils/test";

describe("Date component", () => {
  let component;
  // Setup the component for test
  beforeEach(() => {
    const expectedProps = { dateString: "Tue Sep 28 20:29:31 +0000 2021" };
    component = shallow(<Date {...expectedProps} />);
  });

  it("should render Date component", () => {
    expect(component).toMatchSnapshot();
  });

  it("identify a date string inside", () => {
    expect(findByTestId(component, "date-string").text()).not.toBe("");
  });
});
