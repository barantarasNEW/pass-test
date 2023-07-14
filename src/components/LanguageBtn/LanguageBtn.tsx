import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import {IconButton} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageBtn = () => {
  const {i18n} = useTranslation();

  const onClick = () => {
    return changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  return (
    <IconButton onClick={onClick}>
      <LanguageIcon />
    </IconButton>
  );
};

export default LanguageBtn;