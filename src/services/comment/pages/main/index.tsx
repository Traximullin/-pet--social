import { type FC } from "react"
import { BaseLayout } from "packages/ui-kit/layout"

import { Comment } from "../../shared/ui/comment"

import { TapeCard } from "packages/social-content/shared/ui/TapeCard"

const MainPage: FC = () => {
    return (
        <BaseLayout>
            <TapeCard />
            <Comment />
        </BaseLayout>
    )
}

export { MainPage }
