import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Error from "./Pages/Error";
import DashboardPage from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
