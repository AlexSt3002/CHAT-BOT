import Wrapper from "../../components/Wraper";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { quiz1 } from "./Quizs/Quiz1";
import { quiz2 } from "./Quizs/Quiz2";
import { quiz3 } from "./Quizs/Quiz3";
import { quiz4 } from "./Quizs/Quiz4";
import { quiz5 } from "./Quizs/Quiz5";
import { quiz6 } from "./Quizs/Quiz6";
import { quiz7 } from "./Quizs/Quiz7";
import { quiz8 } from "./Quizs/Quiz8";
import { quiz9 } from "./Quizs/Quiz9";
import { quiz10 } from "./Quizs/Quiz10";
import { quiz11 } from "./Quizs/Quiz11";
import { quiz12 } from "./Quizs/Quiz12";
import Menu from "../../components/Menu";

const QuizMenu = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Menu />
      <h1 className="mt-5">Selecteaza quiz-ul pe care doresti sa-l faci</h1>
      <Container className="d-flex justify-content-around flex-direction-row flex-wrap gap-5">
        <div
          className="box bg-info"
          onClick={() => navigate("/quiz", { state: quiz1 })}
        >
          <h1>Quiz 1</h1>
        </div>
        <div
          className="box bg-success"
          onClick={() => navigate("/quiz", { state: quiz2 })}
        >
          <h1>Quiz 2</h1>
        </div>
        <div
          className="box bg-primary"
          onClick={() => navigate("/quiz", { state: quiz3 })}
        >
          <h1>Quiz 3</h1>
        </div>
        <div
          className="box bg-warning"
          onClick={() => navigate("/quiz", { state: quiz4 })}
        >
          <h1>Quiz 4</h1>
        </div>
        <div
          className="box bg-danger"
          onClick={() => navigate("/quiz", { state: quiz5 })}
        >
          <h1>Quiz 5</h1>
        </div>

        <div
          className="box bg-info"
          onClick={() => navigate("/quiz", { state: quiz6 })}
        >
          <h1>Quiz 6</h1>
        </div>
        <div
          className="box bg-success"
          onClick={() => navigate("/quiz", { state: quiz7 })}
        >
          <h1>Quiz 7</h1>
        </div>
        <div
          className="box bg-primary"
          onClick={() => navigate("/quiz", { state: quiz8 })}
        >
          <h1>Quiz 8</h1>
        </div>
        <div
          className="box bg-warning"
          onClick={() => navigate("/quiz", { state: quiz9 })}
        >
          <h1>Quiz 9</h1>
        </div>
        <div
          className="box bg-danger"
          onClick={() => navigate("/quiz", { state: quiz10 })}
        >
          <h1>Quiz 10</h1>
        </div>

        <div
          className="box bg-info"
          onClick={() => navigate("/quiz", { state: quiz11 })}
        >
          <h1>Quiz 11</h1>
        </div>
        <div
          className="box bg-success"
          onClick={() => navigate("/quiz", { state: quiz12 })}
        >
          <h1>Quiz 12</h1>
        </div>
      </Container>
    </Wrapper>
  );
};

export default QuizMenu;
