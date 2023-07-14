import { Suspense } from "react";
import { Outlet } from "react-router";
import CssBaseline from '@mui/material/CssBaseline'

import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <CssBaseline>
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
      </main>
    </CssBaseline>
  );
};

export default Layout;