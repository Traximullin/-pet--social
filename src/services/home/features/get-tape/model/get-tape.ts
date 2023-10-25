import { createEffect, createEvent, restore, sample } from "effector"

export const getTape = createEvent()

export const getTapeFx = createEffect(async () => {
    const mock = async (): Promise<any> => {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve({ test: 3000, })
            }, 3000)
        })
    }

    const data = await mock()

    return data
})

export const $getTapeError = restore(getTapeFx.failData, null).reset(null)
export const $getTapeLoading = getTapeFx.pending
export const getTapeDone = getTapeFx.doneData

sample({
    clock: getTape,
    target: getTapeFx,
})
