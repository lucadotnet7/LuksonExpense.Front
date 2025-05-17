import { TableCell, TableHead, TableRow } from "@mui/material";

export default function BudgetTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Nombre</TableCell>
        <TableCell align="right">Descripción</TableCell>
        <TableCell align="right">Período</TableCell>
        <TableCell align="right">Monto</TableCell>
        <TableCell align="right">Fecha creación</TableCell>
        <TableCell align="right">Acciones</TableCell>
      </TableRow>
    </TableHead>
  );
}
