export const findByTestId = (component, id) => {
  const wrapper = component.find(`[data-testid='${id}']`);
  return wrapper;
};
