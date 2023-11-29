import { type FC } from "react"
import classes from "./comment-item.module.scss"
import { Avatar } from "packages/ui-kit/ui"

const CommentItem: FC = () => {
    return (
        <div className={classes["comment-item"]}>
            <Avatar size="medium" />
            <div className={classes["comment-item__content"]}>
                <div className={classes["comment-item__info"]}>
                    <p>Ivan Ivanov</p>
                    <span>12.02.2024</span>
                </div>
                <p>Новый комментарий</p>
            </div>
        </div>
    )
}

export { CommentItem }
