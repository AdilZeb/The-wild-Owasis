
import ButtonIcon  from '../../ui/ButtonIcon'
import { HiArrowLeftOnRectangle } from 'react-icons/hi2'
import { useLogout } from './useLogout';
import SpinnerMini from '../../ui/SpinnerMini';

export const Logout = () => {
    const {logout, isLoading} = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
        {!isLoading  ?<HiArrowLeftOnRectangle/>: <SpinnerMini/>}
    </ButtonIcon>
  )
}
