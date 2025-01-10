import ExpenseForm from "@/components/ExpenseForm";
import styles from './page.module.css';
import Summary from "./summary/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <ExpenseForm />
      <Summary />
    </main>
  );
}
