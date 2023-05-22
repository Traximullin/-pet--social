import { ProfileCounter } from "entities/profile/ui"
import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { Avatar, Content, Space } from "shared/ui"

const ProfilePage: FC = () => {
    return (
        <BaseLayout>
            <Content>
                <Space gap="32px" alignItems="center">
                    <Avatar />
                    <Space gap="32px">
                        <ProfileCounter title="Posts">
                            54
                        </ProfileCounter>
                        <ProfileCounter title="Friends">
                            154
                        </ProfileCounter>
                    </Space>
                </Space>
            </Content>
        </BaseLayout>
    )
}

export default ProfilePage
