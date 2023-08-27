import { type FC } from "react"
import "./index.scss"

const Tree: FC = () => {
    return (
        <svg viewBox="0 0 660 270" xmlns="http://www.w3.org/2000/svg">
            <g>
                <rect x="300" y="10" ry="4"/>
                <text x="335" y="27">Отец</text>
                <line x1="350" x2="350" y1="35" y2="50"/>
                <path d="m100,80 v-30 h350 v30"/>
                <rect x="50" y="80" ry="4"/>
                <rect x="400" y="80" ry="4"/>
                <text x="90" y="97">сын</text>
                <text x="435" y="97">дочь</text>
                <line x1="100" x2="100" y1="105" y2="125" />
                <rect x="50" y="125" ry="4"/>
                <text x="75" y="142">правнук</text>
                <line x1="450" x2="450" y1="105" y2="125"/>
                <path d="m200,155 v-30 h400 v30"/>
                <line x1="450" x2="450" y1="125" y2="155"/>
                <rect x="150" y="155" ry="4"/>
                <rect x="400" y="155" ry="4"/>
                <rect x="550" y="155" ry="4"/>
                <text x="180" y="172">внучка</text>
                <text x="437" y="172">внук</text>
                <text x="580" y="172">внучка</text>
                <line x1="450" x2="450" y1="180" y2="210"/>
                <path d="m340,240 v-30 h210 v30"/>
                <line x1="450" x2="450" y1="210" y2="240"/>
                <rect x="290" y="240" ry="4"/>
                <rect x="400" y="240" ry="4"/>
                <rect x="510" y="240" ry="4"/>
                <text x="308" y="257">правнучка</text>
                <text x="425" y="257">правнук</text>
                <text x="528" y="257">правнучка</text>
            </g>
        </svg>
    )
}

export default Tree
