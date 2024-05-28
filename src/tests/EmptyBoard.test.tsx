import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { EmptyBoard, SearchBar } from "../components";
import { RecoilRoot } from "recoil";

describe("EmptyBoard", () => {
  it("renders corectly showing information", () => {
    render(
      <>
        <EmptyBoard />
        <SearchBar />
      </>,
      { wrapper: RecoilRoot }
    );

    const noNotes = screen.getByText("noNotesFound");
    expect(noNotes).toBeInTheDocument();

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "search string" } });
    expect(searchInput).toHaveValue("search string");

    const resetFilterButton = screen.getByTestId("reset-button");
    expect(resetFilterButton).toBeInTheDocument();

    fireEvent.click(resetFilterButton);
    expect(searchInput).toHaveValue("");
  });
});
