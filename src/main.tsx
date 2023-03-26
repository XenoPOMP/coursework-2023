import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './main.scss'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@redux/index';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true
    },
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
