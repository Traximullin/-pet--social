import { AchievementsCard } from "entities/achievements/ui"
import { TapeCard } from "entities/tape/ui"
import { type FC } from "react"
import { Header } from "services/profile/widgets/Header"
import { BaseLayout } from "shared/layout"
import { Content, Grid, List, Media, Switch } from "shared/ui"

const ProfilePage: FC = () => {
    return (
        <BaseLayout>
            <Content>
                <Header />
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

export { ProfilePage }
