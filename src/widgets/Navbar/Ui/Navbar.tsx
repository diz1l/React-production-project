import { classNames } from "@/shared/lib";
import classes from "./Navbar.module.scss";
import { AppLink, ThemeBtn } from "@/shared/UI";
import { AppLinkTheme } from "@/shared/UI/AppLink/UI/AppLink";
import { FC } from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.logo}>DN</div>

      <nav className={classes.navItems} aria-label="Main navigation">
        <AppLink
          className={classes.navItem}
          theme={AppLinkTheme.SECONDARY}
          to={"/about"}
        >
          About
        </AppLink>
        <AppLink
          className={classes.navItem}
          theme={AppLinkTheme.PRIMARY}
          to={"/"}
        >
          Main
        </AppLink>
      </nav>
      <ThemeBtn />
    </div>
  );
}
