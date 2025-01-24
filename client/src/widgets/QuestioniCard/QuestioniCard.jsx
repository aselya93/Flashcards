/* eslint-disable react/prop-types */
import { Button } from "antd";
import React from "react";
import FlipCard from "../FlipCard/FlipCard";
import { message as antMessage } from "antd";

function QuestioniCard({
  question,
  correctAnswer,
  option1,
  option2,
  option3,
  option4,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Состояние для выбранного ответа
  const [isCorrect, setIsCorrect] = useState(false); // Состояние для проверки правильности ответа
  const [isAnswered, setIsAnswered] = useState(false); // блокировка внопок

  const answerClickHandler = (answer) => {
    try {
      if (isAnswered) return;
      setSelectedAnswer(answer);
      setIsAnswered(true);

      if (answer === correctAnswer) {
        setIsCorrect(true);
        antMessage.success("Правильно! Молодец!");
      }
    } catch (error) {
      setIsCorrect(false);
      antMessage.error("Иди учись!");
    }
  };

  const frontContent = <div>{question}</div>;

  const backContent = (
    <div>
      <Button onClick={() => handleAnswerClick(option1)} disabled={isAnswered}>
        {option1}
      </Button>
      <Button onClick={() => handleAnswerClick(option2)} disabled={isAnswered}>
        {option2}
      </Button>
      <Button onClick={() => handleAnswerClick(option3)} disabled={isAnswered}>
        {option3}
      </Button>
      <Button onClick={() => handleAnswerClick(option4)} disabled={isAnswered}>
        {option4}
      </Button>

      {isCorrect && (
        <div style={{ marginTop: "10px", color: "green" }}>
          Правильный ответ: {correctAnswer}
        </div>
      )}

      {selectedAnswer && !isCorrect && (
        <div style={{ marginTop: "10px", color: "red" }}>
          Иди учись! Правильный ответ: {correctAnswer}
        </div>
      )}
    </div>
  );

  return <FlipCard frontContent={frontContent} backContent={backContent} />;
}

export default QuestioniCard;
