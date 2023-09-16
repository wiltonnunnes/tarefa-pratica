import React, { ReactNode, HTMLAttributes } from "react";
import styles from "./styles.module.css";

export default function Card({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={styles.card} {...rest}>{children}</div>;
}