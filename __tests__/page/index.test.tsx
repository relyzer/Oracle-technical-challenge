import React from "react";

import { render, screen } from "@testing-library/react";
import Home from "../../pages";

// https://github.com/vercel/next.js/issues/26749#issuecomment-885431747
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image stub";
  },
}));

describe("Home (index) Page component", () => {
  test("should render NavBar component with 'DEMO Streaming' heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: "DEMO Streaming",
      })
    ).toBeInTheDocument();
  });

  test("should render HeaderBar component with 'Popular Titles' heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: "Popular Titles",
      })
    ).toBeInTheDocument();
  });

  test("should render NavCategory component with 'Popular Series' and 'Popular Movies' sub-heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: "Popular Series",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Popular Movies",
      })
    ).toBeInTheDocument();
  });

  test("should render NavCategory component with links to series and movies page", () => {
    render(<Home />);
    expect(
      screen.getByTestId("categoryNavLink-Series").closest("a")
    ).toHaveAttribute("href", "/series");
    expect(
      screen.getByTestId("categoryNavLink-Movies").closest("a")
    ).toHaveAttribute("href", "/movies");
  });

  test("should render Footer component with 'Home' link", () => {
    render(<Home />);
    expect(
      screen.getByRole("link", {
        name: "Home",
      })
    ).toBeInTheDocument();
  });
});
