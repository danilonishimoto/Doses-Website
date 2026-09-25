import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { AppLayout } from "./layouts/AppLayout";
import ClickSpark from "./bits/CursorPointer/CursorPointer.jsx";
import { Resources } from "./pages/resources/Resources.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ClickSpark
          sparkColor="#7EDCB9"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/about" element={<About />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ClickSpark>
      </QueryClientProvider>
    ,
  </StrictMode>,
);
