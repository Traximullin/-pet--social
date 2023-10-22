import type { Store, Event } from "effector"

export interface CreateFieldsFactory<T, R> {
    resetFields: Event<void>
    setFields: Event<R>
    $fields: Store<T | null>
}

export interface SetFields<R> {
    key: string
    value: string
}
