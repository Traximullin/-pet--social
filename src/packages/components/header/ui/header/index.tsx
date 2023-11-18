import { type FC } from "react"
import classes from "./index.module.scss"

import { Notification } from "../../features/get-notification"
import { Search } from "../../features/search"

const Header: FC = () => {
    return (
        <header className={classes["header"]}>
            <div className={classes["header__information"]}>
                <h1 className={classes["header__title"]}>Главная</h1>
            </div>
            <div className={classes["header__information"]}>
                <Search />
                <Notification />
            </div>
        </header>
    )
}

export { Header }
