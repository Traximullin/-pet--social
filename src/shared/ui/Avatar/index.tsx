import { type FC } from "react"
import "./index.scss"
import { type IAvatar } from "./interface"

const Avatar: FC<IAvatar> = () => {
    return (
        <img
            className="avatar"
            src="https://cs14.pikabu.ru/post_img/2023/02/25/12/1677358639170418743.jpg"
            alt="avatar"
        />
    )
}

export default Avatar
