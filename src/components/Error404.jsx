import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props) {
  return (
    <div>
      <h2>The page {props.location.pathname} doesn't exist.</h2>
      <h3>Return <Link to='/'>home</Link>?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;