import React from 'react';
import PropTypes from 'prop-types';

function DayData(props) {
  return (
    <div>
      <style jsx>{`
        .day {
          max-width: 165px;
          margin: 0 auto;
          line-height: 30px;
          padding-left: 5px;
          position: relative;
          background: orange;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 150px solid transparent;
          border-top: 55px solid yellow;
          box-shadow: 0 1px 0 2px rgba(0,0,0,.75);
        }
        .day span {
          font-weight: 600;
          font-size: 30px;
          position: absolute;
          bottom: 6px;
          color: black;
          text-shadow: 0 0 2px rgba(255,255,255,.75);
        }
        .day-content {
          max-width: 319px;
          margin: 0 auto;
          background-color: lightgreen;
          padding: 15px 10px;
          margin-bottom: 15px;
          background: linear-gradient(to bottom, rgba(144,238,144,1) 70%,rgba(144,238,144,.25) 100%);
        }
      `}</style>
      <p className="day"><span>{props.day}</span></p>
      <div className="day-content">
        <p>Location: {props.location}</p>
        <p>Hours: {props.hours}</p>
        <p>Booth: {props.booth}</p>
      </div>
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
