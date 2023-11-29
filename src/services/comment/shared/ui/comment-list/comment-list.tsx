import { type FC } from "react"
import { useUnit } from "effector-react"

import { $comments } from "services/comment/entities/comments"

import { CommentItem } from "./comment-item"

const CommentList: FC = () => {
    const comments = useUnit($comments)

    return (
        <section>
            {
                comments?.map((comment, index) => (
                    <CommentItem key={index} />
                ))
            }
        </section>
    )
}

export { CommentList }
