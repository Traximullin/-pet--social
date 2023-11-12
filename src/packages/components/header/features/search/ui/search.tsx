import { type FC } from "react"

import { Icon } from "packages/ui-kit/ui/Icon"

import classes from "./index.module.scss"

const Search: FC = () => {
    return (
        <span className={classes.search}>
            <Icon name="i-search" alt="Поиск" />
        </span>
    )
}

export { Search }
