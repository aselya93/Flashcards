import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "antd";
import styles from "./Navigation.module.css";

function Navigation() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.navLeft}>
          <Button className={styles.navButton} onClick={() => navigate("/")}>
            Главная
          </Button>
          <Button
            className={styles.navButton}
            onClick={() => navigate("/topics")}
          >
            Темы викторин
          </Button>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Navigation;
