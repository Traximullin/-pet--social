import { type FC } from "react"
import "./index.scss"
import { type IComment } from "./types"
import { Avatar } from ".."

const Comment: FC<IComment> = () => {
    return (
        <article className="comment">
            <div className="comment__header">
                <Avatar size="medium" />
                <p>test_1337</p>
                <p className="comment__publish-time">22.02.2002</p>
            </div>
            <p className="comment__content">
                С учётом сложившейся международной обстановки,
                реализация намеченных плановых заданий однозначно определяет
                каждого участника как способного принимать собственные решения
                касаемо первоочередных требований. Таким образом,
                высокотехнологичная концепция общественного уклада прекрасно подходит для реализации вывода текущих активов.
            </p>
        </article>
    )
}

export default Comment
