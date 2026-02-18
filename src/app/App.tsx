import "./styles/index.scss";
import {useTheme} from "@/app/providers/ThemeProvider";
import {Link} from "react-router-dom";
import {classNames} from "@/shared/lib";
import {AppRouter} from "app/providers/router";

export default function App() {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}> Themes</button>
            <br/>
            <Link to={"/about"}>About</Link><br/>
            <Link to={"/"}>Main</Link><br/>
            <AppRouter/>
        </div>
    );
}