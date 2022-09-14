import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/todo" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
