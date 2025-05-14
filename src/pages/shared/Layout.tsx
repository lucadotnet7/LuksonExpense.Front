import Sidebar from "../../components/layout/Sidebar/Sidebar.component";
import styles from "./styles.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <section className={styles.page}>{children}</section>
    </main>
  );
}
