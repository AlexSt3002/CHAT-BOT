import { useState } from "react";
import Wrapper from "../../components/Wraper";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { quiz } from "../../Request/Api";

const Exercise = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [show, setShow] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("");

  const location = useLocation();
  const allQuestions = location.state;
  const questions = allQuestions.slice(0, 10).sort(() => Math.random() - 0.5);

  const handleAnswer = async (selectedAnswer: string, question: string) => {
    const res = await quiz(question, selectedAnswer);
    console.log(res);

    if (res.answer == true) {
      setScore(score + 1);
      setType("success");
      setMessage("Answer was correct");
      setShow(true);
    } else {
      setType("wrong");
      setMessage("Answer was wrong");
      setShow(true);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(questions.length);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <h1 className="mt-4 text-center">Quiz</h1>
        {show &&
          (type == "success" ? (
            <p className="show text-white bg-success w-25 text-center">
              {message}
            </p>
          ) : (
            <p className="show text-white bg-danger w-25 text-center">
              {message}
            </p>
          ))}
        <p className="align-self-end">
          Your score is {score}/{questions.length}
        </p>
        {currentQuestion < questions.length ? (
          <div>
            <h2 className="mt-4">{questions[currentQuestion].question}</h2>
            <ul className="list-group">
              {questions[currentQuestion].answers.map(
                (option: string, index: number) => (
                  <li
                    key={index}
                    className="list-group-item pointer"
                    onClick={() =>
                      handleAnswer(option, questions[currentQuestion].question)
                    }
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="mt-4">Quiz finished!</h2>
            <p>
              Your score is {score}/{questions.length}
            </p>
            <Link to="/" className="btn btn-primary">
              Back to home
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Exercise;
