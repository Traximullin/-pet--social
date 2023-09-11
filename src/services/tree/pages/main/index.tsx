import { Tree } from "packages/tree"
import { BaseLayout } from "packages/ui-kit/layout"
import { type FC } from "react"

const TreePage: FC = () => {
    const familyData = {
        id: 1,
        name: "John",
        spouseId: 2,
        children: [3, 4],
    }

    const familyMembers = {
        1: { id: 1, name: "John", spouseId: 2, children: [3, 4], },
        2: { id: 2, name: "Mary", spouseId: 1, children: [3, 4], },
        3: { id: 3, name: "Alice", parents: [1, 2], },
        4: { id: 4, name: "Bob", parents: [1, 2], },
    }

    return (
        <BaseLayout>
            <Tree data={[]} linksData={[]} />
        </BaseLayout>
    )
}

export { TreePage }
