import Wrapper from "../components/Wraper";
import Menu from "../components/Menu";
import { Container } from "react-bootstrap";

const Learn = () => {
  return (
    <Wrapper>
      <Menu />
      <Container className="d-flex flex-wrap gap-3">
        <div className="box bg-primary">
          <a href="public/Modules/Topic1.zip" download>
            <h2>Module 1</h2>
          </a>
        </div>
        <div className="box bg-primary">
          <a href="public/Modules/Topic2.zip" download>
            <h2>Module 2</h2>
          </a>
        </div>
        <div className="box bg-primary">
          <a href="public/Modules/Topic3.zip" download>
            <h2>Module 3</h2>
          </a>
        </div>
        <div className="box bg-primary">
          <a href="public/Modules/Topic4.zip" download>
            <h2>Module 4</h2>
          </a>
        </div>
        <div className="box bg-primary">
          <a href="public/Modules/Topic5.zip" download>
            <h2>Module 5</h2>
          </a>
        </div>
        <div className="box bg-primary">
          <a href="public/Modules/Topic6.zip" download>
            <h2>Module 6</h2>
          </a>
        </div>
        <div className="box bg-primary">
          <a href="public/Modules/Topic7.zip" download>
            <h2>Module 7</h2>
          </a>
        </div>
        <div className="box bg-primary">
          <a href="public/Modules/Topic8.zip" download>
            <h2>Module 8</h2>
          </a>
        </div>
        <div className="box bg-primary">
          <a href="public/Modules/Topic9.zip" download>
            <h2>Module 9</h2>
          </a>
        </div>
        <div className="box bg-primary">
          <a href="public/Modules/Topic10.zip" download>
            <h2>Module 10</h2>
          </a>
        </div>
        <div className="box bg-primary">
          <a href="public/Modules/Topic11.zip" download>
            <h2>Module 11</h2>
          </a>
        </div>
        <div className="box bg-primary">
          <a href="public/Modules/Topic12.zip" download>
            <h2>Module 12</h2>
          </a>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Learn;
