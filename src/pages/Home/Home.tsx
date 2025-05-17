import styles from "./styles.module.scss";
import InformationCard from "./components/InformationCard/InformationCard";
import BudgetSelector from "./components/BudgetSelector/BudgetSelector";

export default function Home() {
  return (
    <section>
      <header className={styles.header}>
        <h2>Dashboard</h2>
        <BudgetSelector />
      </header>
      <div className={styles.content}>
        <div className={styles.cards}>
          <InformationCard title="Balance" description="50 transacciones realizadas" price={2300123} buttonText="Var detalle" />
          <InformationCard title="Gastos" description="45 transacciones realizadas" price={1150061} buttonText="Var detalle" />
          <InformationCard title="Ingresos" description="50 transacciones realizadas" price={1150061} buttonText="Var detalle" />
        </div>
      </div>
    </section>
  );
}
