import { type FC } from "react"
import { useUnit } from "effector-react"

import { List } from "packages/ui-kit/ui"
import { TapeCard } from "packages/social-content/shared/ui/TapeCard"

import { $tape } from "services/home/entities/tape"
import { $getTapeLoading } from "../../model/get-tape"

const ListTape: FC = () => {
    const [tape, isLoading] = useUnit([$tape, $getTapeLoading])

    if (isLoading) {
        return <p>Загрузка...</p>
    }

    return (
        <List
            data={tape as object[]}
            renderItem={() => (
                <TapeCard />
            )}
        />
    )
}

export { ListTape }
