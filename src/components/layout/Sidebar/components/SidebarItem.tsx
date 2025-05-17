import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
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
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={handleRedirection}>
        <ListItemIcon>
          {IconComponent ? <IconComponent /> : null}
        </ListItemIcon>
        <ListItemText>
          {text}
        </ListItemText>
      </ListItemButton>
    </ListItem>    
  );
}
