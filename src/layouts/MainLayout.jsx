import { Outlet } from "react-router-dom";
import { Header, Footer, ScrollToTopButton, ScrollTop } from "../components";

export const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ScrollTop />
        <Header />
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
};
