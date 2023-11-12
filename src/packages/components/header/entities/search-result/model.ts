import { createEvent, createStore } from "effector"

export const resetSearchResult = createEvent()

export const $searchResult = createStore<unknown | null>(null).reset(resetSearchResult)
