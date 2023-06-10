import { type FC } from "react"
import "./index.scss"
import { ReactComponent as LikeSvg } from "assets/svg/like.svg"

const Like: FC = () => {
    return (
        <div className="like">
            <LikeSvg />
        </div>
    )
}

export default Like
