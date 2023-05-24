import { type FC } from "react"
import "./index.scss"
import { type IGrid } from "./interface"

const Grid: FC<IGrid> = (props) => {
    const { gridTemplateColumns, gap, ...othersProps } = props

    return (
        <section
            className="grid"
            style={{
                gap,
                gridTemplateColumns,
            }}
            {...othersProps}
        />
    )
}

export default Grid
