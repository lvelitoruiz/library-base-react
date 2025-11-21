import { InputProps } from '../../atoms/Input/types';

export interface FormFieldProps extends InputProps {
  label: string;
  id: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}
