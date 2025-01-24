import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MainPage from "../pages/MainPage/MainPage";
import Navigation from "../widgets/ Navigation/Navigation";
import TopicPage from "../pages/TopicPage/TopicPage";
import CardsPage from "../pages/CardsPage/CardsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <div>
      <Navigation /> 
      <Outlet /> 
    </div>,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/topics", element: <TopicPage /> },
        { path: "/cards", element: <CardsPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;