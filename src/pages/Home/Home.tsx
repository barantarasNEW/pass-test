import { useTranslation } from "react-i18next";
import {Typography} from '@mui/material';

import { HomeSection } from "./Styles";

const Home = () => {
  const {t} = useTranslation();

  return (
    <HomeSection>
      <Typography variant="h3" textAlign="center">
        {t('welcome')}
      </Typography>
    </HomeSection>
  );
};

export default Home;