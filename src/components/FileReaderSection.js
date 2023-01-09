import Container from "react-bootstrap/Container";

function FileReaderSection(props) {
  const { contentFile, setContentFile } = props;

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const text = e.target.result;
      setContentFile(text);
    };
  };

  return (
    <Container className="d-flex flex-column align-content-center divisor p-2 pe-4">
      <h1 className="p-2">Step 1</h1>
      <label htmlFor="formFileLg" className="form-label">
        Choose your file, to be evaluated. The file must be in .txt extension.
      </label>
      <input
        className="form-control form-control-lg"
        onChange={handleFile}
        id="formFileLg"
        type="file"
        accept=".txt"
      />
      <ol className="p-2">
        {contentFile
          ? contentFile
              .split("\r\n")
              .map((element, index) => <li key={index}>{element}</li>)
          : undefined}
      </ol>
    </Container>
  );
}

export default FileReaderSection;
