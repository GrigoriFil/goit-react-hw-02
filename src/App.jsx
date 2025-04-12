import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import styles from './App.module.css';

const storageKey = 'feedback-counts';

function App() {
  const initialFeedback = { good: 0, neutral: 0, bad: 0 };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem(storageKey);

    return savedFeedback ? JSON.parse(savedFeedback) : initialFeedback;
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedback(initialFeedback);
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  const positiveFeedback = totalFeedback > 0 ? Math.round((good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positive={positiveFeedback}
      />
      ) : (
          <Notification message="No feedback yet" />
  )}
    </>
  );
}

export default App;