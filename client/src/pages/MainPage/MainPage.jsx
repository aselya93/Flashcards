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
          className={styles.ctaButton}
          type="primary"
          size="large"
          onClick={() => navigate("/topics")}
        >
          Давай поиграем!
        </Button>
      </div>
    </div>
  );
}

export default MainPage;
