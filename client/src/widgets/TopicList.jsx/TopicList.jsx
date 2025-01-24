import React from "react";
import TopicCard from "../TopicCard/TopicCard";
import styles from "./TopicList.module.css";

function TopicList({ topics }) {
  return (
    <div className={styles.style}>
      {topics.length === 0 ? (
        <h3>No topics</h3>
      ) : (
        topics.map((topic) => <TopicCard key={topic.id} topic={topic} />)
      )}
    </div>
  );
}

export default TopicList;
