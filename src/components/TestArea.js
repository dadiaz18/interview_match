import Container from "react-bootstrap/Container";

function TestArea(props) {
  const { results } = props;

  return (
    <Container className="d-flex flex-column align-content-center p-2">
      <h1 className="p-2">Results</h1>
      <ol>
        <ol className="p-2">
          {results
            ? results.map((element, index) => (
                <li style={{ color: element ? "green" : "red" }} key={index}>
                  Sentence {index + 1}, response should be {element.toString()}
                </li>
              ))
            : undefined}
        </ol>
      </ol>
    </Container>
  );
}

export default TestArea;
