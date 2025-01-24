import React, { useState, useEffect } from "react";
import TopicList from "../../widgets/TopicList.jsx/TopicList";
import TopicApi from "../../entities/Topic/TopicApi";


function TopicPage() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    loadTopics();
  }, []);

  const loadTopics = async () => {
    try {
      const { name, img } = await TopicApi.getAllTopic();
      //   const data = await TopicApi.getAllTopic();
      setTopics({ name, img });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TopicList topics={topics} />
    </div>
  );
}

export default TopicPage;
