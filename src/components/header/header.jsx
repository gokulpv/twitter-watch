import React from "react";

import { useParams, useHistory } from "react-router";
import { Nav, NavItems, NavItem, NavLogo } from "./header.components";
import ProfileView from "./profile/profileView";
import TwitterLogo from "../../assets/icons/twitter-icon.svg";
import favourites from "../../config/favourites.config";

const Header = ({ navItemClicked }) => {
  const { handleName } = useParams();
  const history = useHistory();
  const isPathValid = favourites.find((item) => item.handleName === handleName);

  if (!isPathValid) {
    history.goBack();
  }

  const handleNavItemClicked = (toPath) => {
    // call 'navItemClicked' only when current path == to path
    if (toPath === handleName) {
      navItemClicked();
    }
  };

  return (
    <Nav data-testid="header-component">
      <NavLogo src={TwitterLogo} data-testid="header-logo" />
      <NavItems>
        {favourites.map((profile) => (
          <NavItem
            data-testid="header-navlink"
            key={profile.handleName}
            to={profile.handleName}
            activeClassName="active"
            onClick={handleNavItemClicked.bind(null, profile.handleName)}
          >
            <ProfileView profile={profile} />
          </NavItem>
        ))}
      </NavItems>
    </Nav>
  );
};

export default Header;
