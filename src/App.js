import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";
import Form5 from "./components/Form5";
import Form6 from "./components/Form6";
import Form7 from "./components/Form7";
import Form8 from "./components/Form8";
import Form9 from "./components/Form9";
import Form10 from "./components/Form10";
import Form11 from "./components/Form11";
import Form12 from "./components/Form12";
import Form13 from "./components/Form13";
import Form14 from "./components/Form14";
import Form15 from "./components/Form15";
import Form16 from "./components/Form16";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/form4" element={<Form4 />} />
        <Route path="/form5" element={<Form5 />} />
        <Route path="/form6" element={<Form6 />} />
        <Route path="/form7" element={<Form7 />} />
        <Route path="/form8" element={<Form8 />} />
        <Route path="/form9" element={<Form9 />} />
        <Route path="/form10" element={<Form10 />} />
        <Route path="/form11" element={<Form11 />} />
        <Route path="/form12" element={<Form12 />} />
        <Route path="/form13" element={<Form13 />} />
        <Route path="/form14" element={<Form14 />} />
        <Route path="/form15" element={<Form15 />} />
        <Route path="/form16" element={<Form16 />} />
      </Routes>
    </Router>
  );
}

export default App;
