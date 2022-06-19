import React from "react";

import { render, screen } from "@testing-library/react";
import Movies from "../../pages";

// https://github.com/vercel/next.js/issues/26749#issuecomment-885431747
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image stub";
  },
}));

describe("Movies Page component", () => {
  test("should render NavBar component with 'DEMO Streaming' heading", () => {
    render(<Movies />);
    expect(
      screen.getByRole("heading", {
        name: "DEMO Streaming",
      })
    ).toBeInTheDocument();
  });

  test("should render HeaderBar component with 'Popular Movies' heading", () => {
    render(<Movies />);
    expect(
      screen.getByRole("heading", {
        name: "Popular Movies",
      })
    ).toBeInTheDocument();
  });

  // test("should render Listing component", () => {
  //   render(<Movies />);
  //   expect(screen.getByTestId("listing-div")).toBeInTheDocument();
  // });

  test("should render Footer component with 'Home' link", () => {
    render(<Movies />);
    expect(
      screen.getByRole("link", {
        name: "Home",
      })
    ).toBeInTheDocument();
  });
});
