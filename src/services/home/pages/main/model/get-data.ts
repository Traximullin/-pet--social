import { createEvent, sample } from "effector"
import { getTape } from "services/home/features/get-tape"

export const getData = createEvent()

sample({
    clock: getData,
    target: getTape,
})
