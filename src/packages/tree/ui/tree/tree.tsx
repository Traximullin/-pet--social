import { type FC } from "react"
import { TreeUnit } from "../tree-unit"
import classes from "./tree.module.scss"

const Tree: FC = () => {
    return (
        <div className={classes["tree"]}>
            <TreeUnit />
        </div>
    )
}

export { Tree }
