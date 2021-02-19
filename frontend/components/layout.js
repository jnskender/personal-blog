import Nav from "./nav";
import SideNav from "./SideNav";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
  height: 100vh;
  width: 100vw;

  .body {
    display: grid;
    grid-template-columns: 1fr 5fr;
    overflow: hidden;
  }
`;

const Content = styled.div`
  overflow-y: scroll;
  padding: 50px;
  display: flex;
  place-content: center center;
`;
const Layout = ({ children, categories, seo }) => (
  <Wrapper>
    <Nav categories={categories} />
    <div className="body">
      <SideNav categories={categories} />
      <Content>{children}</Content>
    </div>
  </Wrapper>
);

export default Layout;
