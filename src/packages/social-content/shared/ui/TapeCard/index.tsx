import { type FC } from "react"
import "./index.scss"
import { type ITapeCard } from "./types"
import Card from "../../../../ui-kit/ui/Card/index"
import { Avatar, CommentIcon, Details, Like, Media, Text } from "packages/ui-kit/ui"

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
                <div className="tape-card__actions">
                    <Like/>
                    <CommentIcon />
                </div>
                <div>2</div>
                <div>3</div>
            </div>
        </Card>
    )
}

export { TapeCard }
