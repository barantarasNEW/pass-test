import {object, string} from 'yup';
import '../../common/yupLocale';

const strongPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])[\w\W]+$/;
const mediumPattern = /(?=.*\d)(?=.*[a-zA-Z])|(?=.*\d)(?=.*[^\w\s])|(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9\s])/;

export const defaultValues = {
  password: '',
};

export const validation = object().shape({
  password: string()
    .required()
    .min(8)
    .test(
      'password-strength',
      'easy',
      function (value: string) {
        if (strongPattern.test(value)) {
          return true;
        };
        
        if (mediumPattern.test(value)) {
          return this.createError({
            message: 'medium',
          });
        };
      }
    ),
});
