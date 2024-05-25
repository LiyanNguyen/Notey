import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { RatingOptions } from "../components";

describe("RatingOptions", () => {
  it("renders corectly enabling rating switching", () => {
    const mockFn = vi.fn();
    render(<RatingOptions rating={1} setRating={mockFn} />);

    const ratingTwoButton = screen.getAllByRole("button")[1];
    expect(ratingTwoButton).toBeInTheDocument();

    fireEvent.click(ratingTwoButton);
    expect(mockFn).toHaveBeenCalledOnce();
  });
});
