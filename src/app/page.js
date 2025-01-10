import ExpenseForm from "@/components/ExpenseForm";
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <ExpenseForm />
    </main>
  );
}
