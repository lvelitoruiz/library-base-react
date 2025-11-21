export interface ListItemProps {
  title: string;
  description?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
}
