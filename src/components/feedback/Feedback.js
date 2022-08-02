import React from 'react';
import Statistics from '../statisctics/Statisctics';
import FeedbackOptions from '../feedback-options/FeedbackOptions ';
import Section from '../section-title/Section';
import Notification from '../notification/Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evnt => {
    const name = evnt.target.name;
    this.setState(prevValue => ({
      [name]: prevValue[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const result = bad + neutral + good;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const percent = Math.ceil(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    const positiveFeedback = `${percent}%`;
    return positiveFeedback;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, bad, neutral } = this.state;
    const result = this.countTotalFeedback();
    const positivPercent = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {result === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={result}
              positivePercentage={positivPercent}
            />
          </Section>
        )}
      </>
    );
  }
}

export default Feedback;
