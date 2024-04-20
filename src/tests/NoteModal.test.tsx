import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NoteModal } from "../components";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Note } from "../types/Note";

const queryClient = new QueryClient();

const sampleData: Note = {
  _id: "123456",
  title: "Sample Title",
  description: "Sample Description",
  rating: 8,
  color: "green",
  createdAt: "16-07-2023",
};

describe("NoteModal", () => {
  it("renders correctly when a data is passed", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <NoteModal data={sampleData} isOpen setIsOpen={() => null} />
      </QueryClientProvider>
    );
    const updateNoteButton = await screen.findByRole("button", {
      name: "Update",
    });
    
    expect(updateNoteButton).toBeInTheDocument();
  });

  it("allows user to update details on the note", async () => {
    const setIsOpen = vi.fn();

    render(
      <QueryClientProvider client={queryClient}>
        <NoteModal data={sampleData} isOpen setIsOpen={setIsOpen} />
      </QueryClientProvider>
    );

    const updateButton = await screen.findByRole("button", { name: "Update" });
    expect(updateButton).toBeInTheDocument();

    await userEvent.click(updateButton);

    const XButton = await screen.findByRole("button", { name: "Close" });

    await userEvent.click(XButton);

    expect(XButton).toBeInTheDocument();
    expect(setIsOpen).toHaveBeenCalledTimes(1);
  });
});
