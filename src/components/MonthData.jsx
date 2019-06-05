import React from 'react';
import PropTypes from 'prop-types';

function MonthData(props) {
  return (
    <div>
      <style jsx>{`
        .month {
          margin-bottom: 0;
          line-height: 30px;
          padding-left: 5px;
          position: relative;
          background: orange;
          height: 0;
          border-left: 25px solid transparent;
          border-right: 250px solid transparent;
          border-top: 55px solid yellow;
          box-shadow: 0 1px 0 2px rgba(0,0,0,.75);
        }
        .month span {
          font-weight: 600;
          font-size: 30px;
          position: absolute;
          bottom: 6px;
          color: black;
          text-shadow: 0 0 2px rgba(255,255,255,.75);
        }
      `}</style>
      <p className="month"><span>{props.month}</span></p>
      <p>{props.selection}</p>
    </div>
  );
}

MonthData.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
};

export default MonthData;
