import { type HTMLAttributes, type ReactNode } from "react"

export interface IContentLayout extends HTMLAttributes<HTMLElement> {
    backButton: ReactNode
    control: ReactNode
}
