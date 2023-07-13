import { Suspense } from "react";
import { Outlet } from "react-router";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <header>Header</header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default Layout;