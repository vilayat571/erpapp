import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Mainpage from "./pages/Ev/Mainpage";
import LoginPage from "./pages/Login";
import Contractpage from "./pages/Müqavilə";
import Allcontract from "./pages/Müqavilə/Allcontract";
import Newcontract from "./pages/Müqavilə/Newcontract";
import Newcontract2 from "./pages/Müqavilə/Newcontract2";
import Newcontract3 from "./pages/Müqavilə/Newcontract3";

function App() {
 /*  console.log('Data',JSON.parse(localStorage.getItem('data'))) */
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/home" element={<Mainpage />} />
        <Route path="/contract" element={<Contractpage />} />
        <Route path="/allcontract" element={<Allcontract />} />
        <Route path="/newcontract" element={<Newcontract />} />
        <Route path="/newcontractpage_2" element={<Newcontract2 />} />
        <Route path="/newcontractpage_3" element={<Newcontract3 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;