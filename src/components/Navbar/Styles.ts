import {styled} from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const NavbarBlock = styled('nav')(() => ({}));

export const  NavbarList = styled('ul')(() => ({
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 15,
}));

export const  NavbarItem = styled('li')(() => ({}));

export const  NavbarLink = styled(NavLink)(() => ({}));