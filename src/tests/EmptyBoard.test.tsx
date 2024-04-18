import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { EmptyBoard } from "../components";

describe("EmptyBoard", () => {
  it("renders corectly showing information", () => {
    render(<EmptyBoard />);

    const noNotes = screen.getByText(
      "No notes found with this search and filters..."
    );

    expect(noNotes).toBeInTheDocument();
  });
});
