import { type FC } from "react"
import { Menu } from "shared/ui"
import "./index.scss"
import { type IBaseLayout } from "./interface"
import CircleLayout from "../CircleLayout"

const BaseLayout: FC<IBaseLayout> = (props) => {
    const { children, ...othersProps } = props

    return (
        <main className="base-layout" {...othersProps}>
            <CircleLayout />
            <div className="base-layout__content">
                {children}
            </div>
            <Menu />
        </main>
    )
}

export default BaseLayout
