import { type HTMLAttributes } from "react"
import { type Property } from "csstype"

export interface ISpace extends HTMLAttributes<HTMLElement> {
    gap?: Property.Gap
    flexDirection?: Property.FlexDirection
    justifyContent?: Property.JustifyContent
    alignItems?: Property.AlignItems
    flexWrap?: Property.FlexWrap
}
