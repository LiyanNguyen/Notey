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
  createdAt: "16-07-2023",
};

describe("NoteModal", () => {
  it("renders correctly when a data is passed", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <NoteModal data={sampleData} isOpen setIsOpen={() => null} />
      </QueryClientProvider>
    );

    const headingElement = await screen.findByRole("heading", {
      level: 3,
      name: "Edit Note",
    });
    const titleInputElement = await screen.findByRole("textbox", {
      name: "Title",
    });
    const descriptionTextAreaElement = await screen.findByRole("textbox", {
      name: "Description",
    });
    const colorSelectElement = await screen.findByRole("combobox", {
      name: "Color",
    });
    const ratingSelectElement = await screen.findByRole("combobox", {
      name: "Rating",
    });
    const updateNoteButton = await screen.findByRole("button", {
      name: "Update",
    });

    expect(headingElement).toBeInTheDocument();
    expect(titleInputElement).toBeInTheDocument();
    expect(titleInputElement).toHaveValue(sampleData.title);
    expect(descriptionTextAreaElement).toBeInTheDocument();
    expect(descriptionTextAreaElement).toHaveValue(sampleData.description);
    expect(colorSelectElement).toBeInTheDocument();
    expect(colorSelectElement).toHaveValue(sampleData.color);
    expect(ratingSelectElement).toBeInTheDocument();
    expect(ratingSelectElement).toHaveValue(String(sampleData.rating));
    expect(updateNoteButton).toBeInTheDocument();
  });

  it("allows user to update details on the note", async () => {
    const setIsOpen = vi.fn();

    render(
      <QueryClientProvider client={queryClient}>
        <NoteModal data={sampleData} isOpen setIsOpen={setIsOpen} />
      </QueryClientProvider>
    );

    const titleInput = screen.getByTestId("title-input");
    expect(titleInput).toBeDefined();
    await fireEvent.change(titleInput, { target: { value: "sample title" } });
    expect(titleInput).toHaveValue("sample title");

    const descriptionInput = screen.getByTestId("description-input");
    await fireEvent.change(descriptionInput, {
      target: { value: "sample descripition" },
    });
    expect(descriptionInput).toHaveValue("sample descripition");

    const updateButton = await screen.findByRole("button", { name: "Update" });
    expect(updateButton).toBeInTheDocument();

    await userEvent.click(updateButton);

    const XButton = await screen.findByRole("button", { name: "Close" });

    await userEvent.click(XButton);

    expect(XButton).toBeInTheDocument();
    expect(setIsOpen).toHaveBeenCalledTimes(1);
  });
});
