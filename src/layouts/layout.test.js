import React from "react";
import Layout from "./Layout";
import { shallow } from "enzyme";
import { findByTestId } from "../utils/test";

describe("Date component", () => {
  let component;
  // Setup the component for test
  beforeEach(() => {
    component = shallow(<Layout />);
  });

  test("render without errors ", () => {
    expect(component.length).toBe(1);
  });

  it("find header inside the layout", () => {
    expect(findByTestId(component, "header").length).toBe(1);
  });

  it("find main inside the layout", () => {
    expect(findByTestId(component, "main").length).toBe(1);
  });
});
