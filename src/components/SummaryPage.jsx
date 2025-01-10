'use client'

import { useGetExpensesQuery } from '@/redux/feature/expense.api'
import styles from './ExpenseSummary.module.css'

export default function ExpenseSummary() {
//   const expenses = useSelector((state) => state.expenses.expenses)
const {data:expenses, isLoading} = useGetExpensesQuery()

console.log(expenses)

  const groupedExpenses = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date).toLocaleDateString()
    if (!acc[date]) {
      acc[date] = {}
    }
    if (!acc[date][expense.category]) {
      acc[date][expense.category] = []
    }
    acc[date][expense.category].push(expense)
    return acc
  }, {} )

  return (
    <div className={styles.summary}>
      <h2 className={styles.title}>Expense Summary</h2>
      {Object.entries(groupedExpenses).map(([date, categories]) => (
        <div key={date} className={styles.dateGroup}>
          <h3 className={styles.date}>{date}</h3>
          {Object.entries(categories).map(([category, expenses]) => (
            <div key={category} className={styles.category}>
              <h4 className={styles.categoryTitle}>{category}</h4>
              {expenses.map((expense) => (
                <div key={expense.id} className={styles.expense} title={expense.purpose}>
                  ${expense.amount.toFixed(2)} - {expense.purpose}
                </div>
              ))}
            </div>
          ))}
          <div className={styles.total}>
            Total: $
            {Object.values(categories)
              .flat()
              .reduce((sum, expense) => sum + expense.amount, 0)
              .toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}

