import { lazy, Suspense } from "react";
import { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";

import BaseLayout from "src/layouts/BaseLayout";
import SidebarLayout from "src/layouts/SidebarLayout";

import SuspenseLoader from "src/components/SuspenseLoader";

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Admin
const StudentPage = Loader(lazy(() => import("src/features/Students")));
const StudentAdd = Loader(
  lazy(() => import("src/features/Students/StudentAdd"))
);
// Status

const Status404 = Loader(
  lazy(() => import("src/content/pages/Status/Status404"))
);
const Status500 = Loader(
  lazy(() => import("src/content/pages/Status/Status500"))
);
const StatusComingSoon = Loader(
  lazy(() => import("src/content/pages/Status/ComingSoon"))
);
const StatusMaintenance = Loader(
  lazy(() => import("src/content/pages/Status/Maintenance"))
);

const routes: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/admin/students" replace />,
      },
      {
        path: "status",
        children: [
          {
            path: "",
            element: <Navigate to="404" replace />,
          },
          {
            path: "404",
            element: <Status404 />,
          },
          {
            path: "500",
            element: <Status500 />,
          },
          {
            path: "maintenance",
            element: <StatusMaintenance />,
          },
          {
            path: "coming-soon",
            element: <StatusComingSoon />,
          },
        ],
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "admin",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="students" replace />,
      },
      {
        path: "students",
        children: [
          {
            path: "",
            element: <StudentPage />,
          },
          {
            path: "add",
            element: <StudentAdd />,
          },
        ],
      },
    ],
  },
];

export default routes;
