export type FieldsType = "login" | "password"

export interface FormFields {
    login: string
    password: string
}

export interface SetFields {
    key: FieldsType
    value: string
}
