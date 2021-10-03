import styled from "styled-components";
import { colors, shadows, devices } from "../../styles/base";

export const PageHeader = styled.div`
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  box-shadow: ${shadows.shadow_light};
  background-color: #eee;
  color: ${colors.grey_dark2};

  & div:first-child {
    font-size: 1.2rem;
    color: #000;

    @media ${devices.mobileS} {
      font-size: 1rem;
    }
  }

  & span {
    color: ${colors.blue_primary};
  }
`;
