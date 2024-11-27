import styled from "styled-components";

const StyledSidebar = styled.aside`
  padding: 4.8rem 6.4rem;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
`;
const Sidebar = () => {
  return <StyledSidebar>Side Bar</StyledSidebar>;
};

export default Sidebar;
