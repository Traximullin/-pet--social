// !TODO типизировать
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createEvent, createStore } from "effector"
import type { CreateFieldsFactory, SetFields } from "./types"

export const createFieldsFactory = <T, R>(): CreateFieldsFactory<T, R> => {
    const resetFields = createEvent()
    const setFields = createEvent<SetFields<R>>()

    const $fields = createStore<T | null>(null)
        .on(setFields, (state, { key, value, }) => {
            return {
                ...state,
                [key]: value,
            } as T
        })
        .reset(resetFields)

    return {
        resetFields,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setFields,
        $fields,
    }
}
