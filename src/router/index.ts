import Main from '@/layouts'
import {filterRouterTopMap} from '@/utils/utils'
import SideNavConfig from './side-nav-config'
import SignInRouters from './sign-in-routers'
import SignUpRouters from './sign-up-routers'

import SignUp from '@/layouts/sign-up';
import ChangeUserSignUp from '@/layouts/sign-up/change-user-sign-up';
import {
    createRouter,
    createWebHistory,
    NavigationFailure,
    NavigationGuardNext,RouteRecordRaw,
    RouteLocationNormalized,
    RouteLocationNormalizedLoaded,
    RouteLocationRaw,
    Router,
    RouteRecordNormalized,
} from 'vue-router';


type ScrollPositionCoordinates = {
    behavior?: ScrollOptions['behavior'];
    left?: number;
    top?: number;
};

interface ScrollPositionElement extends ScrollToOptions {
    el: string | Element;
}



const childrenRouters = ()=>{
    let childRouters:Array<any> = [];
    filterRouterTopMap(SideNavConfig, childRouters, ['path','name','component']);
    return childRouters;
}
const mainRoutes:any=[ {
    path: '/main',
    name: 'Main',
    component: Main,
    redirect: {name: 'Invoices'},
    children:childrenRouters()
}];

const routes: Array<RouteRecordRaw> = [...SignInRouters,...SignUpRouters,...mainRoutes];
console.log(routes);

const router: Router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    async scrollBehavior(
        to: RouteLocationNormalized,
        from: RouteLocationNormalizedLoaded,
        savedPosition: ScrollPositionCoordinates | null
    ): Promise<ScrollPositionCoordinates | ScrollPositionElement | false | void> {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return { el: to.hash };
        }
        const [component]: RouteRecordNormalized[] = to.matched;

        if (component.meta.scrollToTop) {
            return { left: 0, top: 0 };
        }
    },
});

export default router;
