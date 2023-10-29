import { createEffect, createEvent, restore, sample } from "effector"
import { $tape, resetTape } from "services/home/entities/tape"
import { getTape as getTapeRequest } from "services/home/shared/api"

export const getTape = createEvent()

export const getTapeFx = createEffect(async () => {
    const data = await getTapeRequest()

    return data
})

export const $getTapeError = restore(getTapeFx.failData, null).reset(resetTape)
export const $getTapeLoading = getTapeFx.pending
export const getTapeDone = getTapeFx.doneData

sample({
    clock: getTape,
    target: getTapeFx,
})

sample({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    clock: getTapeDone,
    target: $tape,
})
