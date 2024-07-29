import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary';

// Lazy load your components
const LazyComponent = React.lazy(() => import('./Components/LazyComponent'));
const Navbar = React.lazy(() => import('./Components/Navbar'));
const NPage1 = React.lazy(() => import('./Components/NPage1'));
const NPage2 = React.lazy(() => import('./Components/NPage2'));

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<h1>The Page Is Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/Home" element={<NPage1 />} />
            <Route path="/About" element={<NPage2 />} />
            <Route path="/lazy" element={<LazyComponent />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
export default App;