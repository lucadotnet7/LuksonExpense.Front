import { Paper, Table, TableContainer } from "@mui/material";

import BudgetTableHead from "./BudgetTableHead";
import BudgetTableBody, { IBudgetTableBodyRows } from "./BudgetTableBody";

function createData(
  name: string,
  description: string,
  period: string,
  amount: number,
  createdAt: string
) {
  return {
    name,
    description,
    period,
    amount,
    createdAt,
  } as IBudgetTableBodyRows;
}

const rows: IBudgetTableBodyRows[] = [
  createData(
    "Presupuesto 1",
    "Presupuesto definido solo para test",
    "01/05/2025 - 31/05/2025",
    2000000,
    "15/05/2025"
  ),
  createData(
    "Presupuesto 1",
    "Presupuesto definido solo para test",
    "01/05/2025 - 31/05/2025",
    2000000,
    "15/05/2025"
  ),
  createData(
    "Presupuesto 1",
    "Presupuesto definido solo para test",
    "01/05/2025 - 31/05/2025",
    2000000,
    "15/05/2025"
  ),
  createData(
    "Presupuesto 1",
    "Presupuesto definido solo para test",
    "01/05/2025 - 31/05/2025",
    2000000,
    "15/05/2025"
  ),
  createData(
    "Presupuesto 1",
    "Presupuesto definido solo para test",
    "01/05/2025 - 31/05/2025",
    2000000,
    "15/05/2025"
  ),
];

export default function BudgetTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <BudgetTableHead />
        <BudgetTableBody rows={rows} />
      </Table>
    </TableContainer>
  );
}
