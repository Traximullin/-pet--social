import { createEffect, createEvent, restore, sample } from "effector"

export const getHistoryList = createEvent()

const getHistoryListFx = createEffect(async () => {
    const mock = async (): Promise<object> => {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve({ test: 3000, })
            }, 3000)
        })
    }

    const data = await mock()

    return data
})

export const $getHistoryListError = restore(getHistoryListFx.failData, null)
export const $getHistoryListLoading = getHistoryListFx.pending
export const getHistoryListDone = getHistoryListFx.doneData

sample({
    clock: getHistoryList,
    target: getHistoryListFx,
})
