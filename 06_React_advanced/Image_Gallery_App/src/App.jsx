import React from "react";
import { Suspense, useState } from "react";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const Gallery = React.lazy(() => import("./components/Gallery"));
  const PhotoDetails = React.lazy(() => import("./components/PhotoDetails"));
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/photo/:id"
            element={
              <Suspense fallback={<Loader />}>
                <PhotoDetails />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
