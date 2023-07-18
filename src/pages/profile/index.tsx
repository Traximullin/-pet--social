import { AchievementsCard } from "entities/achievements/ui"
import { ProfileCounter } from "entities/profile/ui"
import { TapeCard } from "entities/tape/ui"
import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { Avatar, Button, Content, Grid, List, Media, Space, Switch, Text } from "shared/ui"

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
                    <Button size="small">Add content</Button>
                </Space>
            </Content>
            <Switch content={{
                list:
                <Grid gap="1px" gridTemplateColumns="repeat(3,1fr)">
                    <Media />
                    <Media />
                    <Media />
                    <Media />
                    <Media />
                    <Media />
                </Grid>,
                trip:
                <List
                    data={[1, 2, 3, 4]}
                    renderItem={(item) => (
                        <TapeCard>{item}</TapeCard>
                    )}
                />,
                card: <div>
                    <AchievementsCard>Achievements</AchievementsCard>
                </div>,
            }}/>
        </BaseLayout>
    )
}

export default ProfilePage
