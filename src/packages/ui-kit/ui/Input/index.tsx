import { type FC } from "react"
import "./index.scss"
import { type IInput } from "./types"

const Input: FC<IInput> = (props) => <input className="input" {...props}/>

export default Input
