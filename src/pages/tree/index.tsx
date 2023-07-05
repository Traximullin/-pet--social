import { TreeItem } from "entities/tree/ui"
import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { Tree } from "shared/ui"

const TreePage: FC = () => {
    return (
        <BaseLayout>
            <TreeItem />
        </BaseLayout>
    )
}

export default TreePage
