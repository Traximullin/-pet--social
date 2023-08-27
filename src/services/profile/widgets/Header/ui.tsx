import { type FC } from "react"
import "./index.scss"
import { Avatar } from "packages/ui-kit/ui"
import { ProfileCounter, UserInfo } from "services/profile/shared/ui"

export const Header: FC = () => {
    return (
        <section className="header">
            <div className="header__information">
                <Avatar />
                <div className="header__user-statistics">
                    <ProfileCounter title="Posts">
                            54
                    </ProfileCounter>
                    <ProfileCounter title="Friends">
                            154
                    </ProfileCounter>
                </div>
            </div>
            <UserInfo description="Hello, i am test user">
                Ivanov Ivan
            </UserInfo>
        </section>
    )
}
