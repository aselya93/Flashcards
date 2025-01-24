import React from "react";
import { Button } from "antd";
import { Layout } from "antd";
const { Footer } = Layout;
import styles from "./MainPage.module.css";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.mainPage}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>Игра по флеш-картам</h1>
        <p className={styles.subtitle}>Проверь свои знания и улучши навыки!</p>
        <Button
          className={`${styles.ctaButton} ${styles["ctaButton.ant-btn-primary"]}`}
          type="primary"
          size="large"
          onClick={() => navigate("/topics")}
        >
          Давай поиграем!
        </Button>
      </div>

      <div className={styles.featuresSection}>
        <div className={styles.featureCard}>
          <h2>Увлекательные темы</h2>
          <p>Выбирай из множества категорий и изучай новое!</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Интерактивные карточки</h2>
          <p>Переворачивай карточки и проверяй свои знания.</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Прогресс и достижения</h2>
          <p>Следи за своим прогрессом и получай награды.</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
