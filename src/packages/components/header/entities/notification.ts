import { createEvent, createStore } from "effector"

export const resetNotification = createEvent()

export const $notification = createStore<null | unknown>(null).reset(resetNotification)
