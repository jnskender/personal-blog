import React from "react";
import styled from "styled-components";
import ActiveLink from "./ActiveLink";
import SideLink from "../styles/SideLink";

const Wrapper = styled.nav`
  background-color: var(--primary);
  a {
    color: var(--text-primary, white);
  }
  .filter-nav {
    text-align: center;
    border-bottom: 1px solid;
    padding: 1rem;
    input {
      background-color: var(--primary);
      border-radius: 9999px;
      border: 1px solid #7a828a;
      color: white;
      padding: 0.7rem;
      width: 90%;
    }
    input:focus {
      outline: none;
      border: 1px solid lightgreen;
    }
  }
  .modules {
    display: flex;
    flex-direction: column;
  }
`;
export default function SideNav({ categories }) {
  return (
    <Wrapper>
      <div className="filter-nav">
        <input type="text" placeholder="Filter Navigator" />
      </div>

      <div className="modules">
        <ActiveLink href="/about" activeClassName="active">
          <SideLink>About Me</SideLink>
        </ActiveLink>

        <ActiveLink href="/" activeClassName="active">
          <SideLink>Articles</SideLink>
        </ActiveLink>

        <ActiveLink href="/projects" activeClassName="active">
          <SideLink>Projects</SideLink>
        </ActiveLink>

        <ActiveLink href="/projects" activeClassName="active">
          <SideLink>Contact</SideLink>
        </ActiveLink>

        {categories.map((category) => {
          return (
            <ActiveLink
              as={`/category/${category.slug}`}
              href="/category/[id]"
              activeClassName="active"
              hiddent="true"
            >
              <SideLink key={category.id}>{category.name}</SideLink>
            </ActiveLink>
          );
        })}
      </div>
    </Wrapper>
  );
}
