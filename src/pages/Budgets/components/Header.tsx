import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "../styles.module.scss";

export default function Header() {
  return (
    <Box className={styles.header}>
      <Typography variant="h4">Presupuestos</Typography>
      <Button variant="contained" endIcon={<AddIcon />}>
        Agregar
      </Button>
    </Box>
  );
}
