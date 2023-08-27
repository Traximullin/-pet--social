import { TapeCard } from "entities/tape/ui"
import { BaseLayout } from "packages/ui-kit/layout"
import { List } from "packages/ui-kit/ui"
import { type FC } from "react"

const HomePage: FC = () => {
    return (
        <BaseLayout>
            <List
                data={[1, 2, 3, 4]}
                renderItem={(item) => (
                    <TapeCard>{item}</TapeCard>
                )}
            />
        </BaseLayout>
    )
}

export { HomePage }
