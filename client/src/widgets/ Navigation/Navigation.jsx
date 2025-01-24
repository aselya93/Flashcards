import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "antd";
import {
  HomeOutlined,
  UnorderedListOutlined,
  FileTextOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import styles from "./Navigation.module.css"; // Импортируем стили как объект

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.navLeft}>
        <Link to="/" className={styles.navBrand}>
          <span role="img" aria-label="logo">
            🚀
          </span>{" "}
          QuizMaster
        </Link>
      </div>
      <div className={styles.navRight}>
        <Link to="/">
          <Button
            type="link"
            className={styles.navButton}
            icon={<HomeOutlined />}
          >
            Главная
          </Button>
        </Link>
        <Link to="/topics">
          <Button
            type="link"
            className={styles.navButton}
            icon={<UnorderedListOutlined />}
          >
            Темы
          </Button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Navigation;
