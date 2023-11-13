import { type FC } from "react"

import { Avatar } from "packages/ui-kit/ui"

import classes from "./add-history.module.scss"

const AddHistory: FC = () => {
    return (
        <div className={classes["add-history"]}>
            <span className={classes["add-history__avatar"]}>
                <Avatar/>
                <span className={classes["add-history__icon"]}>+</span>
            </span>
            <p>История</p>
        </div>
    )
}

export { AddHistory }
