import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "../../styles.module.scss";
import { useState } from "react";
import AddBudgetModal from "../BudgetForm/AddBudgetModal";

export default function Header() {
  const [addBudget, setAddBudget] = useState(false);
  
  const handleAddBudget = () => {
    setAddBudget(true);
  }

  return (
    <Box className={styles.header}>
      <Typography variant="h4">Presupuestos</Typography>
      <Button variant="contained" endIcon={<AddIcon />} onClick={handleAddBudget}>
        Agregar
      </Button>
      <AddBudgetModal open={addBudget} setOpen={setAddBudget} />
    </Box>
  );
}
