import { IconButton, styled, TableBody, TableRow } from "@mui/material";
import { StyledTableCell } from "./StyledTableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
        <StyledTableRow key={row.name}>
          <StyledTableCell component="th" scope="row">
            {row.name}
          </StyledTableCell>
          <StyledTableCell align="right">{row.description}</StyledTableCell>
          <StyledTableCell align="right">{row.period}</StyledTableCell>
          <StyledTableCell align="right">{row.amount}</StyledTableCell>
          <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
          <StyledTableCell align="right">
            <IconButton aria-label="editar" color="primary">
              <RemoveRedEyeIcon />
            </IconButton>
            <IconButton aria-label="editar" sx={{ color: "#ee6a00" }}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="eliminar" sx={{ color: "red" }}>
              <DeleteIcon />
            </IconButton>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
}
