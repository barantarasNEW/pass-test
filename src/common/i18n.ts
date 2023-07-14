import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        ns: ['translation', 'validation'],
        defaultNS: 'translation',
        fallbackLng: 'en',
        debug: false,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;