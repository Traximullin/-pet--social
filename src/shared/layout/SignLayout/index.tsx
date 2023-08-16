import { type FC } from "react"
import "./index.scss"
import { type ISignLayout } from "./interface"

const SignLayout: FC<ISignLayout> = (props) => {
    const { children, ...othersProps } = props

    return (
        <main className="sign-layout" {...othersProps}>
            <div className="sign-layout__circle" />
            <div className="sign-layout__content">
                {children}
            </div>
        </main>
    )
}

export default SignLayout
