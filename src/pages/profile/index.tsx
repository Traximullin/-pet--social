import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { Avatar, Content, Space } from "shared/ui"

const ProfilePage: FC = () => {
    return (
        <BaseLayout>
            <Content>
                <Space gap="32px" alignItems="center">
                    <Avatar />
                    <div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                    </div>
                </Space>
            </Content>
        </BaseLayout>
    )
}

export default ProfilePage
