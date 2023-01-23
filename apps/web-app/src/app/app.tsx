// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/shared/layouts/PublicLayout/PublicLayout';
import NewsArticles from '../pages/News-Articles/News-Articles';
const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/">
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="news" element={<NewsArticles />} />
            {/* <Route path="news" element={<ComingSoon />} />
          <Route path="contact-us" element={<ComingSoon />} /> */}
          </Route>

          {/* Protected Routes */}
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
