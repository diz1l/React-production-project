import { classNames } from "@/shared/lib";
import classes from "./Sidebar.module.scss";
import { FC, useState } from "react";
import { ButtonEl } from "@/shared/UI";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className, children } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: collapsed },
        [className],
      )}
    >
      <ButtonEl onClick={toggleSidebar}>Toggle</ButtonEl>
    </div>
  );
};

export default Sidebar;
