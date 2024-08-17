import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Board } from "../layouts";
import { Provider } from "react-redux";
import { store } from "../store";

const queryClient = new QueryClient();

describe("Board", () => {
  it("renders correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Board />
        </Provider>
      </QueryClientProvider>
    );

    // WIP

  });
});
