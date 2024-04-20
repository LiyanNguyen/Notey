import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { Board } from "../layouts";

const queryClient = new QueryClient();

describe("Board", () => {
  it("renders correctly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Board />
        </RecoilRoot>
      </QueryClientProvider>
    );

    // WIP

  });
});
