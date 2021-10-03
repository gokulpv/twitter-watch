// globalStyles.js
import { createGlobalStyle } from "styled-components";

// Screen colors
export const colors = {
  blue_primary: "#0892D0",
  blue_secondary: "#82b1ff",
  grey_light: "#dfe6eb",
  grey_light1: "#eee",
  grey_dark: "#cfd8dc",
  grey_dark1: "lightgrey",
  grey_dark2: "grey",
  white: "#fff",
};

// Shadows
export const shadows = {
  shadow_light: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  shadow_dark:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
};

// Devices
const screenSize = {
  mobileVS: "360px",
  mobileS: "360px",
  mobile: "440px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};

// Media queries
export const devices = {
  mobileVS: `(max-width: ${screenSize.mobileS})`,
  mobileS: `(min-width: ${screenSize.mobileS})`,
  mobile: `(min-width: ${screenSize.mobile})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  desktop: `(min-width: ${screenSize.desktop})`,
};

const GlobalStyle = createGlobalStyle`

  // CSS reset
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box
  }

  // All dimesnsions are based on rem an em.
  // Adjusting root font for different screens improves responsiveness
  html {

    @media ${devices.mobileVS} {
      font-size: 10px;
    }
    @media ${devices.mobileS} {
      font-size: 12px;
    }
    @media ${devices.mobile} {
      font-size: 12px;
    }
    @media ${devices.tablet} {
      font-size: 14px;
    }
    @media ${devices.tablet} {
      font-size: 16px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.blue_primary};
    font-family: "Poppins", Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
