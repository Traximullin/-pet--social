import { type FC } from "react"
import "./index.scss"
import { type IContentLayout } from "./types"

const ContentLayout: FC<IContentLayout> = (props) => {
    const { children, backButton, control, ...othersProps } = props

    return (
        <main className="content-layout" {...othersProps}>
            <section className="content-layout__header">
                {backButton}
            </section>
            {children}
            <section className="content-layout__control">
                {control}
            </section>
        </main>
    )
}

export { ContentLayout }
