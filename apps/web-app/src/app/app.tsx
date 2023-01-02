// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/shared/layouts/PublicLayout/PublicLayout';
import NewsArticles from '../pages/News-Articles/News-Articles';

export function App() {
  return (
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
  );
}

export default App;
