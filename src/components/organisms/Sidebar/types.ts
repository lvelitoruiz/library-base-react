export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

export interface SidebarProps {
  items: SidebarItem[];
  collapsed?: boolean;
  onToggle?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}
