import { type ImgHTMLAttributes } from "react"

export interface IAvatar extends ImgHTMLAttributes<HTMLImageElement> {
    size?: "small" | "medium"
}
