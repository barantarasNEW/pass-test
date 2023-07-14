import { TFunction } from "i18next";

export const pages = (t: TFunction) => ([
  {href: "/", name: t('navigation.home')},
  {href: "/test", name: t('navigation.test')},
]);