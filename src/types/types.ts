export type TypeTab = { tab: string };
export type TypeFilter = {
  label: string;
  name: string;
  checked: boolean;
};
export type TypeAction = { type: string; payload?: string };
export type TypeState = {
  tab: { tab: string };
  filter: TypeFilter[];
};
