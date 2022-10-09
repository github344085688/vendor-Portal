import Main from '@/layouts'
import {filterRouterTopMap} from '@/utils/utils'
import SignInRouters from './sign-in-routers'
import SignUpRouters from './sign-up-routers'
import MainRouters from './main-routers'
/*import { useRouter } from 'vue-router'
const mockPush = jest.fn();
jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: mockPush,
    }),
}));*/
import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
    RouteLocationNormalized,
    RouteLocationNormalizedLoaded,
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
    filterRouterTopMap(MainRouters, childRouters, ['path','name','component']);
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
