import { type FC } from "react"
import "./index.scss"
import { type ISpace } from "./types"

const Space: FC<ISpace> = (props) => {
    const { gap, flexDirection, justifyContent, alignItems, flexWrap, ...othersProps } = props

    return (
        <section
            className="space"
            style={{
                gap,
                flexDirection,
                justifyContent,
                alignItems,
                flexWrap,
            }}
            {...othersProps}
        />
    )
}

export default Space
