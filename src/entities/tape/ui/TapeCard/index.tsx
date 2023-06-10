import { type FC } from "react"
import Card from "shared/ui/Card"
import "./index.scss"
import { type ITapeCard } from "./interface"
import { Avatar, Media, Text } from "shared/ui"
import Like from "shared/ui/Like"

const TapeCard: FC<ITapeCard> = (props) => {
    const { children, ...othersProps } = props

    return (
        <Card className="tape-card" {...othersProps}>
            <div className="tape-card__header">
                <Avatar size="small" />
                <Text.Title>test_1337</Text.Title>
            </div>
            <Media/>
            <div className="tape-card__bottom">
                <Like/>
                <div>1</div>
            </div>
        </Card>
    )
}

export default TapeCard
