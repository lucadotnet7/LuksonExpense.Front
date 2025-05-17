import { IconButton, TableBody, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export interface IBudgetTableBodyRows {
  name: string;
  description: string;
  period: string;
  amount: number;
  createdAt: string;
}

export default function BudgetTableBody({
  rows,
}: {
  rows: IBudgetTableBodyRows[];
}) {
  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.description}</TableCell>
          <TableCell align="right">{row.period}</TableCell>
          <TableCell align="right">{row.amount}</TableCell>
          <TableCell align="right">{row.createdAt}</TableCell>
          <TableCell align="right">
            <IconButton aria-label="editar" color="primary">
              <RemoveRedEyeIcon />
            </IconButton>
            <IconButton aria-label="editar" sx={{ color: "#ee6a00" }}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="eliminar" sx={{ color: "red" }}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
