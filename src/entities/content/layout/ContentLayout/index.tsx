import { type FC } from "react"
import "./index.scss"
import { type IContentLayout } from "./interface"

const ContentLayout: FC<IContentLayout> = (props) => {
    const { children, backButton, ...othersProps } = props

    return (
        <main className="content-layout" {...othersProps}>
            <section className="content-layout__header">
                {backButton}
            </section>
            {children}
            <section className="content-layout__bottom">
                Привет
            </section>
        </main>
    )
}

export default ContentLayout
