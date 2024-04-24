import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { CreateModal } from "../components";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("CreateModal", () => {
  it("allows users to input details and create new note", async () => {
    const setIsOpen = vi.fn();
    render(
      <QueryClientProvider client={queryClient}>
        <CreateModal isOpen setIsOpen={setIsOpen} />
      </QueryClientProvider>
    );

    const createButton = screen.getByTestId("create-button");
    expect(createButton).toBeDisabled();

    const titleInput = screen.getByTestId("title-input");
    fireEvent.change(titleInput, { target: { value: "sample title" } });
    expect(titleInput).toHaveValue("sample title");

    const descriptionInput = screen.getByTestId("description-input");
    fireEvent.change(descriptionInput, {
      target: { value: "sample descripition" },
    });
    expect(descriptionInput).toHaveValue("sample descripition");

    expect(createButton).not.toBeDisabled();

    await userEvent.click(createButton);

    const XButton = await screen.findByRole("button", { name: "Close" });
    expect(XButton).toBeDefined();

    expect(setIsOpen).toHaveBeenCalledOnce();
  });
});
