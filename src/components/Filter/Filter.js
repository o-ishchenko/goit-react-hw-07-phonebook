import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

let filterId = nanoid();
const Filter = ({ value, onChange }) => (
  <div className={s.filter}>
    <label htmlFor={filterId}>Find contacts by name</label>
    <input
      type="text"
      name="filter"
      id={filterId}
      value={value}
      onChange={onChange}
    />
  </div>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
