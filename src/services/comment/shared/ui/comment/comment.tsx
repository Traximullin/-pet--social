import { type FC } from "react"

import { Input, Icon } from "packages/ui-kit/ui"

import classes from "./index.module.scss"

const Comment: FC = () => {
    return (
        <div className={classes["comment"]}>
            <Input placeholder="Комментарий" />
            <Icon name="i-send" />
        </div>
    )
}

export { Comment }
