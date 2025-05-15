import { Outlet } from "react-router";
import Sidebar from "../../components/layout/Sidebar/Sidebar.component";
import styles from "./styles.module.scss";

export default function Layout() {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <section className={styles.page}>
        <Outlet />
      </section>
    </main>
  );
}
