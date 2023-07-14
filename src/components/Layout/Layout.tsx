import { Suspense } from "react";
import { Outlet } from "react-router";
import CssBaseline from '@mui/material/CssBaseline'

import Loader from "../Loader/Loader";
import Header from "../Header/Header";

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