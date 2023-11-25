import { type FC } from "react"
import classes from "./tree-unit.module.scss"

const TreeUnit: FC = () => {
    return (
        <div className={classes["tree-unit"]}>
            <img
                className={classes["tree-unit__photo"]}
                src="https://www.broadgateleeds.co.uk/wp-content/uploads/2018/10/blank-female-profile.png"
            />
            <div className={classes["tree-unit__information"]}>
                Ivan
            </div>
        </div>
    )
}

export { TreeUnit }
