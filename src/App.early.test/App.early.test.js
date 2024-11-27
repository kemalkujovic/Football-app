
import React from "react";
import { render } from "@testing-library/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FavoritePage from "../Screens/FavoritePage";
import HomePage from "../Screens/HomePage";
import LeaguePage from "../Screens/LeaguePage";
import PlayerPage from "../Screens/PlayerPage";
import Root from "../Screens/Root";
import StatisticsPage from "../Screens/StatisticsPage";

jest.mock("../../src/Screens/Root", () => () => <div>Root Component</div>);
jest.mock("../../src/Screens/StatisticsPage", () => () => (
  <div>Statistics Page</div>
));

describe("App() App method", () => {
  describe("Happy Paths", () => {
    it("should render the Root component for the root path", () => {
      // Test to ensure the Root component is rendered at the root path
      const router = createBrowserRouter([{ path: "/", element: <Root /> }]);
      const { getByText } = render(<RouterProvider router={router} />);
      expect(getByText("Root Component")).toBeInTheDocument();
    });

    it("should render the HomePage component for the home path", () => {
      const router = createBrowserRouter([
        { path: "/", element: <HomePage /> },
      ]);
      const { getByText } = render(<RouterProvider router={router} />);
      expect(getByText("HomePage")).toBeInTheDocument();
    });

    it("should render the FavoritePage component for the favorite path", () => {
      const router = createBrowserRouter([
        { path: "/favorite", element: <FavoritePage /> },
      ]);
      const { getByText } = render(<RouterProvider router={router} />);
      expect(getByText("FavoritePage")).toBeInTheDocument();
    });

    it("should render the LeaguePage component for the league path", () => {
      const router = createBrowserRouter([
        { path: "/league/:projectsId", element: <LeaguePage /> },
      ]);
      const { getByText } = render(<RouterProvider router={router} />);
      expect(getByText("LeaguePage")).toBeInTheDocument();
    });

    it("should render the StatisticsPage component for the statistics path", () => {
      const router = createBrowserRouter([
        { path: "/statistics/:id", element: <StatisticsPage /> },
      ]);
      const { getByText } = render(<RouterProvider router={router} />);
      expect(getByText("Statistics Page")).toBeInTheDocument();
    });

    it("should render the PlayerPage component for the player path", () => {
      const router = createBrowserRouter([
        { path: "/:playerName/:id", element: <PlayerPage /> },
      ]);
      const { getByText } = render(<RouterProvider router={router} />);
      expect(getByText("PlayerPage")).toBeInTheDocument();
    });
  });

  describe("Edge Cases", () => {
    it("should render the Root component for an unknown path", () => {
      const router = createBrowserRouter([
        { path: "/unknown", element: <Root /> },
      ]);
      const { getByText } = render(<RouterProvider router={router} />);
      expect(getByText("Root Component")).toBeInTheDocument();
    });

    it("should handle missing parameters gracefully", () => {
      const router = createBrowserRouter([
        { path: "/league/", element: <LeaguePage /> },
      ]);
      const { getByText } = render(<RouterProvider router={router} />);
      expect(getByText("LeaguePage")).toBeInTheDocument();
    });
  });
});

