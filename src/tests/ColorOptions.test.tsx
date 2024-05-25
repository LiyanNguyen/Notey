import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ColorOptions } from "../components";

describe("ColorOptions", () => {
  it("renders corectly enabling color switching", () => {
    const mockFn = vi.fn();
    render(<ColorOptions color="blue" setColor={mockFn} />);

    const redButton = screen.getAllByRole("button")[1];
    expect(redButton).toBeInTheDocument();

    fireEvent.click(redButton);
    expect(mockFn).toHaveBeenCalledOnce();
  });
});
