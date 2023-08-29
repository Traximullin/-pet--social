import { Tree } from "packages/tree"
import { BaseLayout } from "packages/ui-kit/layout"
import { type FC } from "react"

const TreePage: FC = () => {

    return (
        <BaseLayout>
            <Tree />
        </BaseLayout>
    )
}

export { TreePage }
