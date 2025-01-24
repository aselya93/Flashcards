export default function TopicCard({ topic }) {
  const topicsHendler = () => {};

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
      <img src={topic.img} alt={topic.name} />,<span>123</span>
      {/* <button onClick={topicsHendler}>Выбрать</button> */}
    </div>
  );
}
