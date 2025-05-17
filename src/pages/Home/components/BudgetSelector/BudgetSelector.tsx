import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import styles from "./styles.module.scss";

const months: {value: number, description: string}[] = [
  { value: 1, description: 'Enero' },
  { value: 2, description: 'Febrero' },
  { value: 3, description: 'Marzo' },
  { value: 4, description: 'Abril' },
  { value: 5, description: 'Mayo' },
  { value: 6, description: 'Junio' },
  { value: 7, description: 'Julio' },
  { value: 8, description: 'Agosto' },
  { value: 9, description: 'Septiembre' },
  { value: 10, description: 'Octubre' },
  { value: 11, description: 'Noviembre' },
  { value: 12, description: 'Diciembre' },
];

const years: {value: number, description: string}[] = [
  { value: 2025, description: '2025' },
  { value: 2024, description: '2024' }
];

export default function BudgetSelector() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleChangeMonth = (event: SelectChangeEvent) => {
    setMonth(event.target.value);
  };

  const handleChangeYear = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  return (
    <Box className={styles.budgetSelectorContainer}>
      <FormControl size="small" sx={{ width: 120 }}>
        <InputLabel id="month-select-label">Mes</InputLabel>
        <Select
          labelId="month-select-label"
          id="month-select"
          value={month}
          label="Mes"
          onChange={handleChangeMonth}
        >
          {
            months.map((month) => (
              <MenuItem key={month.value} value={month.value} defaultChecked={month.value === 1}>{month.description}</MenuItem>
            ))
          }
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ width: 120 }}>
        <InputLabel id="year-select-label">Año</InputLabel>
        <Select
          labelId="year-select-label"
          id="year-select"
          value={year}
          label="Año"
          onChange={handleChangeYear}
        >
          {
            years.map((year) => (
              <MenuItem key={year.value} value={year.value} defaultChecked={year.value === 2025}>{year.description}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}
