export interface InputGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  children: React.ReactNode;
}
