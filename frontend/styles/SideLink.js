import styled from "styled-components";

const NavLink = styled.a`
  background-color: ${({ className }) =>
    className === "active" ? "var(--secondary)" : "var(--primary)"};
  padding: 1rem;
  font-size: 2rem;
  border-bottom: 1px solid #0000003d;
  :hover {
    background-color: var(--secondary);
    cursor: pointer;
  }
`;

export default NavLink;
