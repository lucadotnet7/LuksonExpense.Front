import { TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "./StyledTableCell";

export default function BudgetTableHead() {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>Nombre</StyledTableCell>
        <StyledTableCell align="right">Descripción</StyledTableCell>
        <StyledTableCell align="right">Período</StyledTableCell>
        <StyledTableCell align="right">Monto</StyledTableCell>
        <StyledTableCell align="right">Fecha creación</StyledTableCell>
        <StyledTableCell align="right">Acciones</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}
