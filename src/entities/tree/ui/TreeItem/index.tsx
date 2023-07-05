import { type FC } from "react"
import "./index.scss"
import { type ITreeItem } from "./interface"

const TreeItem: FC<ITreeItem> = () => {
    return (
        <article className="tree-item">
            <img
                className="tree-item__avatar"
                src="https://bessmertnybarak.ru/filesSt/8010_romanov_nikolay_aleksandrovich/romanov_nikolay_aleksandrovich_foto_1572142359.jpg"
                alt="avatar"
            />
            <p className="tree-item__fullname">
                Николай Александрович
            </p>
        </article>
    )
}

export default TreeItem
