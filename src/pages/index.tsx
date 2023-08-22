import { type FC } from "react"
import { Route, Routes } from "react-router-dom"
import { ContentCreate, EPage, HomePage, SignInPage, SignUpPage, TreePage } from "./pages"
import { ProfilePage } from "services/profile/pages/main"

const Routing: FC = () => {
    return (
        <Routes>
            <Route path={EPage.HOME} element={<HomePage />} />
            <Route path={EPage.LOGIN} element={<SignInPage />} />
            <Route path={EPage.REGISTATION} element={<SignUpPage />} />
            <Route path={EPage.PROFILE} element={<ProfilePage />} />
            <Route path={EPage.TREE} element={<TreePage />} />
            <Route path={EPage.CREATE_CONTENT} element={<ContentCreate />} />
        </Routes>
    )
}

export default Routing
