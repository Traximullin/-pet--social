import { type FC } from "react"
import { NavLink } from "react-router-dom"
import "./index.scss"
import { EPage } from "pages/pages"

const Menu: FC = () => {
    return (
        <div className="menu">
            <nav>
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink to={EPage.HOME}>
                            Главная
                        </NavLink>
                    </li>
                    <li className="menu__item">1</li>
                    <li className="menu__item">1</li>
                    <li className="menu__item">
                        <NavLink to={EPage.PROFILE}>
                            Профиль
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
