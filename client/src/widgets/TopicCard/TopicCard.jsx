
import React, { useState } from "react";




import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function TopicCard({ topic }) {
   const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()
  
  const topicsHendler = () => {
    navigate(`/cards/${topic.id}`);

  };

  return (
    <div
      style={{
        marginLeft: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid red",
        width: "500px",
        height: "500px",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: isHovered
          ? "0 8px 16px rgba(0, 0, 0, 0.3)"
          : "0 4px 8px rgba(0, 0, 0, 0.2)",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onClick={topicsHandler}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={(e) => e.key === "Enter" && topicsHandler()}
      tabIndex={0}
    >
      <img
        src={topic.img}
        alt={topic.name}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <span style={{ fontSize: "1.5rem", margin: "10px 0" }}>{topic.name}</span>
    </div>
  
  );
}