import React, { FC, ReactNode, CSSProperties } from "react";
import { useTheme } from "../../hooks/useTheme";
import { Button as ReactEmailButton } from "./ReactEmailButtonFork";
import { ButtonVariantKey } from "@mailingui/types";

type sizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface ButtonProps {
  href: string;
  children: ReactNode;
  color?: CSSProperties["color"];
  borderColor?: CSSProperties["color"];
  rounded?: number;
  size?: sizes;
  backgroundColor?: CSSProperties["backgroundColor"];
  variant?: ButtonVariantKey;
}

const Button: FC<ButtonProps> = ({
  rounded = 8,
  href,
  color,
  size = "md",
  borderColor,
  children,
  backgroundColor,
  variant = "primary",
}) => {
  const theme = useTheme();

  const styles: CSSProperties = {
    backgroundColor:
      backgroundColor ?? theme?.buttonVariants?.[variant]?.backgroundColor,
    color: color ?? theme?.buttonVariants?.[variant]?.color,
    borderRadius: theme?.borderRadius ?? rounded,
    fontSize: sizeVariants[size].fontSize,
    border: borderColor
      ? `1px solid ${borderColor}`
      : `1px solid ${theme?.buttonVariants?.[variant]?.borderColor}` ?? "none",
  };

  return (
    <ReactEmailButton
      pX={sizeVariants[size].paddingX}
      pY={sizeVariants[size].paddingY}
      href={href}
      style={styles}
    >
      {children}
    </ReactEmailButton>
  );
};

const sizeVariants: Record<
  sizes,
  { fontSize: number; paddingX: number; paddingY: number }
> = {
  xs: {
    fontSize: 14,
    paddingX: 12,
    paddingY: 8,
  },
  sm: {
    fontSize: 14,
    paddingX: 14,
    paddingY: 10,
  },
  md: {
    fontSize: 16,
    paddingX: 16,
    paddingY: 10,
  },
  lg: {
    fontSize: 16,
    paddingX: 20,
    paddingY: 12,
  },
  xl: {
    fontSize: 16,
    paddingX: 24,
    paddingY: 14,
  },
  "2xl": {
    fontSize: 18,
    paddingX: 24,
    paddingY: 16,
  },
};

export { Button, type ButtonProps };
