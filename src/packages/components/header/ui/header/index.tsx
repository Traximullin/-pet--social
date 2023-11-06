import { type FC } from "react"
import classes from "./index.module.scss"
import { Avatar } from "packages/ui-kit/ui"

const Header: FC = () => {
    return (
        <header className={classes["header"]}>
            <div className={classes["header__information"]}>
                <Avatar size="small" />
                <p>Главная</p>
            </div>
            <div className={classes["header__information"]}>
                <p>Поиск</p>
                <p>Увед.</p>
            </div>
        </header>
    )
}

export { Header }
