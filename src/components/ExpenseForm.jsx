'use client'

import { useAddExpensessMutation } from '@/redux/feature/expense.api'
import { useState } from 'react'
import styles from './ExpenseForm.module.css'

const categories = ['Groceries', 'Transportation', 'Healthcare', 'Utility', 'Charity', 'Miscellaneous']

export default function ExpenseForm() {
    const  [addExpenses, {isLoading}] = useAddExpensessMutation()
//   const dispatch = useDispatch()
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [purpose, setPurpose] = useState('')
//   const spendingLimits = useSelector((state) => state.expenses.spendingLimits)

  const handleSubmit =async  (e) => {
    e.preventDefault()
    if (!category || !amount || !purpose) return

    const numAmount = parseFloat(amount)
    if (isNaN(numAmount)) return

    // if (numAmount > spendingLimits[category]) {
    //   alert(`Expense exceeds the spending limit for ${category}`)
    //   return
    // }

    const newExpense = {
    //   id: Date.now().toString(),
      category,
      amount: numAmount,
      purpose,
    //   date: new Date().toISOString(),
    };

    console.log("expense", newExpense)

    await addExpenses(newExpense);

    setCategory('')
    setAmount('')
    setPurpose('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select
        className={styles.select}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input
        className={styles.input}
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        className={styles.input}
        type="text"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        placeholder="Purpose"
        required
      />
      <button className={styles.button} type="submit">
        Add Expense
      </button>
    </form>
  )
}

