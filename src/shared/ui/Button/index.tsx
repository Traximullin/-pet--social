import { type FC } from "react"
import "./index.scss"
import { type IButton } from "./interface"

const Button: FC<IButton> = (props) => {
    const { size, ...othersProps } = props

    const currentClasses = ["button"]

    if (size) currentClasses.push(`button_sz_${size as string}`)

    return (
        <button className={currentClasses.join(" ")} {...othersProps} />
    )
}

export default Button
