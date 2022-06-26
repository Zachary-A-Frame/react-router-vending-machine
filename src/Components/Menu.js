import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <h1>Vending Machine</h1>
            <img src="https://media3.giphy.com/media/sqg51TGEJx3lm/200.webp?cid=ecf05e4769nnt9lq79bhgnqf4hy3bc5l532nod2iodokcpkk&rid=200.webp&ct=g" alt="vending machine" />
            <li>
                <NavLink to="/soda">Soda</NavLink>
            </li>
            <li>
                <NavLink to="/Chips">Chips</NavLink>
            </li>
            <li>
                <NavLink to="Jerky">Jerkey</NavLink>
            </li>
        </div>
    )

}

export default Menu