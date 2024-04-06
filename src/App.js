import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");
  const [enableText, setEnableText] = useState("Enable dark mode");
  const [modeVal, setModeVal] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeVal("light");
      setEnableText("Enable light mode");
      document.body.style.backgroundColor = "#1a2b56";
      showAlert("Dark mode has been enabled", "success");
      //document.title='xyz' can be kept to change the title set the time interval to change the title recursively
    } else {
      setMode("light");
      setModeVal("dark");
      setEnableText("Enable dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          home="Home"
          about="About"
          mode={mode}
          enableText={enableText}
          modeVal={modeVal}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert}></Alert>

        <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />}>
            </Route>
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                summary={"Your text summary is here"}
                mode={mode}
                enableText={enableText}
                modeVal={modeVal}
                toggleMode={toggleMode}
              />}>
            </Route>
          </Routes>
           
          {/* <About></About> */}

          {/* </TextForm>
       */}
        </div>
      </Router>
    </>
  );
}

export default App;