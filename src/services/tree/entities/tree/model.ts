import { createEvent, createStore } from "effector"

export const resetTree = createEvent()

export const $tree = createStore<null | unknown>(null).reset(resetTree)
