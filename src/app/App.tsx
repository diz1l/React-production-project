import "./styles/index.scss";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPages";
import { classNames } from "@/shared/lib";

export default function App() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}> Themes </button> <br />
      <Link to={"/about"}>About</Link><br />
      <Link to={"/"}>Main</Link><br />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

// test2