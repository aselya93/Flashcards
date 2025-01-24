import React, { useState } from 'react';
import styles from './FlipCard.module.css';

function FlipCard({ frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.flipCard} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleFlip}
    >
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>{frontContent}</div>
        <div className={styles.flipCardBack}>{backContent}</div>
      </div>
    </div>
  );
}

export default FlipCard;