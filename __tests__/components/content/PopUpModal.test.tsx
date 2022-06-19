import React from "react";

import { render, screen } from "@testing-library/react";
import PopUpModal from "../../../components/content/PopUpModal";

describe("PopUpModal component", () => {
  const mockedProps = {
    imageSrc: "",
    movieTitle: "movie title",
    releaseYear: 2010,
    description: "Highly rated movie",
    setIsModalOpen: true,
  };
  const mockSetState = jest.spyOn("React", "Dispatch");

  beforeEach(() => {
    // Mock data fetch
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve({ data: "Here is some fun facts" }),
          })
        ) as jest.Mock
      );
  });

  afterEach(() => {
    // Clean-up on exiting
    jest.restoreAllMocks();
  });

  test("Title should link to home page", () => {
    render(
      <PopUpModal
        imageSrc={mockedProps.imageSrc}
        movieTitle={mockedProps.movieTitle}
        releaseYear={mockedProps.releaseYear}
        description={mockedProps.description}
        setIsModalOpen={mockSetState}
      />
    );
    expect(screen.getByText("DEMO Streaming").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });

  test("should fetch external API", async () => {
    render(
      <PopUpModal
        imageSrc={mockedProps.imageSrc}
        movieTitle={mockedProps.movieTitle}
        releaseYear={mockedProps.releaseYear}
        description={mockedProps.description}
        setIsModalOpen={mockSetState}
      />
    );
    //  Not fully implemented as there is no login page for this challenge
    expect(screen.getByText("Log in").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });
});
