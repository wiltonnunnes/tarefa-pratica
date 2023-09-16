import React, { ReactNode } from "react";
import styles from './styles.module.css'

interface BadgeProps {
  children?: ReactNode;
  color?: string;
}

const Badge = ({
  children,
  color = 'red'
}: BadgeProps) => (
  <span className={styles.badge} style={{backgroundColor: color}}>{children}</span>
);

export default Badge;