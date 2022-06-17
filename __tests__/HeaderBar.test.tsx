import React from "react";

import { render, screen } from "@testing-library/react";
import HeaderBar from "../components/HeaderBar";

// May want to add a default title in this scenario in the component
// Bring this up to the UX Designer for discussion before implementing
test("should display no title", () => {
  render(<HeaderBar />);
  expect(
    screen.getByRole("heading", {
      name: "",
    })
  ).toBeInTheDocument();
});

test("should display 'Popular Movies'", () => {
  render(<HeaderBar headerTitle="Popular Movies" />);
  expect(
    screen.getByRole("heading", {
      name: "Popular Movies",
    })
  ).toBeInTheDocument();
});

test("should display 'Popular Series'", () => {
  render(<HeaderBar headerTitle="Popular Series" />);
  expect(
    screen.getByRole("heading", {
      name: "Popular Series",
    })
  ).toBeInTheDocument();
});
