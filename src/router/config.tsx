import type { RouteObject } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/page";
import About from "@/pages/about/page";
import Services from "@/pages/services/page";
import Projects from "@/pages/projects/page";
import Contact from "@/pages/contact/page";
import NotFound from "@/pages/NotFound";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hakkimizda",
        element: <About />,
      },
      {
        path: "/hizmetler",
        element: <Services />,
      },
      {
        path: "/projeler",
        element: <Projects />,
      },
      {
        path: "/iletisim",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;