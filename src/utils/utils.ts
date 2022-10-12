/**
 * Created by f on 2022/9/21.
 */
import {forEach,isArray} from 'lodash-es';
export const filterRouterTopMap =  (nav: any, childRouters: Array<any>, filters: Array<any>, stratum: number = 3) =>{
    stratum--;
    if (isArray(nav)) forEach(nav, (childNav) => {
        if(childNav.path && childNav.name && childNav.component){
            let router:any = {};
            forEach(filters,(filter: any)=>{
                router[filter]=childNav[filter]
            });
            if(stratum--==0 && childNav.children) router.children= childNav.children;
            childRouters.push(router);
        }
        if (childNav.children && stratum > 0) filterRouterTopMap(childNav.children, childRouters,filters, stratum);
    });
    else if(nav.path && nav.name && nav.component){
        let router:any = {};
        forEach(filters,(filter: any)=>{
            router[filter]=nav[filter]
        });
        childRouters.push(router);
    }
};
