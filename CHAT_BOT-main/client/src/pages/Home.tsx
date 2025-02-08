import { Container } from "react-bootstrap";
import Menu from "../components/Menu";
import Wrapper from "../components/Wraper";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Wrapper>
      <Menu />
      <Container>
        <h1>Hi!</h1>

        <p>
          Welcome to our innovative learning platform, where you we welcome you
          with open arms to the universe of knowledge! Page Our homepage is your
          portal to an experience of engaging and interactive learning combined
          with the friendly support of our own intelligent chatbot. Imagine a
          virtual environment vibrant, where discovery and learning meet to form
          a unique synergy. Our simple and intuitive design will guide you with
          ease into a journey of knowledge by making resources available rich
          and quality content. Introducing a friendly chatbot and efficient,
          always ready to answer your questions and provide personalized
          support. With its advanced artificial intelligence, Our chatbot is not
          only a source of information, but also a guide confidence in your
          learning journey.
        </p>
      </Container>

      <Container className="d-flex justify-content-around flex-direction-row flex-wrap">
        <Link to="/learn">
          <div className="box bg-info">
            <h1>Learn</h1>
          </div>
        </Link>

        <Link to="/practice">
          <div className="box bg-success">
            <h1>Practice</h1>
          </div>
        </Link>

        <Link to="/chat">
          <div className="box bg-primary">
            <h1>Try Chat</h1>
          </div>
        </Link>
      </Container>
    </Wrapper>
  );
}

export default Home;
