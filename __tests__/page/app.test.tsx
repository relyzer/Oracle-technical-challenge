import React from 'react';

import { render } from "@testing-library/react"
import MyApp from "../../pages"

// https://github.com/vercel/next.js/issues/26749#issuecomment-885431747
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image stub";
  },
}));

describe('MyApp page component', () => {
  // Turn off the warning for "unique keys not added"
  // It was already added in NavCategory.tsx
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation();
  });

  test('App should render without crashing', () => {
    render(<MyApp />)
  })
})