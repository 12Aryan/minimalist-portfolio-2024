export interface NavItemsType {
  name: string;
  link: string;
  icon?: React.ReactElement;
}

export interface GridItemType {
  id: number;
  title: string;
  description: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}
