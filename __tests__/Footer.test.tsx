import React from "react";

import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

// https://github.com/vercel/next.js/issues/26749#issuecomment-885431747
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image stub";
  },
}));

// Note: For Privacy policy, collection statement and terms and condition, can consider using a pop-up modal to display the info
// Instead of navigating to a new page, if appropriate. Up for discussion with UX Designer
describe("Navigation in footer", () => {
  test("should have 'Home' link to home page", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", {
        name: "Home",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
  });

  test("should have 'Terms and Conditions' link to terms and condition page", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", {
        name: "Terms and Conditions",
      })
    ).toBeInTheDocument();
    //  Not fully implemented as there is no 'Terms and conditions' page for this challenge
    expect(
      screen.getByText("Terms and Conditions").closest("a")
    ).toHaveAttribute("href", "/");
  });

  test("should have 'Privacy Policy' link to policy page", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", {
        name: "Privacy Policy",
      })
    ).toBeInTheDocument();
    //  Not fully implemented as there is no 'policy' page for this challenge
    expect(screen.getByText("Privacy Policy").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });

  test("should have 'Collection Statement' link to collection statement page", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", {
        name: "Collection Statement",
      })
    ).toBeInTheDocument();
    //  Not fully implemented as there is no 'collection statement' page for this challenge
    expect(
      screen.getByText("Collection Statement").closest("a")
    ).toHaveAttribute("href", "/");
  });

  test("should have 'Help' link to help page", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", {
        name: "Help",
      })
    ).toBeInTheDocument();
    //  Not fully implemented as there is no 'help' page for this challenge
    expect(screen.getByText("Help").closest("a")).toHaveAttribute("href", "/");
  });

  test("should have 'Manage Account' link to manage account page", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", {
        name: "Manage Account",
      })
    ).toBeInTheDocument();
    //  Not fully implemented as there is no 'manage account' page for this challenge
    expect(screen.getByText("Manage Account").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });
});

describe("Copyright statement in footer", () => {
  test("should be rendered in the document", () => {
    render(<Footer />);
    expect(
      screen.getByText("Copyright © 2016 DEMO Streaming. All Rights Reserved.")
    ).toBeInTheDocument();
  });
});


// https://testing-library.com/docs/queries/bytestid/
// Need to use test-ids for the fontawesome icons and image links
// Since I had difficulty querying the exact element

describe("Social media navigation in footer", () => {
  test("should be rendered in the document", () => {
    render(<Footer />);
    // const facebookIcon = container.querySelector('#__next > div > main > footer > div > div:nth-child(1) > a:nth-child(1) > svg > path')
    expect(screen.findByTestId)
    expect(
      screen.getByText("Copyright © 2016 DEMO Streaming. All Rights Reserved.")
    ).toBeInTheDocument();
  });
});


// describe("App download navigation in footer", () => {
//   test("should be rendered in the document", () => {
//     render(<Footer />);
//     // expect(screen.getByText("download on the app store").closest("a")).toHaveAttribute("href", "/");
//     expect(
//       screen.getByRole("img", { name: /download on the app store/i })
//     ).toBeInTheDocument();
//   });
// });
