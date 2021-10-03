import React from "react";
import { Container, Main } from "./layout.components";
import Header from "../components/header/header";

const MainLayout = ({ children }) => {
  const mainRef = React.createRef();
  // Scroll up Main div when user clicks on navigation items

  const handlescrollToTop = React.useCallback(() => {
    mainRef?.current.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header navItemClicked={handlescrollToTop} data-testid="header" />
      <Main ref={mainRef} className="bottom" data-testid="main">
        {children}
      </Main>
    </Container>
  );
};

export default MainLayout;
