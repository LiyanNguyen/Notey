import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeToggler } from "../components";

describe("ThemeToggler", () => {
  it("renders corectly enabling toggle", () => {
    render(<ThemeToggler />);
    const switchButton = screen.getByTestId("switch");
    expect(switchButton).toBeInTheDocument();

    fireEvent.click(switchButton);
    expect(switchButton).toHaveClass("bg-violet-600");

    fireEvent.click(switchButton);
    expect(switchButton).toHaveClass("bg-violet-400");
  });
});
