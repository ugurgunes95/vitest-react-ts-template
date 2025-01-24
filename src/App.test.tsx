import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import App from "./App";

describe("App", () => {
  test("Should renders without error", () => {
    render(<App />);
    const appComponent = screen.getByTestId("app-component");

    expect(appComponent).toBeInTheDocument();
  });
});
