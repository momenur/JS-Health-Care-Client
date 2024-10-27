import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import Link from "next/link";
import ListItemText from "@mui/material/ListItemText";
import { IDrawerItem } from "@/types";
import { usePathname } from "next/navigation";

type TSidebarItemProps = {
  item: IDrawerItem;
};

const SidebarItem = ({ item }: TSidebarItemProps) => {
  const link_path = `/dashboard/${item?.path}`;
  const path_name = usePathname();
  return (
    <Link href={link_path}>
      <ListItem
        disablePadding
        sx={{
          ...(path_name === link_path
            ? {
                borderRight: "3px solid #1586FD",

                "& svg": { color: "#1586FD" },
              }
            : ""),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item?.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item?.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
