import { type FC } from "react"
import { Comment, List } from "shared/ui"

const CommentList: FC = () => {
    return (
        <List
            data={[1, 2, 3, 4, 5]}
            renderItem={(data) => (
                <Comment />
            )}
        />
    )
}

export default CommentList
