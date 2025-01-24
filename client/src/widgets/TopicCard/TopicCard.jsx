import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function TopicCard({ topic }) {
  const navigate = useNavigate
  const topicsHendler = () => {
    navigate(`/cards/${topic.id}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid red",
        width: "500px",
        height: "500px",
      }}
    >
      <span>{topic.name}</span>
      <img src={topic.img} alt={topic.name} />
      <Button onClick={topicsHendler}>Выбрать</Button>
    </div>
  );
}