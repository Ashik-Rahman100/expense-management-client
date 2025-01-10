'use client'
// src/components/SpendingLimitForm.js
import { setLimits } from '@/redux/feature/limitSlice';
import { useState } from 'react';

import { useDispatch } from 'react-redux';


const SpendingLimitForm = () => {
  const [limits, setLimitValues] = useState({
    Groceries: 0,
    Transportation: 0,
    Healthcare: 0,
    Utility: 0,
    Charity: 0,
    Miscellaneous: 0,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLimits(limits)); // Update Redux store with new limits
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLimitValues((prevLimits) => ({
      ...prevLimits,
      [name]: parseInt(value) || 0,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(limits).map((category) => (
        <div key={category}>
          <label>{category} Spending Limit: </label>
          <input
            type="number"
            name={category}
            value={limits[category]}
            onChange={handleChange}
            min="0"
          />
        </div>
      ))}
      <button type="submit">Save Limits</button>
    </form>
  );
};

export default SpendingLimitForm;
