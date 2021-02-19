import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  --primary: ${({ theme }) => theme.colors.primary || "#293e40"};
  --secondary: ${({ theme }) => theme.colors.secondary || "#5a7f71"};
  --text-primary:  ${({ theme }) => theme.colors.text || "#5a7f71"};
  --link-primary:  ${({ theme }) => theme.colors.link.text || "#FFFFFF"};
  font-size: 10px;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li{
  padding: 0;
  margin: 0;
}

body {
  font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  overflow: hidden;
  font-size: 1.5rem;
}

a {
  text-decoration: none;
  color: var(--link-primary);
}

p>a,li>a{
  color: var(--secondary);
  border-bottom: 2px solid var(--primary);
}

ul {
  list-style: none;
}

img{
  margin: 10px 0 10px 0;
  max-width: 100%;
}

p {
  font-size: 1.8rem;
  line-height: 2;
  line-height: 1.77778;
  font-weight: 400;
  margin-bottom: 2rem;
}

`;

export default GlobalStyle;
