import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { Tree } from "entities/tree/ui"

const TreePage: FC = () => {

    return (
        <BaseLayout>
            <Tree />
        </BaseLayout>
    )
}

export default TreePage
