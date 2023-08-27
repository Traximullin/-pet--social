import { type FC } from "react"
import "./index.scss"
import { type ISignLayout } from "./interface"
import { CircleLayout } from "packages/ui-kit/layout"

const SignLayout: FC<ISignLayout> = (props) => {
    const { children, ...othersProps } = props

    return (
        <main className="sign-layout" {...othersProps}>
            <CircleLayout />
            <div className="sign-layout__content">
                {children}
            </div>
        </main>
    )
}

export { SignLayout }
