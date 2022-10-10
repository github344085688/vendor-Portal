/**
 * Created by f on 2022/9/28.
 */
import UserRouters from '@/components/user-routers-views';
import ChangeUserSignIn from '@/layouts/user/sign-in/change-user-sign-in';
import EnterEmail from '@/layouts/user/sign-in/enter-email';
import Login from '@/layouts/user/sign-in/sign-in-page';
import SendResetEmail from '@/layouts/user/sign-in/send-reset-email';
import ChangeUserSignUp from '@/layouts/user/sign-up/change-user-sign-up';
import ExistingCustomerSignUp from '@/layouts/user/sign-up/existing-customer-sign-up';
import VerifyEmailTips from '@/layouts/user/sign-up/verify-email-tips';
import VerifyEmail from '@/layouts/user/sign-up/verify-email';
import ResendEmail from '@/layouts/user/sign-up/resend-email';
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

const userRouters: Array<UserRouter> = [
    {
        path:"/",
        name:"SignIn",
        component:UserRouters,
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
    },
    {
        path:"/signUp",
        name:"SignUp",
        component:UserRouters,
        redirect: {name: "ChangeUserSignUp"},
        children: [
            {
                path: "/signUp/changeUserSignUp",
                name: "ChangeUserSignUp",
                component: ChangeUserSignUp,
            },
            {
                path: "/signUp/existingCustomerSignUp",
                name: "ExistingCustomerSignUp",
                component: ExistingCustomerSignUp,
            },
            {
                path: "/signUp/verifyEmailTips",
                name: "VerifyEmailTips",
                component: VerifyEmailTips,
            },
            {
                path: "/signUp/resendEmail",
                name: "ResendEmail",
                component: ResendEmail,
            },
            {
                path: "/signUp/verifyEmail",
                name: "VerifyEmail",
                component: VerifyEmail,
            },

        ]
    }
];

export default userRouters;