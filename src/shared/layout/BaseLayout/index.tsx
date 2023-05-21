import { type FC } from "react"
import { Menu } from "shared/ui"
import "./index.scss"
import { type IBaseLayout } from "./interface"

const BaseLayout: FC<IBaseLayout> = (props) => {
    const { children, ...othersProps } = props

    return (
        <main className="base-layout" {...othersProps}>
            <div className="base-layout__content">
                {children}
            </div>
            <Menu />
        </main>
    )
}

export default BaseLayout
