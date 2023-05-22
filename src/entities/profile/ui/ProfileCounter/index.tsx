import { type FC } from "react"
import "./index.scss"
import { type IProfileCounter } from "./interface"

const ProfileCounter: FC<IProfileCounter> = (props) => {
    const { children, title, ...othersProps } = props

    return (
        <div className="profile-counter" {...othersProps}>
            <p className="profile-counter__data">
                {children}
            </p>
            <p className="profile-counter__title">
                {title}
            </p>
        </div>
    )
}

export default ProfileCounter
