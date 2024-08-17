import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { EmptyBoard, SearchBar } from "../components";
import { Provider } from "react-redux";
import { store } from "../store";

describe("EmptyBoard", () => {
  it("renders corectly showing information", () => {
    render(
      <Provider store={store}>
        <EmptyBoard />
        <SearchBar />
      </Provider>
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
    // expect(searchInput).toHaveValue("");
  });
});
