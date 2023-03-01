
import './App.css';
import Student from "./Components/Student";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import NewStudent from "./Components/NewStudent";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Student" element={<Student />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/NewStudent' element={<NewStudent></NewStudent>} ></Route>
      </Routes>
    </BrowserRouter>
    

    </div>
  );
}

export default App;
