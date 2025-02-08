import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Credits from "./pages/Credits";
import Learn from "./pages/Learn";
import QuizMenu from "./pages/Quiz/QuizMenu";
import Exercise from "./pages/Quiz/Exercise";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/practice" element={<QuizMenu />} />
        <Route path="/quiz" element={<Exercise />} />
      </Routes>
    </>
  );
}

export default App;
