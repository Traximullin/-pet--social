import { type ReactElement } from "react"

// !TODO прописать тип для content

interface ISwitchItem {
    name: string
    component: ReactElement
}

export interface ISwitch {
    content?: any
}
