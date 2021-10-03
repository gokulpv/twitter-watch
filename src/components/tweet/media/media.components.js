import styled from "styled-components";
import { colors, devices } from "../../../styles/base";

export const MediaContainer = styled.img`
  width: 100%;
  max-height: 100%;
  border-radius: 0.4rem;
  height: auto;

  animation: blur 0.4s ease-out;

  @keyframes blur {
    from {
      filter: blur(5px);
      -webkit-filter: blur(5px);
    }
    to {
      filter: blur(0px);
      -webkit-filter: blur(0px);
    }
  }

  @media ${devices.mobileS} {
    height: auto;
  }

  @media ${devices.mobile} {
    margin: 0;
  }
`;

export const MediaPlaceholder = styled.div`
  background-color: ${colors.grey_light1};
  display: flex;
  align-items: center;
  height: fit-content;
  border-radius: 0.4rem;
  overflow: hidden;
  border: 1px solid ${colors.grey_dark};

  @media ${devices.mobileVS} {
    margin: 1rem 0rem;
  }
  @media ${devices.mobileS} {
    margin: 1rem 0rem;
  }
  @media ${devices.mobile} {
    margin: 0;
    flex: 0 0 30%;
  }
  @media ${devices.tablet} {
    margin: 0;
    flex: 0 0 20%;
  }
`;
