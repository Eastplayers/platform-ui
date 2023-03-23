import { GroupBase } from "react-select";
import { Sizes } from "types/common";

declare module "react-select/dist/declarations/src/Select" {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    label?: string;
    error?: string;
    multiple?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    searchable?: boolean;
    size?: Sizes;
  }
}
