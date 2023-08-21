import { type FC } from "react"
import "./index.scss"
import { type IForm } from "./types"

const Form: FC<IForm> = (props) => {
    const { className, ...othersProps } = props

    const currentClasses = ["form"]

    if (className) currentClasses.push(className)

    return (
        <form className={currentClasses.join(" ")} {...othersProps} />
    )
}

export default Form
