import { type FC } from "react"
import "./index.scss"
import { type IForm } from "./interface"

const Form: FC<IForm> = (props) => {
    const { ...othersProps } = props

    return (
        <form className="form" {...othersProps} />
    )
}

export default Form
