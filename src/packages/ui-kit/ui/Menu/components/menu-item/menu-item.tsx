import { type FC } from "react"
import { NavLink, type NavLinkProps } from "react-router-dom"

import classes from "./index.module.scss"

import { Icon } from "packages/ui-kit/ui/Icon"
import { type IconProps } from "packages/ui-kit/ui/Icon/types"

interface MenuItemProps {
    to: NavLinkProps["to"]
    text: string
    iconName: IconProps["name"]
    alt?: string
}

const MenuItem: FC<MenuItemProps> = (props) => {

    const { to, text, iconName, alt, } = props

    return (
        <li className={classes["menu-item"]}>
            <NavLink
                to={to}
                className={({ isActive, }) =>
                    [
                        isActive ? classes["menu-item__link_active"] : "",
                        classes["menu-item__link"]
                    ].join(" ")
                }
            >
                <Icon name={iconName} alt={text || alt} />
                {text}
            </NavLink>
        </li>
    )
}

export { MenuItem }
