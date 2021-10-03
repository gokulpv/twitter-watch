import styled from "styled-components";
import { shadows, devices, colors } from "../styles/base";

export const Container = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: calc(100vh);
  box-shadow: ${shadows.shadow_light};

  @media ${devices.laptop} {
    margin: 2rem 5rem;
  }

  @media ${devices.tablet} {
    margin: 0rem 3rem;
  }

  @media ${devices.laptop} {
    margin: 2rem 5rem;
    max-height: calc(100vh - 4rem);
  }
`;

export const Main = styled.main`
  flex: 1 0;
  background-color: #fff;
  overflow-y: scroll;
  scroll-behavior: smooth;
  min-width: 280px;

  /* width */
  &::-webkit-scrollbar {
    width: 0.5rem;

    @media ${devices.mobileVS} {
      display: none;
    }
    @media ${devices.mobileS} {
      display: none;
    }
    @media ${devices.mobile} {
      display: none;
    }
    @media ${devices.tablet} {
      display: none;
    }
    @media ${devices.tablet} {
      display: block;
    }
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${colors.grey_light1};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${colors.grey_dark2};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.blue_primary};
  }
`;
