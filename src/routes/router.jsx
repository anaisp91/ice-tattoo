import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import {
  Home,
  About,
  Gallery,
  Faq,
  Contact,
  NotFound,
  ThankYou,
} from "../pages";

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
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "thank-you",
        element: <ThankYou />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
