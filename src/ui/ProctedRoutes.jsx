import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { is } from "date-fns/locale";
const StyledFull= styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;


const ProctedRoutes = ({children}) => {
  const navigate= useNavigate();
  const {isLoading, isAuthenticated} = useUser();

 useEffect(function(){
  if(!isLoading && !isAuthenticated) navigate('/login');
 },[isLoading, isAuthenticated, navigate])

  if(isLoading) return <StyledFull><Spinner/></StyledFull>

  if(isAuthenticated)return children
  
}

export default ProctedRoutes