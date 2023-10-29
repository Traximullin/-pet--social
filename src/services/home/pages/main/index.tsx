import { useEffect, type FC } from "react"
import { useUnit } from "effector-react"

import { BaseLayout } from "packages/ui-kit/layout"

import { ListTape } from "services/home/features/get-tape"

import { getData } from "./model/get-data"

const HomePage: FC = () => {
    const onGetData = useUnit(getData)

    useEffect(() => {
        onGetData()
    }, [onGetData])

    return (
        <BaseLayout>
            <ListTape />
        </BaseLayout>
    )
}

export { HomePage }
