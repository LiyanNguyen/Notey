import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NavbarContent } from "../components";
import { RecoilRoot } from "recoil";

describe("NavbarContent", () => {
  const mockFn = vi.fn();
  it("renders correctly", async () => {
    render(<NavbarContent openModal={mockFn} />, { wrapper: RecoilRoot });
    const newNoteButton = screen.getByTestId("new-note-button");
    expect(newNoteButton).toHaveTextContent("New Note");
  });
});
