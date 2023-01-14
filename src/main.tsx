import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'tailwindcss/tailwind.css';
import './index.less';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Root } from 'Root';
import { QueryClient, QueryClientProvider } from 'react-query';

const router = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<Root />} />));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}
