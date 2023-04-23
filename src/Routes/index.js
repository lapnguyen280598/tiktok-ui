import Home from "~/page/Home"
import Following from "~/page/Followings"
import Profile from "~/page/Profile"
import Search from "~/page/Search"
import { HeaderOnly } from "~/components/Layout"

const publicRouter = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }

]

export { publicRouter }