import React from 'react';
import PropTypes from 'prop-types';

function MonthData(props) {
  return (
    <div>
      <hr />
      <p>Month: {props.month}</p>
      <p>Selection: {props.selection}</p>
    </div>
  );
}

MonthData.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
};

export default MonthData;
