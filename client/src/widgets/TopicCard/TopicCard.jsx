export default function TopicCard({ topic }) {
  const topicsHendler = () => {}
    

  return (
    <div>
      <span>{topic.name}</span>,<div>{topic.img}</div>,<span>123</span><button onClick={topicsHendler}>Выбрать</button>
    </div>
  );
}
