import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { message as antMessage } from "antd";
import CardApi from "../../entities/card/CardApi";
import QuestioniCard from "../../widgets/QuestioniCard/QuestioniCard";
import styles from './CardsPage.module.css'; // Импортируем стили

function CardsPage() {
  const { topicId } = useParams();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  async function flashcardsByIdTopicHandler() {
    setLoading(true);
    try {
      const { data } = await CardApi.getCardsByIdTopic(topicId);
      const { data: newdata, error, statusCode, message } = data;

      if (error) {
        antMessage.error(error);
        return;
      }

      antMessage.success(message);
      setCards(newdata);
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

  return (
    <div className={styles.cardsPage}>
      <h1 className={styles.title}>Карточки для темы {topicId}</h1>
      <div className={styles.cardsSection}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <QuestioniCard
              question={card.question}
              correctAnswer={card.correctAnswer}
              option1={card.option1}
              option2={card.option2}
              option3={card.option3}
              option4={card.option4}
              img={card.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsPage;