import { createEffect, createEvent, restore, sample } from "effector"

import { $searchResult } from "packages/components/header/entities/search-result"

export const getSearchResult = createEvent()

export const getSearchResultFx = createEffect(async () => {
    const mock = async (): Promise<object> => {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve({ test: 3000, })
            }, 3000)
        })
    }

    const response = await mock()

    return response
})

export const $getSearchResultError = restore(getSearchResultFx.failData, null)
export const $getSearchResultLoading = getSearchResultFx.pending
export const getSearchResultDone = getSearchResultFx.doneData

sample({
    clock: getSearchResult,
    target: getSearchResultFx,
})

sample({
    clock: getSearchResultDone,
    target: $searchResult,
})
