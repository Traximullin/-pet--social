import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { Avatar, Content, Grid, List, Media, Space, Switch } from "shared/ui"
import { AchievementsCard } from "entities/achievements/ui"
import { ProfileCounter, UserInfo } from "entities/profile/ui"
import { TapeCard } from "entities/tape/ui"

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
                <UserInfo description="Hello, i am test user">
                    Ivanov Ivan
                </UserInfo>
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
