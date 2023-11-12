import { type FC } from "react"

import { type IconProps } from "./types"

import classes from "./index.module.scss"
import { ICONS } from "./config"

const Icon: FC<IconProps> = (props) => {
    const { name, } = props

    return (
        <img className={classes.icon} src={ICONS[name]} alt="icon" />
    )
}

export { Icon }
