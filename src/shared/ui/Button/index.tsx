import { type FC } from "react"
import "./index.scss"
import { type IButton } from "./interface"

const Button: FC<IButton> = (props) => {
    const { size, className, ...othersProps } = props

    const currentClasses = ["button"]

    if (size) currentClasses.push(`button_sz_${size as string}`)

    // !TODO обдумать надо ли расширять Ui
    if (className) currentClasses.push(className)

    return (
        <button className={currentClasses.join(" ")} {...othersProps} />
    )
}

export default Button
