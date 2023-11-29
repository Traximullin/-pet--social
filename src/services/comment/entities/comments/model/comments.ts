import { createEvent, createStore } from "effector"

export const resetComments = createEvent()

export const $comments = createStore<string[] | null>(null).reset(resetComments)
