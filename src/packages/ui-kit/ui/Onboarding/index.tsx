import { type FC } from "react"
import "./index.scss"
import { type IOnboarding } from "./types"
import Pager from "../Pager"
import Button from "../Button"
import { usePagerView } from "packages/ui-kit/hooks"
import { OnboardingLayout } from "packages/ui-kit/layout"

const Onboarding: FC<IOnboarding> = (props) => {
    const { ...othersProps } = props
    const { handleSwitchPage, ...pager } = usePagerView()

    return (
        <div className="onboarding" {...othersProps}>
            <Pager {...pager}
                bottomElement={
                    <Button onClick={handleSwitchPage}>Далее</Button>
                }
            >
                <OnboardingLayout>1</OnboardingLayout>
                <OnboardingLayout>2</OnboardingLayout>
                <OnboardingLayout>3</OnboardingLayout>
                <OnboardingLayout>4</OnboardingLayout>
            </Pager>
        </div>
    )
}

export default Onboarding
