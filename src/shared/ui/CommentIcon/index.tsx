import { type FC } from "react"
import "./index.scss"
import { ReactComponent as CommentSvg } from "assets/svg/comments.svg"

const CommentIcon: FC = () => {
    return (
        <div className="comment-icon">
            <CommentSvg />
        </div>
    )
}

export default CommentIcon
