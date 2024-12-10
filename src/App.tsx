import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/home";
import Server1 from "./pages/servers/1";
import { Layout } from "./components/Layout";

// Duplicate line = shift + option + down
// Select current word = cmd + d
// Delete line = cmd + shift + k
// Skip to end of line = cmd + left/right
// Move about on line quickly - option + left/right
// Select word = option + shift + right/left

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servers/1" element={<Server1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
