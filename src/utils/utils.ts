/**
 * Created by f on 2022/9/21.
 */
import {forEach,isArray} from 'lodash-es';
export const filterRouterTopMap =  (nav: any, childRouters: Array<any>, filters: Array<any>) =>{
    if (isArray(nav)) forEach(nav, (childNav) => {
        if(childNav.path && childNav.name && childNav.component){
            let router:any = {};
            forEach(filters,(filter: any)=>{
                router[filter]=childNav[filter]
            });
            childRouters.push(router);
        }

        if (childNav.childs) filterRouterTopMap(childNav.childs, childRouters,filters);
    });
    else if(nav.path && nav.name && nav.component){
        let router:any = {};
        forEach(filters,(filter: any)=>{
            router[filter]=nav[filter]
        });
        childRouters.push(router);
    }
};
