import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { Avatar, Content } from "shared/ui"

const ProfilePage: FC = () => {
    return (
        <BaseLayout>
            <Content>
                <Avatar />
            </Content>
        </BaseLayout>
    )
}

export default ProfilePage
