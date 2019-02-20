import React from 'react';
import PropTypes from 'prop-types';

const DividedBtn = ({ onClick }) => (
    <button onClick={ onClick }>÷</button>
);

DividedBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default DividedBtn;