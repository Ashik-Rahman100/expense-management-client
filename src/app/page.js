import ExpenseSummary from "@/components/ExpenseSummary";
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <ExpenseForm />
      <Summary /> */}
      <ExpenseSummary />
    </main>
  );
}
