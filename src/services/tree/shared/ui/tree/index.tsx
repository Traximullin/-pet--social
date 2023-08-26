import { type FC } from "react"
import "./index.scss"
import TreeItem from "./components/TreeItem"

const Tree: FC = () => {
    return (
        <section className="tree">
            <div className="tree__row">
                <TreeItem />
            </div>
            <div className="tree__row">
                <TreeItem />
                <TreeItem />
            </div>
            <div className="tree__row">
                <TreeItem />
                <TreeItem />
                <TreeItem />
            </div>
        </section>
    )
}

export default Tree
