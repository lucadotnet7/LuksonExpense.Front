import { Box, Modal } from '@mui/material'
import AddBudgetForm from './AddBudgetForm';
import useBudget from '../../../hooks/budgets/useBudget';
import { useEffect } from 'react';

export interface IAddBudgetProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddBudget({open, setOpen}: IAddBudgetProps) {
  const { content } = useBudget();
  
  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    if(content)
      handleClose();

  }, [content]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <AddBudgetForm />
        </Box>
      </Modal>
    </>
  )
}
