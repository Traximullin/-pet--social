import { type FC } from "react"
import "./index.scss"
import { EPage } from "packages/routing/routing"
import { MenuItem } from "./components/menu-item"

const Menu: FC = () => {
    return (
        <div className="menu">
            <nav>
                <ul className="menu__list">
                    <MenuItem
                        text="Главная"
                        to={EPage.HOME}
                        iconName="i-home"
                    />
                    <MenuItem
                        text="Дерево"
                        to={EPage.TREE}
                        iconName="i-tree"
                    />
                    <MenuItem
                        text="Создать"
                        to={EPage.CREATE_CONTENT}
                        iconName="i-content"
                    />
                    <MenuItem
                        text="Профиль"
                        to={EPage.PROFILE}
                        iconName="i-profile"
                    />
                </ul>
            </nav>
        </div>
    )
}

export default Menu
