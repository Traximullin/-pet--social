import { type FC } from "react"
import { type ShowContentProps } from "./types"
import classes from "./show-content.module.scss"

const ShowContent: FC<ShowContentProps> = (props) => {

    return (
        <img className={classes["show-content"]} {...props}/>
    )
}

export { ShowContent }
