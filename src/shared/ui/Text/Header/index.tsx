import { type FC } from "react"
import "./index.scss"
import { type ITextHeader } from "./interface"

const TextHeader: FC<ITextHeader> = (props) => {
    const { position, ...othersProps } = props

    const currentClasses = ["text-header"]

    if (position) currentClasses.push("text-header_position_".concat(position))

    return (
        <h1 className={currentClasses.join(" ")} {...othersProps} />
    )
}

export default TextHeader
