import { type FC } from "react"
import "./index.scss"
import { type IOnboarding } from "./interface"
import Pager from "../Pager"
import { usePagerView } from "shared/hooks"

const Onboarding: FC<IOnboarding> = (props) => {
    const { ...othersProps } = props
    const { handleSwitchPage, ...pager } = usePagerView()

    return (
        <div className="onboarding" {...othersProps}>
            <button onClick={() => { handleSwitchPage() }}>TEST</button>
            <Pager {...pager}>
                <p>Test1</p>
                <p>Test2</p>
                <p>Test3</p>
                <p>Test4</p>
            </Pager>
        </div>
    )
}

export default Onboarding
