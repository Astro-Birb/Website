"use client";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../pages/notfound';
import Home from './page';

const DynamicPage = ({ page }: { page: string }) => {
  const PageComponent = lazy(() =>
      import(`@/pages/${page}`).catch(() => ({
        default: NotFound,
      }))
  );
// unlikely it'll ever need to show loading but better to have it
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <PageComponent />
      </Suspense>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Router>
      <html lang="en">
        <body>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route
            path="/:page"
            element={<DynamicPage page={window.location.pathname.slice(1)} />}
          />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        {children}
        </body>
      </html>
    </Router>
  );
}
