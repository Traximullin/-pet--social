import { createEffect, createEvent, restore, sample } from "effector"

export const getTree = createEvent()

export const getTreeFx = createEffect(async () => {
    const mock = async (): Promise<object> => {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ test: 3000, })
            }, 3000)
        })
    }

    const data = await mock()

    return data
})

export const $getTreeError = restore(getTreeFx, null)
export const $getTreeLoading = getTreeFx.pending
export const getTreeDone = getTreeFx.doneData

sample({
    clock: getTree,
    target: getTreeFx,
})
