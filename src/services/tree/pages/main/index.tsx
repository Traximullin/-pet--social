import { Tree } from "packages/ui-kit/ui"
import { type FC } from "react"
import { BaseLayout } from "shared/layout"

const TreePage: FC = () => {

    return (
        <BaseLayout>
            <Tree />
        </BaseLayout>
    )
}

export { TreePage }
