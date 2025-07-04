import { describe, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../store";
import { Navbar } from "../layouts";

const queryClient = new QueryClient();

describe("Navbar", () => {
  it("renders correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </QueryClientProvider>
    );

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Notey");

    const newNoteButton = screen.getByTestId("new-note-button");
    fireEvent.click(newNoteButton);
    
    expect(screen.getByTestId("create-button")).toBeDefined();
  });
});
