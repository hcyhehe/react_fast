import Layout from '../layout/web'
import Home from '../views/home'


export default {
    path: '/',
    name: 'home',
    component: Layout,
    childRoutes: [
        { path: '', component: Home }
    ]
}
