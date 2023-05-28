import { type FC } from "react"
import "./index.scss"

const Onboarding: FC = () => {
    return (
        <div className="onboarding">
            <span
                onClick={() => { alert("!") }}
                className="onboarding__close"
            />
        </div>
    )
}

export default Onboarding
