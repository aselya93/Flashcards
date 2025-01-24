import { useNavigate } from "react-router-dom";

export default function TopicCard({ topic }) {

  const navigate = useNavigate();
  const topicsHendler = () => {
    navigate(`/cards/${topic.id}`);
  };

  return (
    <div>
      <span>{topic.name}</span>
      <div>
        <img src={topic.img} alt={topic.name} />
      </div>
      <span>123</span>
      <button onClick={topicsHendler}>Выбрать</button>

    </div>
  );
}
