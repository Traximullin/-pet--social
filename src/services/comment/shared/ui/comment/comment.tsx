import { type FC } from "react"

import { Input, Icon } from "packages/ui-kit/ui"

import classes from "./index.module.scss"

const Comment: FC = () => {
    return (
        <section className={classes["comment"]}>
            <Input placeholder="Комментарий" />
            <Icon name="i-send" />
        </section>
    )
}

export { Comment }
