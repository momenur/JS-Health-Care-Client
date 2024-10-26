import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import Link from "next/link";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { IDrawerItem } from "@/types";

type TSidebarItemProps = {
  item: IDrawerItem;
  index: number;
};

const SidebarItem = ({ item, index }: TSidebarItemProps) => {
  return (
    <Link href="/">
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={item?.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
