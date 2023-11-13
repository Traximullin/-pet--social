import { type FC } from "react"
import classes from "./history-item.module.scss"
import { Avatar } from "packages/ui-kit/ui"

const HistoryItem: FC = () => {
    return (
        <div className={classes["history-item"]}>
            <span className={classes["history-item__avatar"]}>
                <Avatar />
            </span>
            <p>Евкакий</p>
        </div>
    )
}

export { HistoryItem }
