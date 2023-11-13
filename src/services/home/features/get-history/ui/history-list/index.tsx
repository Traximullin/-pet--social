import { type FC } from "react"
import classes from "./index.module.scss"
import { HistoryItem } from "./history-item"
import { AddHistory } from "./add-history"

const HistoryList: FC = () => {
    return (
        <section className={classes["history-list"]}>
            <AddHistory />
            <HistoryItem />
            <HistoryItem />
        </section>
    )
}

export { HistoryList }
