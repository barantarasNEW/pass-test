import {setLocale} from 'yup';
import i18n from './i18n';

setLocale({
    mixed: {
        required: () => i18n.t('validation:required'),
    },
    string: {
        min: ({min}) => i18n.t('validation:min', {min}),
    },
});