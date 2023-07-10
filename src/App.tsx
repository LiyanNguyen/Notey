import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Board, Navbar } from './layouts'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Navbar />
        <Board />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
