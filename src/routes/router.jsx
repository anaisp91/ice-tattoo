import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Gallery } from "../pages/Gallery";
import { Faq } from "../pages/Faq";
import { Contact } from "../pages/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
