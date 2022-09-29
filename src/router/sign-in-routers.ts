/**
 * Created by f on 2022/9/28.
 */
import SignIn from '@/layouts/sign-in';
import ChangeUserSignIn from '@/layouts/sign-in/change-user-sign-in';
import EnterEmail from '@/layouts/sign-in/enter-email';
import Login from '@/layouts/sign-in/sign-in-page';
import SendResetEmail from '@/layouts/sign-in/send-reset-email';
declare interface UserChildrenRouter {
    path: string,
    name: string,
    component?: any
}

declare interface UserRouter {
    path: string;
    name: string;
    component?: any;
    redirect?: any;
    children?: Array<UserChildrenRouter>;
}

const signInRouters: Array<UserRouter> = [
    {
        path:"/",
        name:"SignIn",
        component:SignIn,
        redirect: {name: 'ChangeUserSignIn'},
        children: [
            {
                path: "signIn/changeUserSignIn",
                name: "ChangeUserSignIn",
                component: ChangeUserSignIn,
            },
            {
                path: "signIn/login",
                name: "Login",
                component: Login,
            },
            {
                path: "signIn/enterEmail",
                name: "EnterEmail",
                component: EnterEmail,
            },
            {
                path: "signIn/sendResetEmail",
                name: "SendResetEmail",
                component: SendResetEmail,
            }
        ]
    }
];

export default signInRouters;