import { type FC } from "react"
import { useUnit } from "effector-react"

import { sendComment } from "../../model/send-comment"

import { Input, Icon } from "packages/ui-kit/ui"
import classes from "./index.module.scss"

const SendComment: FC = () => {
    const onSendComment = useUnit(sendComment)

    return (
        <div className={classes["comment"]}>
            <Input placeholder="Комментарий" />
            <div onClick={onSendComment}>
                <Icon name="i-send" />
            </div>
        </div>
    )
}

export { SendComment }
