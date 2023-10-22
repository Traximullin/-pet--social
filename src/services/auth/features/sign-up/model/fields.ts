import { createFieldsFactory } from "packages/lib/create-fields-factory"
import type { FormFields, SetFields } from "../types"

export const { $fields: $form, setFields, resetFields: resetForm, } = createFieldsFactory<FormFields, SetFields>()
