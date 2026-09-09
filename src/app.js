import { StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Hand } from 'lucide-react';
import './app.css';

const HelloWorld = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            default: () => (
              <div className='flex items-center justify-center h-dvh'>
                <button className='btn btn-primary'>
                  <Hand />
                  Hello DaisyUI
                </button>
              </div>
            ),
          }),
        3000,
      ),
    ),
);

function Loading() {
  return (
    <div className='flex flex-col items-center justify-center h-dvh'>
      <span className='loading loading-spinner'></span>
      Loading...
    </div>
  );
}

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index element={<HelloWorld />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
