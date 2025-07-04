import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from "../components";
import { Provider } from "react-redux";
import { store } from "../store";

describe("SearchBar", () => {
  it("allows user to input search string for lookup", async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeDefined();
    fireEvent.change(searchInput, { target: { value: "search string" } });
    expect(searchInput).toHaveValue("search string");

    fireEvent.keyDown(searchInput, { key: "Enter" });

    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeDefined();
    fireEvent.click(searchButton);
  });
});
