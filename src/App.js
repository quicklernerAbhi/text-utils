import { useState } from "react";
import Alert from "./componants/Alert";
import DummyNavbar from "./componants/DummyNavbar";
// import Navbar from "./componants/Navbar";
import TextForm from "./componants/TextForm";
import About from "./componants/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [setAlert, setSetAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("success", "dark mode enabled");
      document.title = "Dark mode active";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "light mode is enabled");
      document.title = "light mode active";
      // setInterval(() => {
      //   document.title = "download text utility ap";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "look it is changing";
      // }, 1000);
    }
  };
  const showAlert = (type, message) => {
    setSetAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setSetAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtilities" mode={mode} toggleMode={toggleMode} /> */}
        <DummyNavbar mode={mode} toggleMode={toggleMode} />
        <Alert setAlert={setAlert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm
              heading="Enter text for analyze below"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
