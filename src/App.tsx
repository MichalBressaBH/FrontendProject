import { Navbar } from "./components/Navbar"
import Home from "./pages/Home";
import AllCards from "./pages/AllCards";
import AddCards from "./pages/AddCards";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllCards" element={<AllCards />} />
          <Route path="/AddCards" element={<AddCards />} />
        </Routes>
      </div>
    </>
  )
}

export default App