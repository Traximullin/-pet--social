import { type FC } from "react"
import "./index.scss"
import { type UserInfoProps } from "./types"

const UserInfo: FC<UserInfoProps> = (props) => {
    const { children, description, } = props

    return (
        <div className="user-info">
            <p className="user-info__fullname">{children}</p>
            <p className="user-info__description">{description}</p>
        </div>
    )
}

export default UserInfo
