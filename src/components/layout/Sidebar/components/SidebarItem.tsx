import { Button } from "@mui/material";
import styles from "./styles.module.scss";
import { iconsMap } from "../../../../utils/iconsMapper";
import { useNavigate } from "react-router";

export interface ISidebarItemProps {
  text: string;
  icon?: string | null;
  route: string;
}

export default function SidebarItem({ text, icon, route }: ISidebarItemProps) {
  const navigate = useNavigate();

  const IconComponent = icon && iconsMap[icon];

  const handleRedirection = () => {
    navigate(route);
  }

  return (
    <Button
      className={styles.item}
      variant="outlined"
      startIcon={IconComponent ? <IconComponent /> : null}
      onClick={handleRedirection}
    >
      <span>{text}</span>
    </Button>
  );
}
