import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors, shadows, devices } from "../../styles/base";

export const Nav = styled.nav`
  background-color: #fff;
  box-shadow: 0 6px 3px -5px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: left;
  @media ${devices.mobileS} {
  }
`;

export const NavLogo = styled.img`
  border-right: 1px solid ${colors.grey_light};
  height: 5rem;
  width: 5rem;
  padding: 0.8rem;
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-left: 2rem;

  @media ${devices.mobileVS} {
    flex-direction: row;
  }
  @media ${devices.mobile} {
    flex-direction: row;
  }
`;

export const NavItem = styled(NavLink)`
  display: block;
  padding: 0;
  text-decoration: none;
  border-radius: 5px;
  flex-grow: 1;
  transition: 0.1s all ease-out;
  padding: 0.5rem;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0rem;
  }

  &.${(props) => props.activeClassName} {
    box-shadow: ${shadows.shadow_light};
    background-color: ${colors.blue_primary};

    & .toggleColors {
      color: #fff;
    }
  }
`;
