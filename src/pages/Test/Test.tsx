import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { Input, Button, Typography, Stack } from '@mui/material';

import ProgressBar from "../../components/ProgressBar/ProgressBar";

import { defaultValues, validation } from "./form";
import { progress } from "./constants";
import { TestSection } from "./Styles";

const Test = () => {
  const {t} = useTranslation();
  const [values, setValues] = useState(progress.default);
  const [message, setMessage] = useState('Easy');

  const {register, formState: {errors, isValid}, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(validation),
    defaultValues,
  });

  useEffect(() => {
    if (isValid) {
      setValues(progress.strong);
      setMessage(t('validation:strong'));
    
      return;
    }

    setValues(() => {
      const message = errors.password?.message;
      const type = errors.password?.type;

      if (type === 'min') {
        setMessage(t('validation:min'));
    
        return progress.min;
      } else if (message === 'easy') {
        setMessage(t('validation:easy'));
    
        return progress.easy;
      } else if (message === 'medium') {
        setMessage(t('validation:medium'));

        return progress.medium;
      } else {
        setMessage(t('validation:required'));
      
        return progress.default;
      }
    });
  }, [errors.password, isValid, t]);

  return (
    <TestSection>
      <Stack spacing={{ xs: 2 }} alignItems="center" justifyContent="center">
          <Input
            {...register("password")}
            type="password"
            name="password"
            size="medium"
            autoFocus
          />

        <ProgressBar colors={values} />

        <Typography variant="subtitle1" color={values[1]} align="center">
          {message}
        </Typography>

        {<Button
          variant="contained"
          disabled={!isValid}
          onClick={() => reset()}
        >
          {t('clear')}
        </Button>}
      </Stack>
    </TestSection>
  );
};

export default Test;