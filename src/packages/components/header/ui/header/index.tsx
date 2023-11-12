import { type FC } from "react"
import classes from "./index.module.scss"
import { Avatar } from "packages/ui-kit/ui"

import { Notification } from "../../features/get-notification"
import { Search } from "../../features/search"

const Header: FC = () => {
    return (
        <header className={classes["header"]}>
            <div className={classes["header__information"]}>
                <Avatar size="small" />
                <p>Главная</p>
            </div>
            <div className={classes["header__information"]}>
                <Search />
                <Notification />
            </div>
        </header>
    )
}

export { Header }
