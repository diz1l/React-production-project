import "./styles/index.scss";
import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/lib";
import { Navbar, Sidebar } from "@/widgets";
import { AppRouter } from "app/providers/router";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar>xsaxslxaknsk</Sidebar>
        <AppRouter />
      </div>
    </div>
  );
}
