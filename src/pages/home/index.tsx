import { TapeCard } from "entities/tape/ui"
import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { List } from "shared/ui"
import Test from "shared/ui/Test"

const HomePage: FC = () => {
    return (
        <BaseLayout>
            <Test />
            {/* <List
                data={[1, 2, 3, 4]}
                renderItem={(item) => (
                    <TapeCard>{item}</TapeCard>
                )}
            /> */}
        </BaseLayout>
    )
}

export default HomePage
