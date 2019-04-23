import React from 'react';
import PropTypes from 'prop-types';

function DayData(props) {
  return (
    <div>
      <h3>{props.day}</h3>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}

DayData.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default DayData;
