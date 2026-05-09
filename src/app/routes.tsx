import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PersonalProjectsPage } from "./pages/PersonalProjectsPage";
import { WebDesignPage } from "./pages/WebDesignPage";
import { WebDevelopmentPage } from "./pages/WebDevelopmentPage";
import { SoftwareDevelopmentPage } from "./pages/SoftwareDevelopmentPage";
import { DatabaseDevelopmentPage } from "./pages/DatabaseDevelopmentPage";
import { AboutMePage } from "./pages/AboutMePage";
import { ContactMePage } from "./pages/ContactMePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "personal-projects", Component: PersonalProjectsPage },
      { path: "web-design", Component: WebDesignPage },
      { path: "web-development", Component: WebDevelopmentPage },
      { path: "software-development", Component: SoftwareDevelopmentPage },
      { path: "database-development", Component: DatabaseDevelopmentPage },
      { path: "about-me", Component: AboutMePage },
      { path: "contact-me", Component: ContactMePage },
    ],
  },
]);
