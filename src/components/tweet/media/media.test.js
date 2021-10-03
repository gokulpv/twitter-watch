import React from "react";
import { shallow } from "enzyme";
import Media from "./Media";

it("should render Media component", () => {
  expect(shallow(<Media />)).toMatchSnapshot();
});
