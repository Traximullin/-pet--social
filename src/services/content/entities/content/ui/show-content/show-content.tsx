import { type FC } from "react"
import { type ShowContentProps } from "./types"
import classes from "./show-content.module.scss"

const ShowContent: FC<ShowContentProps> = (props) => {

    return (
        <section className={classes["show-content"]}>
            <div>Назад</div>
            <img className={classes["show-content__content"]} {...props}/>
            <div>
                Отправить
            </div>
        </section>
    )
}

export { ShowContent }
