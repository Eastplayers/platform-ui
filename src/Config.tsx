import { FC, Fragment, ReactNode } from "react";
import "./styles/main.scss";

interface ConfigProps {
  children: ReactNode;
}

const Config: FC<ConfigProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default Config;
