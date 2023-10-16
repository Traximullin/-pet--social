
import { createEvent, createStore } from "effector"
import { type CreateFieldsFactory } from "./types"

export const createFieldsFactory = (): CreateFieldsFactory => {
    const resetFields = createEvent()
    const setFields = createEvent()

    const $fields = createStore(null)

    return {
        resetFields,
        setFields,
        $fields,
    }
}
