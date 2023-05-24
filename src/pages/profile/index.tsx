import { ProfileCounter } from "entities/profile/ui"
import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { Avatar, Content, Grid, Media, Space, Text } from "shared/ui"

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
            <Grid gap="1px" gridTemplateColumns="repeat(3,1fr)">
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
            </Grid>
        </BaseLayout>
    )
}

export default ProfilePage
