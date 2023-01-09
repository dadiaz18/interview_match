import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";

function TextAreaSection(props) {
  const { contentFile, textareaValue, setTextareaValue, setResults } = props;
  const [buttonStatus, setButtonStatus] = useState(true);

  const clear = () => {
    setTextareaValue("");
    setResults("");
    setButtonStatus(true);
  };

  useEffect(() => {
    if (textareaValue.length > 0 && contentFile.length > 0) {
      setButtonStatus(false);
    } else {
      setButtonStatus(true);
    }
  });

  const onChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const compareValues = () => {
    let array = [];

    const buildRegularExpression = () => {
      return `(${contentFile
        .split("\r\n")
        .map((element, i, { length }) =>
          !(i + 1 === length) ? element + "|" : element
        )
        .toString()
        .split("|,")
        .join("|")})`;
    };

    const regularExpression = new RegExp(buildRegularExpression());

    textareaValue.split("\n").forEach((element) => {
      array.push(Boolean(element.match(regularExpression)));
    });

    setResults(array);
  };

  return (
    <Container className="divisor d-flex flex-column align-content-center justify-content-center p-2 px-3">
      <h1 className="p-2">Step 2</h1>
      <textarea
        className="p-2"
        rows="20"
        cols="50"
        placeholder="Enter the text to be evaluated, and separate each sentence by a new line."
        onChange={onChange}
        value={textareaValue}
      ></textarea>
      <Container className="d-flex flex-row align-items-center justify-content-center p-2">
        <Button
          onClick={compareValues}
          style={{ width: "100px", margin: "10px" }}
          className="p-2"
          disabled={buttonStatus}
        >
          Run Test
        </Button>
        <Button
          onClick={clear}
          style={{ width: "100px", margin: "10px" }}
          className="p-2"
        >
          Clear
        </Button>
      </Container>
    </Container>
  );
}

export default TextAreaSection;
