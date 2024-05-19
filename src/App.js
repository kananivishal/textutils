import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import './Bootstrap/css/bootstrap.min.css';
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#212121";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
      <div className="container my-3">
        <TextForm heading="Enter The Text" mode={mode}/>
      </div>
    </>
  );
}

export default App;
