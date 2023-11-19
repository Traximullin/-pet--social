import { type FC } from "react"

import { Icon, type IconProps } from "packages/ui-kit/ui/Icon"

import classes from "./index.module.scss"

interface ActionIconProps extends IconProps {
    value: number
}

const ActionIcon: FC<ActionIconProps> = (props) => {
    const { value, ...iconProps } = props

    return (
        <span className={classes["action-icon"]}>
            <Icon {...iconProps} />
            {value}
        </span>
    )
}

export { ActionIcon }
