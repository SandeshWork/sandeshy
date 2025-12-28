import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import FreelancePage from "./pages/FreelancePage.tsx";
import ErrorBoundary from "./ErrorBoundary.tsx";
import "./styles/globals.css";
// import "./index.css";

// Test error overlay
// throw new Error("Test Error from main.tsx");

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<div>Test Page</div>} />
        <Route path="/freelance" element={<FreelancePage />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);