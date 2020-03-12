import Layout from '../layout/index'
import Home from '../views/home'
import List from '../views/list'
import Other from '../views/other'
import Input from '../views/input'

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'home',
        component: Layout,
        childRoutes: [
            { path: '', component: Home },
            { path: 'list', name: 'list', component: List },
        ]
    },
    { path: '/other', name: 'other', component: Other },
    { path: '/input', name: 'other', component: Input }
]

export default routes