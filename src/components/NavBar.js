import { NavLink } from "react-router-dom";

export default function NavBar()
{
    return(
        <div className="bar">
            <ul className="bar">
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "notA")} to='/home'>HOME</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "notA")} to='/Add'>Add</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "notA")} to= '/Del'>Delete</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "notA")} to= '/Edit'>Edit</NavLink>
                </li>
            </ul>
        </div>
    )
}