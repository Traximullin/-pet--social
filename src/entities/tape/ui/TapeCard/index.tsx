import { type FC } from "react"
import Card from "shared/ui/Card"
import "./index.scss"
import { type ITapeCard } from "./interface"
import { Media } from "shared/ui"

const TapeCard: FC<ITapeCard> = (props) => {
    const { children, ...othersProps } = props

    return (
        <Card className="tape-card" {...othersProps}>
            <div className="tape-card__header">
                <div>1</div>
            </div>
            <Media/>
            <div className="tape-card__bottom">
                <div>1</div>
                <div>1</div>
            </div>
        </Card>
    )
}

export default TapeCard
