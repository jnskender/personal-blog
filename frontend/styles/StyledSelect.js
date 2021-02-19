import styled from "styled-components";

const StyledSelect = styled.select`
  background-color: white; /* Fallback color if gradients are not supported */
  background-image: url(assets/icons/chevron-down.svg); /* Standard syntax; must be last */
  background-position: center right;
  background-repeat: no-repeat;
  border: 1px solid #aaa;
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: black;
  font-size: inherit;
  font-weight: 250;
  overflow: hidden;
  padding: 4px 6px 4px 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 1em;
`;

export default StyledSelect;
