import { TapeCard } from "entities/tape/ui"
import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { List } from "shared/ui"

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
