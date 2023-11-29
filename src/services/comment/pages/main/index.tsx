import { type FC } from "react"
import { BaseLayout } from "packages/ui-kit/layout"

import { SendComment } from "services/comment/features/send-comment"

import { CommentList } from "services/comment/shared/ui/comment-list"
import { TapeCard } from "packages/social-content/shared/ui/TapeCard"

const MainPage: FC = () => {
    return (
        <BaseLayout>
            <TapeCard />
            <SendComment />
            <CommentList />
        </BaseLayout>
    )
}

export { MainPage }
