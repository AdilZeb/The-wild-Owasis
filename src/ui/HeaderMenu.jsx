import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiUserCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { Logout } from "../features/authentication/Logout";
import DarkModeToogle from "./DarkModeToogle";

const StyledHeaderMenu = styled.ul`
display: flex;
gap:0.4rem;
`;
export default function HeaderMenu() {
    const navigate = useNavigate();
    return <StyledHeaderMenu>
        <li>
            <ButtonIcon onClick={() =>navigate('/account')}>
                <HiUserCircle/>
            </ButtonIcon>
        </li>
            <DarkModeToogle/>
            <Logout/>
    </StyledHeaderMenu>
}