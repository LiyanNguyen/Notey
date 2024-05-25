import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { LoadingBoard } from "../components";

describe("LoadingBoard", () => {
  it("renders corectly showing information", async () => {
    render(<LoadingBoard />);

    const loadingNotes = screen.getByText("Loading Notes...");
    await waitFor(() => {
      expect(loadingNotes).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(loadingNotes).not.toBeInTheDocument();
      },
      { timeout: 1500 }
    );

    const longMessage1 = screen.getByText(
      "This project uses free hosting service"
    );
    const longMessage2 = screen.getByText("This might take a while...");
    expect(longMessage1).toBeInTheDocument();
    expect(longMessage2).toBeInTheDocument();
  });
});
