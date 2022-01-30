import { NavLink } from "react-router-dom"
import './Header.scss';


export default function Header () {

    return (
        <div className="c-header">
            <nav className="c-header__nav">
                <NavLink className="c-header__nav--a" to="/">rgb clock</NavLink>
                <NavLink className="c-header__nav--a" to="/countdown">countdown</NavLink>
                <NavLink className="c-header__nav--a" to="/stopwatch">chronometer</NavLink>
            </nav>
        </div>
    )
}