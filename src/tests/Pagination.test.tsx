import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { Pagination } from "../components";


describe("Pagination", () => {
  it("allows user to paginate previous, next, first, and last pages", async () => {
    render(
      <Provider store={store}>
        <Pagination totalPages={10} />
      </Provider>
    );

    const pageDisplay = screen.getByTestId("page-display");
    expect(pageDisplay).toBeDefined();
    expect(pageDisplay).toHaveTextContent("1 / 10");

    const nextButton = screen.getByTestId("next-button");
    fireEvent.click(nextButton);
    expect(pageDisplay).toHaveTextContent("2 / 10");

    const lastButton = screen.getByTestId("last-button");
    fireEvent.click(lastButton);
    expect(pageDisplay).toHaveTextContent("10 / 10");

    const previousButton = screen.getByTestId("previous-button");
    fireEvent.click(previousButton);
    expect(pageDisplay).toHaveTextContent("9 / 10");

    const firstButton = screen.getByTestId("first-button");
    fireEvent.click(firstButton);
    expect(pageDisplay).toHaveTextContent("1 / 10");
  });
});
