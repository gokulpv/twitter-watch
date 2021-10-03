import { mount } from "enzyme";
import Header from "./header";
import { BrowserRouter as Router } from "react-router-dom";
import { findByTestId } from "../../utils/test";

describe("<Header/> component", () => {
  let component;
  beforeEach(() => {
    const moockProps = {
      navItemClicked: jest.fn(),
    };
    component = mount(
      <Router>
        <Header {...moockProps} />
      </Router>
    );
  });
  it("<Header/> render without issues", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render a logo", () => {
    expect(findByTestId(component, "header-logo").exists()).toBe(true);
  });
});
