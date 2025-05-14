import { Button } from "@mui/material";
import styles from "./styles.module.scss";
import { iconsMap } from "../../../../utils/iconsMapper";

export interface ISidebarItemProps {
  text: string;
  icon?: string | null;
}

export default function SidebarItem({ text, icon }: ISidebarItemProps) {
  const IconComponent = icon && iconsMap[icon];

  return (
    <Button
      className={styles.item}
      variant="outlined"
      startIcon={IconComponent ? <IconComponent /> : null}
    >
      <span className={styles.textCentered}>{text}</span>
    </Button>
  );
}
