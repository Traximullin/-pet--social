import { useEffect, type FC } from "react"
import { useUnit } from "effector-react"

import { BaseLayout } from "packages/ui-kit/layout"

import { ListTape } from "services/home/features/get-tape"

import { getData } from "./model/get-data"
import { HistoryList } from "services/home/features/get-history/ui/history-list"

const HomePage: FC = () => {
    const onGetData = useUnit(getData)

    useEffect(() => {
        onGetData()
    }, [onGetData])

    return (
        <BaseLayout>
            <HistoryList />
            <ListTape />
        </BaseLayout>
    )
}

export { HomePage }
