import { type FC } from "react"
import { type IPager } from "./interface"

const Pager: FC<IPager> = (props) => {
    const { children, step, ...othersProps } = props

    return (
        <section {...othersProps}>
            {children[step]}
        </section>
    )
}

export default Pager
