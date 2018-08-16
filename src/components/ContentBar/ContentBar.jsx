import React from 'react';
import PropTypes from 'prop-types';
import './ContentBar.css';

function ContentBar(props) {
  const { children } = props;

  return (
    <div className="Content-bar">
      { children }
    </div>
  );
}

ContentBar.propTypes = {
  children: PropTypes.element,
};

ContentBar.defaultProps = {
  children: null,
};

export default ContentBar;
