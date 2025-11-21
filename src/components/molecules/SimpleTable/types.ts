export interface SimpleTableProps extends React.HTMLAttributes<HTMLDivElement> {
  headers: string[];
  rows: React.ReactNode[][];
}
