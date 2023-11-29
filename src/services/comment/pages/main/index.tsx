import { type FC } from "react"
import { BaseLayout } from "packages/ui-kit/layout"

import { Comment } from "../../shared/ui/comment"

import { TapeCard } from "packages/social-content/shared/ui/TapeCard"
import { CommentList } from "services/comment/shared/ui/comment-list"

const MainPage: FC = () => {
    return (
        <BaseLayout>
            <TapeCard />
            <Comment />
            <CommentList />
        </BaseLayout>
    )
}

export { MainPage }
