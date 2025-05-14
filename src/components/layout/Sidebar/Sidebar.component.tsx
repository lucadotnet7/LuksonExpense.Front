import { IconButton, Drawer } from "@mui/material";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import useModules from "../../../hooks/modules/useModules";
import SidebarItem from "./components/SidebarItem";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const { content, getModules } = useModules();

  const toggleDrawer = (open: boolean) => {
    setOpenSidebar(open);
  };

  useEffect(() => {
    if (!content?.modules?.length) {
      getModules();
    }
  }, [getModules, content]);

  return (
    <div className={styles.sidebarContainer}>
      {!openSidebar ? (
        <IconButton
          aria-label="abrir sidebar"
          onClick={() => toggleDrawer(true)}
        >
          <ViewSidebarIcon
            fontSize="inherit"
            style={{ color: "var(--gray-200)" }}
          />
        </IconButton>
      ) : null}
      <Drawer
        open={openSidebar}
        onClose={() => toggleDrawer(false)}
        className={styles.sidebar}
        slotProps={{
          paper: {
            className: styles.drawer,
          },
        }}
      >
        {content?.modules.map((module) => (
          <SidebarItem
            key={module.name}
            text={module.name}
            icon={module.iconName}
          />
        ))}
      </Drawer>
    </div>
  );
}
