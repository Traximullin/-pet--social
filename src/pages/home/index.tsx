import { TapeCard } from "entities/tape/ui"
import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { Horizontal, List } from "shared/ui"

const HomePage: FC = () => {
    return (
        <BaseLayout>
            <Horizontal>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </Horizontal>
            <List
                data={[1, 2, 3, 4]}
                renderItem={(item) => (
                    <TapeCard>{item}</TapeCard>
                )}
            />
        </BaseLayout>
    )
}

export default HomePage
