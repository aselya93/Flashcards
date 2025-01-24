import { Button } from 'antd';
import React from 'react';

function QuestioniCard({ question, correctAnswer, option1, option2, option3, option4 }) {

    const frontContent = <div>{question}</div>;

    const backContent = (
        <div>
          <Button onClick={() => alert(option1 === correctAnswer ? "Correct!" : "Wrong!")}>
            {option1}
          </Button>
          <Button onClick={() => alert(option2 === correctAnswer ? "Correct!" : "Wrong!")}>
            {option2}
          </Button>
          <Button onClick={() => alert(option3 === correctAnswer ? "Correct!" : "Wrong!")}>
            {option3}
          </Button>
          <Button onClick={() => alert(option4 === correctAnswer ? "Correct!" : "Wrong!")}>
            {option4}
          </Button>
        </div>
      );

    return (
        <FlipCard frontContent={frontContent} backContent={backContent} />;
    );
}

export default QuestioniCard;