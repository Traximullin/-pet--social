import { type FC } from "react"
import "./index.scss"
import { type IContent } from "./interface"

const Content: FC<IContent> = (props) => {
    const { ...othersProps } = props

    return (
        <section className="content" {...othersProps} />
    )
}

export default Content
