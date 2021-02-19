import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import StyledSelect from "../styles/StyledSelect";
import { getStrapiMedia } from "../lib/media";
import { PalletteContext } from "../context/pallette-context";
import Sliders from "../assets/icons/sliders.svg";
import Avatar from "./Avatar";
import GitHubIcon from "../assets/icons/github.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import TwitterIcon from "../assets/icons/twitter.svg";

const StyledNav = styled.nav`
  background-color: var(--primary);
  border-bottom: 5px solid var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-primary, white);
  a {
    margin: 0 5px 0 5px;
  }
  .nav-right {
    display: flex;
    align-items: center;
  }
  .nav-left {
    display: flex;
    align-items: center;
    .logo {
      margin-left: 1em;
      margin-right: 1em;
      a {
        display: flex;
        align-items: center;
      }
      .name {
        margin-left: 5px;
      }
    }
  }
  .nav-pickers {
    display: flex;
    align-items: center;
  }
  .links {
    display: flex;
  }
  .avatar {
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

const Nav = ({ categories }) => {
  const { pallette, setPallette } = useContext(PalletteContext);
  return (
    <StyledNav>
      <div className="nav-left">
        <div className="logo">
          <Link href="/">
            <a>
              <Avatar />
              <h1 className="name">John Skender</h1>
            </a>
          </Link>
        </div>
        <div className="description">Software Engineer</div>
      </div>
      <div className="nav-right">
        <div className="nav-pickers">
          <Sliders />
          <StyledSelect
            value={pallette}
            onChange={(e) => setPallette(e.target.value)}
          >
            <option label="PDI Green [Default]" value="green"></option>
            <option label="Dark Blue" value="blue"></option>
            <option label="Sunset" value="sunset"></option>
            <option label="Fresh" value="fresh"></option>
          </StyledSelect>

          <StyledSelect>
            <option label="Default [Global]" value="green"></option>
            {categories.map((category) => {
              return <option key={category.id}>{category.name}</option>;
            })}
          </StyledSelect>
        </div>
        <div class="social-links">
          <a
            className="social-link"
            href="https://www.github.com/jnskender"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            className="social-link"
            href="https://twitter.com/SkenderJohn"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com/johnskender/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/jnskender/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </StyledNav>
  );
};

export default Nav;
