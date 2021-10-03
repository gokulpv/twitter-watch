import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import App from "./App";
import { testStore } from "./utils/test";

describe("App component", () => {
  let component;
  // Mock a store with only one value
  const store = testStore({
    favourites: [
      {
        displayName: "Joe Biden",
        handleName: "POTUS",
      },
      {
        displayName: "Elon Musk",
        handleName: "elonmusk",
      },
    ],
    handleName1: [
      {
        created_at: "Tue Sep 28 20:29:31 +0000 2021",
        id: 1,
        id_str: "1",
        full_text: "This is a first",
      },
    ],
  });

  // Setup the component for test
  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("render without errors ", () => {
    expect(component.length).toBe(1);
  });
});
