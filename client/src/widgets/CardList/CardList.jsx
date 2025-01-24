import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { message as antMessage } from "antd";
import CardApi from "../../entities/card/CardApi";
import QuestioniCard from "../QuestioniCard/QuestioniCard";

function CardList() {
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(false);

  async function flashcardsByIdTopicHandler() {
    setLoading(true);
    try {
      const response = await CardApi.getCardsByIdTopic(topicId);
      const { data, error, statusCode, message } = response;
      if (error) {
        antMessage.error(error);
        return;
      }
      antMessage.success(message);
      if (statusCode === 200) {
        setCards(data);
      }
    } catch (error) {
      console.log(error);
      antMessage.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    flashcardsByIdTopicHandler();
  }, [topicId]);

  if (loading) {
    return <div>Подожди!Не уходи...</div>;
  }

  if (!cards || cards.length === 0) {
    return <div>Вопросы не найдены </div>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
    {cards.slice(0, 4).map((card) => (
      <QuestioniCard
        key={card.id}
        question={card.question}
        correctAnswer={card.correctAnswer}
        option1={card.option1}
        option2={card.option2}
        option3={card.option3}
        option4={card.option4}
      />
    ))}
  </div>
  );
}

export default CardList;
