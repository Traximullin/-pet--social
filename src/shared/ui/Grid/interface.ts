import { type HTMLAttributes } from "react"
import { type Property } from "csstype"

export interface IGrid extends HTMLAttributes<HTMLElement> {
    gap?: Property.Gap
    gridTemplateColumns?: Property.GridTemplateColumns
}
