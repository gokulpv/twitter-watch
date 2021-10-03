import { createStore } from "redux";
import rootReducer from "../pages/feeds/Feed.slice";

export const findByTestId = (component, id) => {
  const wrapper = component.find(`[data-testid='${id}']`);
  return wrapper;
};

export const testStore = (initialState) => {
  return createStore(rootReducer, initialState);
};
