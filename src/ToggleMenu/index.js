import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ToggleMenu = React.forwardRef(({ fixed, onToggleMenu, open, key = 'ToggleMenu' }, ref) => (
  <button ref={ref} className="ToggleMenu" onClick={onToggleMenu} data-open={open} data-fixed={fixed} key={key}>
    <span className="bar-top" />
    <span className="bar-mid" />
    <span className="bar-bot" />
  </button>
));

ToggleMenu.propTypes = {
  onToggleMenu: PropTypes.func,
  open: PropTypes.bool,
  fixed: PropTypes.bool,
};

export default ToggleMenu;
