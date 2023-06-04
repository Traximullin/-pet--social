import { type FC } from "react"
import "./index.scss"
import { type IOnboardingLayout } from "./interface"

const OnboardingLayout: FC<IOnboardingLayout> = (props) => {
    const { children, ...othersProps } = props

    return (
        <section className="onboarding-layout" {...othersProps}>
            <div className="onboarding-layout__icon">
                icon
            </div>
            <div className="onboarding-layout__content">
                {children}
                Этот сервис раскажет вам о вам овам овам овам овам овам овам овам овам овам овам овам овам овам о
            </div>
        </section>
    )
}

export default OnboardingLayout
