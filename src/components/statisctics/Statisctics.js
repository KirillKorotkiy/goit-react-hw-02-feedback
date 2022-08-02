import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({good, bad, neutral, total, positivePercentage}) => {
    return (
        <div>
          <p> Good: {good}</p>
          <p> Neutral: {neutral} </p>
          <p> Bad: {bad} </p>
          <p> Total: {total}</p>
          <p> Positive feedback: {positivePercentage}</p>
        </div>
    )
}

export default Statistics;


Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number
}