export type InputPropsType = {
  name: string;
  className?: string;
  width?: string;
  placeholder?: string;
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
