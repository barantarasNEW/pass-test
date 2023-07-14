import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import {Button} from '@mui/material';

import { pages } from "./constants";
import { NavbarBlock, NavbarItem, NavbarLink, NavbarList } from "./Styles";

const Navbar = () => {
  const {pathname} = useLocation();
  const {t} = useTranslation();

  return (
    <NavbarBlock>
      <NavbarList>
        {pages(t).map(({href, name}) => (
          <NavbarItem key={href}>
            <NavbarLink to={href} className={isActive => isActive ? '' : 'active'}>
              <Button variant={pathname === href ? 'outlined' : 'text'}>
                {name}
              </Button>
            </NavbarLink>
          </NavbarItem>
        ))}
      </NavbarList>
    </NavbarBlock>
  );
};

export default Navbar;