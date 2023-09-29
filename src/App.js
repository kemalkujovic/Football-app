import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Screens/Root";
import HomePage from "./Screens/HomePage";
import LeaguePage from "./Screens/LeaguePage";
import Fudbal from "./Screens/Fudbal";
import FavoritePage from "./Screens/FavoritePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <Root />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/favorite",
          element: <FavoritePage />,
        },
        { path: "/league/:projectsId", element: <LeaguePage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
