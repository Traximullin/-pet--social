import { type FC } from "react"
import "./index.scss"
import { type IAchievementsCard } from "./types"
import { treeSvg } from "assets/svg"
import { Card } from "packages/ui-kit/ui"

const AchievementsCard: FC<IAchievementsCard> = (props) => {
    const { children, ...othersProps } = props

    return (
        <Card className="achievements-card" {...othersProps}>
            <img
                className="achievements-card__image"
                src={treeSvg as unknown as string}
                alt="achievements-image"
            />
            <p className="achievements-card__title">{children}</p>
        </Card>
    )
}

export { AchievementsCard }
