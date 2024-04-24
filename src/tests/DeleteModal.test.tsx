import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DeleteModal } from "../components";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

describe("DeleteModal", () => {
  it("renders correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <DeleteModal
            id="123456"
            title="Sample Title"
            isOpen
            setIsOpen={() => null}
          />
        </RecoilRoot>
      </QueryClientProvider>
    );

    const headingElement = await screen.findByRole("heading", {
      level: 3,
      name: "Delete Confirmation",
    });
    const deleteButton = await screen.findByRole("button", { name: "Delete" });
    const cancelButton = await screen.findByRole("button", { name: "Cancel" });
    const titleText = await screen.findByText("Sample Title");

    expect(headingElement).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(titleText).toBeInTheDocument();
  });

  it("deletes the selected note and closes modal", async () => {
    const setIsOpen = vi.fn();

    render(
      <QueryClientProvider client={queryClient}>
        <DeleteModal
          id="123456"
          title="Sample Title"
          isOpen
          setIsOpen={setIsOpen}
        />
      </QueryClientProvider>,
      { wrapper: RecoilRoot }
    );

    const deleteButton = await screen.findByRole("button", { name: "Delete" });
    expect(deleteButton).toBeInTheDocument();

    await userEvent.click(deleteButton);

    const XButton = await screen.findByRole("button", { name: "Close" });

    expect(XButton).toBeInTheDocument();
    expect(setIsOpen).toHaveBeenCalledTimes(1);
  });
});
