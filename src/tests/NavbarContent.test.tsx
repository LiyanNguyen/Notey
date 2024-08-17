import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { NavbarContent } from "../components";
import { Provider } from "react-redux";
import { store } from "../store";

describe("NavbarContent", () => {
  const mockFn = vi.fn();
  it("renders correctly", async () => {
    render(
      <Provider store={store}>
        <NavbarContent openModal={mockFn} />
      </Provider>
    );
    const newNoteButton = screen.getByTestId("new-note-button");
    expect(newNoteButton).toBeDefined();

    const colorButton = screen.getByRole("button", { name: "all" });
    fireEvent.click(colorButton);
    const colorOptions = screen.getByRole("option", { name: "blue" });
    fireEvent.click(colorOptions);
    expect(colorButton).toHaveTextContent("blue");

    const ratingButton = screen.getByRole("button", { name: "ascending" });
    fireEvent.click(ratingButton);
    const ratingOption = screen.getByRole("option", { name: "descending" });
    fireEvent.click(ratingOption);
    expect(ratingOption).toHaveTextContent("descending");
  });
});
