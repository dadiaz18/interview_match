import "./App.css";
import Container from "react-bootstrap/Container";
import FileReaderSection from "./components/FileReaderSection";
import TextAreaSection from "./components/TextAreaSection";
import TestArea from "./components/TestArea";
import { useState } from "react";

function App() {
  const [contentFile, setContentFile] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [results, setResults] = useState("");

  return (
    <Container className="d-flex p-2">
      <FileReaderSection
        contentFile={contentFile}
        setContentFile={setContentFile}
      />
      <TextAreaSection
        contentFile={contentFile}
        textareaValue={textareaValue}
        setTextareaValue={setTextareaValue}
        setResults={setResults}
      />
      <TestArea results={results} />
    </Container>
  );
}

export default App;
