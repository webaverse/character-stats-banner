import React from 'react';
import styles from './CharacterStatsBanner.module.css';

const CharacterStatsBanner = () => {
  return (
    <div
      className={styles.menu}
      width={600}
      height={400}
  >
      <h1>Character Stats</h1>
      <p>HP: 100</p>
      <p>MP: 82</p>
      <p>Inventory: 2</p>
  </div>
  );
};
export default CharacterStatsBanner;