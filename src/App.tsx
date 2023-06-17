import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Board, Topbar } from './layouts'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Topbar />
        <Board />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
