import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";

const PersonalProjectsPage = lazy(() => import("./pages/PersonalProjectsPage").then(m => ({ default: m.PersonalProjectsPage })));
const WebDesignPage = lazy(() => import("./pages/WebDesignPage").then(m => ({ default: m.WebDesignPage })));
const WebDevelopmentPage = lazy(() => import("./pages/WebDevelopmentPage").then(m => ({ default: m.WebDevelopmentPage })));
const SoftwareDevelopmentPage = lazy(() => import("./pages/SoftwareDevelopmentPage").then(m => ({ default: m.SoftwareDevelopmentPage })));
const DatabaseDevelopmentPage = lazy(() => import("./pages/DatabaseDevelopmentPage").then(m => ({ default: m.DatabaseDevelopmentPage })));
const AboutMePage = lazy(() => import("./pages/AboutMePage").then(m => ({ default: m.AboutMePage })));
const ContactMePage = lazy(() => import("./pages/ContactMePage").then(m => ({ default: m.ContactMePage })));

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
