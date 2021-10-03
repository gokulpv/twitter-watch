const BACKEND_BASE_URL = "http://localhost:3000";

export const get = async (pathname) => {
  const response = await fetch(`${BACKEND_BASE_URL}/${pathname}`);
  const data = await response.json();
  if (!response.ok) {
    // Can be made to throw specific error messages
    throw new Error("Some error occured.Please check the url");
  }
  return data;
};
