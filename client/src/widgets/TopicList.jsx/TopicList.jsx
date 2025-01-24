import React from "react";
import TopicCard from "../TopicCard/TopicCard";

function TopicList({ topics }) {
  return (
    <>
      {topics.length === 0 ? (
        <h3>No topics</h3>
      ) : (

    
        topics.map((topic) => <TopicCard key={topic.id} topic={topic} />)

      )}
    </>
  );
}

export default TopicList;
