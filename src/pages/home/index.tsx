import { TapeCard } from "entities/tape/ui"
import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { Space } from "shared/ui"

const HomePage: FC = () => {
    return (
        <BaseLayout>
            <Space flexDirection="column" gap="1rem">
                <TapeCard>Test</TapeCard>
            </Space>
        </BaseLayout>
    )
}

export default HomePage
