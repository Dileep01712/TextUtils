import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const storedMode = localStorage.getItem('mode') || 'light';
  const [mode, setMode] = useState(storedMode);

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#202528' : '#EFFBFF';
    localStorage.setItem('mode', mode);
  }, [mode]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleShow = () => {
    if (mode === 'light') {
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      showAlert("Dark mode has been disabled", "success");
    }
  }

  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      setBtnText(newMode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode');
      toggleShow();
      return newMode;
    });
  };

  return (
    <Router>
      <>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <Alert alert={alert} />
        <div className="container mb-3 my-2">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;