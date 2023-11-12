import { type FC } from "react"

import { Icon } from "packages/ui-kit/ui/Icon"

import classes from "./index.module.scss"

const Notification: FC = () => {
    return (
        <span className={classes.notification}>
            <Icon name="i-notification" />
        </span>
    )
}

export { Notification }
