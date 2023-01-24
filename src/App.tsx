import { Route, Routes } from "react-router";
import EngHangMan from "./pages/engHangMan";
import HomePage from "./pages/HomePage";
import KaHangMan from "./pages/kaHangMan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ka" element={<KaHangMan />} />
        <Route path="/eng" element={<EngHangMan />} />
      </Routes>
    </>
  );
}

export default App;
