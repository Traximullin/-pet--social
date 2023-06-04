import { type ReactNode, type HTMLAttributes } from "react"

export interface IPager extends HTMLAttributes<HTMLElement> {
    step: number
    children: ReactNode[]
}
