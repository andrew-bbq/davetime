import React from 'react';
import styles from './SplashPage.module.css';

const SplashPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>YoLetsChill</h1>
      <p className={styles.description}>
        Plan fun events with friends when everyone’s actually free.<br />
        No group chats. Just vibes.
      </p>
      <button className={styles.ctaButton}>Start Planning!</button>

      <div className={styles.infoSection}>
        <p>✔️ See when your friends are free</p>
        <p>📆 Suggest times that work for everyone</p>
        <p>🎉 Lock in plans without the back and forth</p>
      </div>
    </div>
  );
};

export default SplashPage;
