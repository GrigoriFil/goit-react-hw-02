import styles from './Options.module.css';

function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  console.log(`Options Prop: totalFeedback = ${totalFeedback}`);
  console.log(`Options Condition Check: totalFeedback > 0 is ${totalFeedback > 0}`);

  return (
    <div className={styles.optionsContainer}>
      <button className={styles.button} onClick={() => updateFeedback('good')}>Good</button>
      <button className={styles.button} onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={styles.button} onClick={() => updateFeedback('bad')}>Bad</button>

      {totalFeedback > 0 ? (
        <button className={styles.button} onClick={resetFeedback}>
          Reset
        </button>
      ) : (
        null
      )}


    </div>
  );
}

export default Options;