import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  border-bottom: 1px solid var(--color-grey-100);
  padding: 4.8rem 6.4rem;
`;
const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;
