import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
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
  createdAt: new Date(),
  updatedAt: new Date()
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
    expect(updateButton).toBeDisabled()

    const titleInput = screen.getByTestId("title-input");
    fireEvent.change(titleInput, { target: { value: "new sample title" } });
    expect(titleInput).toHaveValue("new sample title");

    const descriptionInput = screen.getByTestId("description-input");
    fireEvent.change(descriptionInput, {
      target: { value: "new sample descripition" },
    });
    expect(descriptionInput).toHaveValue("new sample descripition");

    expect(updateButton).toBeEnabled();

    await userEvent.click(updateButton);

    const XButton = await screen.findByRole("button", { name: "Close" });
    expect(XButton).toBeInTheDocument();

    await userEvent.click(XButton);

    expect(setIsOpen).toHaveBeenCalledTimes(2);
  });
});
