import { type FC } from "react"
import "./index.scss"
import { type IContent } from "./types"

const Content: FC<IContent> = (props) => {
    const { ...othersProps } = props

    return (
        <section className="content" {...othersProps} />
    )
}

export default Content
