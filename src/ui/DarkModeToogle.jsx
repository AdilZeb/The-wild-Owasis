
import { useDarkMode } from '../context/DarkModeContext';
import ButtonIcon from './ButtonIcon'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'

const DarkModeToogle = () => {
    const {isDarkMode, toggleDarkMode} = useDarkMode();
    console.log(isDarkMode);
  return (
    <ButtonIcon onClick={toggleDarkMode} >
      { isDarkMode ? <HiOutlineSun></HiOutlineSun> : <HiOutlineMoon></HiOutlineMoon>}
    </ButtonIcon>
  )
}
export default DarkModeToogle