import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import AddEmployee from "./pages/AddEmployee";
import AllEmployee from "./pages/AllEmployee";
import SingleAdd from "./pages/SingleAdd";
import Email from "./pages/Email";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="allemployee" element={<AllEmployee />} />
          <Route path="email" element={<Email />} />
          <Route path="addemployee">
            <Route index element={<AddEmployee />} />
            <Route path="singleadd" element={<SingleAdd />} />
            <Route path="upload" element={<Upload />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
