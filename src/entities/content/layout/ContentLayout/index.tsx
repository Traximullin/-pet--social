import { type FC } from "react"
import "./index.scss"
import { type IContentLayout } from "./interface"

const ContentLayout: FC<IContentLayout> = (props) => {
    const { children, ...othersProps } = props

    return (
        <main className="content-layout" {...othersProps}>
            {children}
        </main>
    )
}

export default ContentLayout
