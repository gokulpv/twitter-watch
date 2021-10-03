import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  let component;

  // Setup the component for test
  beforeEach(() => {
    component = shallow(<App />);
  });

  test("<App> renders without issues ", () => {
    expect(component.exists()).toBe(true);
  });
});
