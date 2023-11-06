import { type FC } from "react"
import { createPortal } from "react-dom"

import { type IPortal } from "./types"

const Portal: FC<IPortal> = (props) => {
    const { children, target = document.body, } = props

    return createPortal(children, target)
}

export { Portal }
