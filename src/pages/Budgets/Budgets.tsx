import styles from "./styles.module.scss";
import { Box, Divider } from "@mui/material";
import Header from "./components/Header/Header";
import BudgetTable from "./components/BudgetTable/BudgetTable";

export default function Budgets() {
  return (
    <div className={styles.container}>
      <Box component="section" className={styles.content}>
        <Header />
        <Divider />
        <BudgetTable />
      </Box>
    </div>
  );
}
