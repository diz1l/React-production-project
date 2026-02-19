import { classNames } from "@/shared/lib";
import classes from "./Navbar.module.scss";
import { AppLink } from "@/shared/UI";
import { useTranslation } from "react-i18next";
import { AppLinkTheme } from "@/shared/UI/AppLink/UI/AppLink";
import { FC } from "react";
import { LangSwich } from "@/widgets/LangSwich";
import logoOfWeb from "@/shared/img/logoOfWeb.png";
import { ThemeBtn } from "@/widgets/ThemeBtn";
import { Link } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation("nav");
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <Link to={"/"}>
        <div className={classes.logo}>
          <img src={logoOfWeb} alt="Site logo" className={classes.logoImg} />
        </div>
      </Link>

      <nav className={classes.navItems} aria-label="Main navigation">
        <AppLink
          className={classes.navItem}
          theme={AppLinkTheme.SECONDARY}
          to={"/about"}
        >
          {t("about")}
        </AppLink>
        <AppLink
          className={classes.navItem}
          theme={AppLinkTheme.PRIMARY}
          to={"/"}
        >
          {t("main")}
        </AppLink>
      </nav>
      <ThemeBtn />
      <LangSwich />
    </div>
  );
};
