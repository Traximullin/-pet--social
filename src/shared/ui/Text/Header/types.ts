import { type HTMLAttributes } from "react"
import { type Property } from "csstype"

export interface ITextHeader extends HTMLAttributes<HTMLHeadElement> {
    position?: Property.TextAlign
}
