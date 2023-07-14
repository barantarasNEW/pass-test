import LanguageBtn from '../LanguageBtn/LanguageBtn';
import Navbar from '../Navbar/Navbar';
import { HeaderBlock } from './Styles';

function Header() {
  return (
    <HeaderBlock>
      <Navbar />

      <LanguageBtn />
    </HeaderBlock>
  );
}
export default Header;