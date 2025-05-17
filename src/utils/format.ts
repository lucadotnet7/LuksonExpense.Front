export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
      }).format(price);
}

export function formatDateInput(value: string): string {
  // Eliminar todo lo que no sea dígito
  const digits = value.replace(/\D/g, '');

  let formatted = '';

  if (digits.length <= 2) {
    formatted = digits;
  } else if (digits.length <= 4) {
    formatted = `${digits.slice(0, 2)}-${digits.slice(2)}`;
  } else if (digits.length <= 8) {
    formatted = `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4)}`;
  } else {
    formatted = `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4, 8)}`;
  }

  return formatted;
}