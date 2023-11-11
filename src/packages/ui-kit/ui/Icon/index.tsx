import { type FC } from "react"

import { type IconProps } from "./types"

import classes from "./index.module.scss"

const Icon: FC<IconProps> = (props) => {
    const { name, } = props

    return (
        <img className={classes.icon} src={name} alt="icon" />
    )
}

export { Icon }
