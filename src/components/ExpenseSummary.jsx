// src/components/ExpenseSummary.js
"use client"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addExpense } from '@/redux/feature/expenseSlice';
import SpendingLimitForm from './SpendingLimitForm';

const ExpenseSummary = () => {
  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: 0,
    purpose: '',
  });
 

  const limits = useSelector((state) => state.limits);
  const expenses = useSelector((state) => state.expenses);

  const dispatch = useDispatch();

  const handleAddExpense = (e) => {
    e.preventDefault();

    const expense = {
      ...newExpense,
      limit: limits[newExpense.category], // Retrieve the category limit
    };

    dispatch(addExpense(expense)); // Add expense to Redux 
    
    setNewExpense({ category: '', amount: 0, purpose: '' });
  };

  return (
    <div className="container" >
      {!limits.Groceries && <SpendingLimitForm />}
      <h2>Expense Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td title={expense.purpose}>{expense.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h3>Add Expense</h3>
        <form onSubmit={handleAddExpense}>
          <input
            name="category"
            value={newExpense.category}
            onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
            placeholder="Category"
            required
          />
          <input
            name="amount"
            type="number"
            value={newExpense.amount}
            onChange={(e) => setNewExpense({ ...newExpense, amount: parseInt(e.target.value) })}
            placeholder="Amount"
            required
          />
          <input
            name="purpose"
            value={newExpense.purpose}
            onChange={(e) => setNewExpense({ ...newExpense, purpose: e.target.value })}
            placeholder="Purpose"
            required
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseSummary;
