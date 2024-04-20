import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Dropdown } from "../components";
import { colorOptions } from "../data";
import { RecoilRoot } from "recoil";

describe("Dropdown", () => {
  const mockOnChange = vi.fn();
  it("allows user to select options for filtering", async () => {
    render(
      <RecoilRoot>
        <Dropdown value="all" onChange={mockOnChange} options={colorOptions} />
      </RecoilRoot>
    );
    const button = screen.getByRole("button", { name: "all" });
    fireEvent.click(button);

    const option = screen.getByRole("option", { name: "blue" });
    fireEvent.click(option);

    expect(mockOnChange).toHaveBeenCalledWith("blue");
  });
});
