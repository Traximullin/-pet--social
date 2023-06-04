import { forwardRef, type FC } from "react"
import "./index.scss"
import { type IPager } from "./interface"

const Pager: FC<IPager> = forwardRef((props: IPager, ref) => {
    const { children, step, bottomElement, ...othersProps } = props

    return (
        <section className="pager" {...othersProps}>
            {children[step]}
            {bottomElement}
        </section>
    )
})

Pager.displayName = "Pager"

export default Pager
