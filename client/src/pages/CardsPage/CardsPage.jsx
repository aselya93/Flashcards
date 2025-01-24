import React from "react";
import CardList from "../../widgets/CardList/CardList";
import { useParams } from "react-router-dom";

function CardsPage() {
  const { topicId } = useParams();
  return (
    <div>
      <CardList topicId={topicId} />
    </div>
  );
}

export default CardsPage;


