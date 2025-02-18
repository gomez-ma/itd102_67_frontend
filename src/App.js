import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Employee from './pages/Employee';
import CreateUser from './pages/CreateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="employee" element={<Employee />} />
          <Route path="create-user" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;