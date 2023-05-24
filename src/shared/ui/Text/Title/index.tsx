import { type FC } from "react"
import "./index.scss"
import { type ITextTitle } from "./interface"

const TextTitle: FC<ITextTitle> = (props) => <p className="title" {...props}/>

export default TextTitle
