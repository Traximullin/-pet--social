import { type ImgHTMLAttributes } from "react"

type Icon = "i-notification" | "i-search" | "i-comment" | "i-like"

// исправить
export type IconConfig = Record<Icon, any>

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
    name: Icon
}
