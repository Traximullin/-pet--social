import { createEvent, createStore } from "effector"

export const resetTape = createEvent()

export const $tape = createStore<object[] | null>(null).reset(resetTape)
