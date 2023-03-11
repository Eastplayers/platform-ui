export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  name?: string;
  size?: CheckboxSizes;
}

export enum CheckboxSizes {
  MEDIUM = "medium",
  BIG = "big",
}
