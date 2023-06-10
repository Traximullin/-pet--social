import { type FC } from "react"
import "./index.scss"
import { type IAvatar } from "./interface"

const Avatar: FC<IAvatar> = (props) => {
    const { size, ...othersProps } = props

    const currentClasses = ["avatar"]

    if (size) currentClasses.push(`avatar_size_${size as string}`)

    return (
        <img
            className={currentClasses.join(" ")}
            src="https://cs14.pikabu.ru/post_img/2023/02/25/12/1677358639170418743.jpg"
            alt="avatar"
            {...othersProps}
        />
    )
}

export default Avatar
