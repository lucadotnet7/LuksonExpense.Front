import { Typography } from "@mui/material";
import styles from "./styles.module.scss";

export interface IErrorProps {
  message: string;
}

export default function Error({ message }: IErrorProps) {
  return (
    <Typography
      variant="caption"
      gutterBottom
      sx={{ display: "block" }}
      className={styles.span}
    >
      {message}
    </Typography>
  );
}
