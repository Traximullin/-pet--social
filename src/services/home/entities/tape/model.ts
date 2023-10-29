import { createEvent, createStore } from "effector"

export const resetTape = createEvent()

export const $tape = createStore<unknown | null>(null).reset(resetTape)
