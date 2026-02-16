import "../src/styles/index.scss";
import Counter from "./components/CounterTS.tsx/Counter.lazy";
import { Link, Route, Routes } from "react-router-dom";
import About from "./Pages/About.lazy";
import {useTheme} from "./hooks/useTheme";

export default function App() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}> Themes </button> <br />
      <Link to={"/"}>Counter</Link><br />
      <Link to={"/about"}>About</Link><br />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}