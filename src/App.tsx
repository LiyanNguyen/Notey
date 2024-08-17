import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Board, Navbar } from "./layouts";
import { Provider } from "react-redux";
import { store } from "./store";

const queryClient = new QueryClient();

const App = () => {  
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navbar />
        <Board />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
