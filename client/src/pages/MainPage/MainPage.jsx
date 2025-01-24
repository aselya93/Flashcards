import React from "react";
import { Layout } from "antd";
import styles from "./MainPage.module.css";



function MainPage() {
  return (
    <div className={styles.mainPage}>
      <h1>Добро пожаловать!</h1>
      <p>Это главная страница с красивым фоном.</p>
    </div>
  );
}
export default MainPage;
