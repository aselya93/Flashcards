import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import MainPage from "../pages/MainPage/MainPage";
import Navigation from "../widgets/ Navigation/Navigation";
import TopicPage from "../pages/TopicPage/TopicPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/topics", element: <TopicPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
