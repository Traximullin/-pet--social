import { type FC } from "react"
import "./index.scss"
import { type ITapeCard } from "./interface"

import Card from "shared/ui/Card"
import { Avatar, CommentIcon, Details, Like, Media, Text } from "shared/ui"

const TapeCard: FC<ITapeCard> = (props) => {
    const { children, ...othersProps } = props

    return (
        <Card className="tape-card" {...othersProps}>
            <div className="tape-card__header">
                <div className="tape-card__user-info">
                    <Avatar size="small" />
                    <div className="tape-card__username">
                        <Text.Title>test_1337</Text.Title>
                        <Text.Title className="tape-card__role">Author</Text.Title>
                    </div>
                </div>
                <Details />
            </div>
            <Media/>
            <div className="tape-card__control">
                <Like/>
                <CommentIcon />
            </div>
        </Card>
    )
}

export default TapeCard
