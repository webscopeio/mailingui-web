import * as React from "react";
import { Text as ReactEmailText } from "@react-email/components";

type RootProps = React.ComponentPropsWithoutRef<"p">;

export interface TextProps extends RootProps {
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ style, children, ...props }) => {
  return (
    <ReactEmailText style={style} {...props}>
      {children}
    </ReactEmailText>
  );
};

export { Text };