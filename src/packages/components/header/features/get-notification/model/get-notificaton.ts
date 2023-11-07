import { createEffect, createEvent, restore, sample } from "effector"

import { $notification } from "packages/components/header/entities/notification"

export const getNotification = createEvent()

export const getNotificationFx = createEffect(async () => {
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

export const $getNotificationError = restore(getNotificationFx.failData, null)
export const $getNotificationLoading = getNotificationFx.pending
export const getNotificationDone = getNotificationFx.doneData

sample({
    clock: getNotification,
    target: getNotificationFx,
})

sample({
    clock: getNotificationDone,
    target: $notification,
})
