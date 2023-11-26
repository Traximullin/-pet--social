import { createEvent, createStore } from "effector"

export const resetContent = createEvent()

export const $content = createStore<string | null>(null).reset(resetContent)
