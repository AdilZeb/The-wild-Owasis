import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import { UserAvatar } from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
  padding: 4.8rem 6.4rem;
  display: flex;
  gap: 3.2rem;
  align-items: center;
  justify-content: flex-end;
`;
const Header = () => {
  return <StyledHeader>
    <UserAvatar />
   <HeaderMenu/>
    </StyledHeader>;
};

export default Header;
