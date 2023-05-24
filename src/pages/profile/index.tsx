import { ProfileCounter } from "entities/profile/ui"
import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { Avatar, Content, Media, Space, Text } from "shared/ui"

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
                <Space gap="8px" flexDirection="column">
                    <Text.Title>Ivan Ivanov</Text.Title>
                    <p>Test</p>
                </Space>
            </Content>
            <Space gap="1px" flexWrap="wrap">
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
            </Space>
        </BaseLayout>
    )
}

export default ProfilePage
