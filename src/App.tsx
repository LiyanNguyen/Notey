import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Board, Topbar } from './layouts'

const queryClient = new QueryClient()

const App = () => {  
  return (
    <QueryClientProvider client={queryClient}>
      <Topbar />
      <Board/>
    </QueryClientProvider>
  )
}

export default App
