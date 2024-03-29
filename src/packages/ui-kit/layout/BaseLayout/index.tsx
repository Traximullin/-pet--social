import { type FC } from "react"
import "./index.scss"
import { type IBaseLayout } from "./interface"
import CircleLayout from "../CircleLayout"
import { Menu } from "packages/ui-kit/ui"
import { Header } from "packages/components/header"

const BaseLayout: FC<IBaseLayout> = (props) => {
    const { children, ...othersProps } = props

    return (
        <main className="base-layout" {...othersProps}>
            <Header/>
            <CircleLayout />
            <div className="base-layout__content">
                {children}
            </div>
            <Menu />
        </main>
    )
}

export default BaseLayout
