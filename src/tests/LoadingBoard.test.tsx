import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { LoadingBoard } from "../components";

describe("LoadingBoard", () => {
  it("renders corectly showing information", async () => {
    render(<LoadingBoard />);

    const loadingNotes = screen.getByText("loadingNotes");
    await waitFor(() => {
      expect(loadingNotes).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(loadingNotes).not.toBeInTheDocument();
      },
      { timeout: 1500 }
    );

    const longMessage1 = screen.getByText("freeHosting");
    const longMessage2 = screen.getByText("mightTakeAWhile");
    expect(longMessage1).toBeInTheDocument();
    expect(longMessage2).toBeInTheDocument();
  });
});
