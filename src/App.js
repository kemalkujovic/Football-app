import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Screens/Root";
import HomePage from "./Screens/HomePage";
import LeaguePage from "./Screens/LeaguePage";
import FavoritePage from "./Screens/FavoritePage";
import StatisticsPage from "./Screens/StatisticsPage";
import PlayerPage from "./Screens/PlayerPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
        { path: "/statistics/:id", element: <StatisticsPage /> },
        { path: "/:playerName/:id", element: <PlayerPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
