import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Progress from "../components/loading/Progress";
import { rootPaths, adminPaths, authRoot } from "../routes/paths.js";
import PageLoader from "../components/loading/PageLoader";
import SignIn from "../pages/authendication/SignIn";
import SignUp from "../pages/authendication/SignUp";
import Page404 from "../pages/error-page/Page404";
import DashboardPage from "../pages/dashboard/DashboardPage";
import EventPage from "../pages/events/EventPage";
import UserForm from "../pages/user-registration/UserForm";
import EventCreationPage from "../pages/EventCreation/EventCreationPage";

// Lazy Loaded Components
const App = lazy(() => import("../App"));
const MainLayout = lazy(() =>
  import("../components/layouts/main-layout/MainLayout")
);
const AuthLayout = lazy(() =>
  import("../components/layouts/auth-layout/AuthLayout")
);
const AdminLayout = lazy(() =>
  import("../components/layouts/admin-layout/AdminLayout")
);

export const routes = [
  {
    element: (
      <Suspense fallback={<Progress />}>
        <App />
      </Suspense>
    ),
    children: [
      // User routes
      {
        path: rootPaths.root,
        element: (
          <Suspense fallback={<PageLoader />}>
            <MainLayout>
              <Outlet />
            </MainLayout>
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: rootPaths.events,
            element: <EventPage />,
          },
          {
            path: rootPaths.userRegister,
            element: <UserForm />,
          },
        ],
      },

      // Admin routes
      {
        path: adminPaths.root,
        element: (
          <Suspense fallback={<PageLoader />}>
            <AdminLayout>
              <Outlet />
            </AdminLayout>
          </Suspense>
        ),
        children: [
          {
            path: adminPaths.eventCreate,
            element: <EventCreationPage />,
          },
          {
            path: adminPaths.userCreate,
            element: <UserForm />,
          },
        ],
      },

      // Authentication routes
      {
        path: rootPaths.authRoot,
        element: <AuthLayout />,
        children: [
          {
            path: authRoot.signin,
            element: <SignIn />,
          },
          {
            path: authRoot.signup,
            element: <SignUp />,
          },
        ],
      },

      // Error Page
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
