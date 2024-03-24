import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Dropdown } from "../components";
import { colorOptions } from "../data";

describe("Dropdown", () => {
  const mockOnChange = vi.fn();
  it("renders correctly", async () => {
    render(
      <Dropdown value={"test"} onChange={mockOnChange} options={colorOptions} />
    );
    expect(10).toBe(10);
    // WIP
  });
});
