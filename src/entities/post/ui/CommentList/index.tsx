import { List } from "packages/ui-kit/ui"
import { type FC } from "react"
import Comment from "./../../../../packages/ui-kit/ui/Comment/index"

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
