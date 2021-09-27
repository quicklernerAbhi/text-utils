import React, { useState } from "react";

const TextForm = ({ heading, mode, showAlert }) => {
  // const [textDarkMode, setTextDarkMode] = useState({
  //   backgroundColor: "white",
  //   color: "black",
  // });
  // useEffect(() => {
  //   if (mode === "light") {
  //     setTextDarkMode({
  //       backgroundColor: "white",
  //       color: "black",
  //     });
  //   } else {
  //     setTextDarkMode({
  //       backgroundColor: "black",
  //       color: "white",
  //     });
  //   }
  // }, [mode]);

  const [text, setText] = useState("");
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const toUpperCase = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    showAlert("success", "TEXT IS CONVERTED TO UPPERCASE");
  };
  const toLowerCase = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    showAlert("success", "text is converted ti lowercase");
  };
  const clearText = () => {
    setText("");
    showAlert("success", "text is cleared");
  };

  return (
    <>
      <div
        className="container my-4 background-color: black;
    color: white;"
        style={
          mode === "light"
            ? {
                backgroundColor: "white",
                color: "black",
              }
            : {
                backgroundColor: "black",
                color: "white",
              }
        }
      >
        <h1 className="my-3">{heading}</h1>
        <form>
          <div className="form-group">
            <textarea
              style={
                mode === "light"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                    }
                  : {
                      backgroundColor: "black",
                      color: "white",
                    }
              }
              placeholder="Add Text Here"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={text}
              onChange={onChangeText}
            ></textarea>
          </div>
        </form>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={toUpperCase}
        >
          TO UPPER CASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={toLowerCase}
        >
          to lower case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={
          mode === "light"
            ? {
                backgroundColor: "white",
                color: "black",
              }
            : {
                backgroundColor: "black",
                color: "white",
              }
        }
      >
        <h1>Your Text Summary</h1>
        <p>
          <span className="font-weight-bold">
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </span>
          words And
          <span className="font-weight-bold"> {text.length}</span> characters
        </p>
        <p>
          <span className="font-weight-bold">
            {Math.round(
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length / 250
            ) < 1
              ? `few Seconds.. `
              : `${Math.round(
                  text.split(/\s/).filter((element) => {
                    return element.length !== 0;
                  }).length / 250
                )} minutes `}
          </span>
          to read..
        </p>
        <h1>Preview</h1>
        <p>{text.length === 0 ? "Nothing to preview..." : text}</p>
      </div>
    </>
  );
};

export default TextForm;
