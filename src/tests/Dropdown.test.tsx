import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Dropdown } from "../components";
import { colorOptions } from "../data";
import { Provider } from "react-redux";
import { store } from "../store";

describe("Dropdown", () => {
  const mockOnChange = vi.fn();
  it("allows user to select options for filtering", async () => {
    render(
      <Provider store={store}>
        <Dropdown value="all" onChange={mockOnChange} options={colorOptions} />
      </Provider>
    );
    const button = screen.getByRole("button", { name: "all" });
    fireEvent.click(button);

    const option = screen.getByRole("option", { name: "blue" });
    fireEvent.click(option);

    expect(mockOnChange).toHaveBeenCalledWith("blue");
  });
});
