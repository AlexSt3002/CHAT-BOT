import { Container } from "react-bootstrap";
import Menu from "../components/Menu";
import Wrapper from "../components/Wraper";

const Credits = () => {
  return (
    <Wrapper>
      <Menu />
      <Container>
        <h1>
          This application was developed by students from University POLITEHNICA
          Bucharest / Automatic Control & Computer Science Faculty within the
          Erasmus project: 2022-1-ES01-KA220-HED-000089861.:{" "}
        </h1>
        <ul>
          <li>Hampi Rares Marian</li>
          <li>Dodi Mircea Ovidiu</li>
          <li>Pituru Stefan Dumitru</li>
          <li>Rau Flavius</li>
          <li>Stoican Alexandru</li>
        </ul>
        <h1>And it was coordinated by the teachers:</h1>
        <ul>
          <li>Caramihai Mihail</li>
          <li>Chis Daniel</li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default Credits;
