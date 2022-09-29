/**
 * Created by f on 2022/9/28.
 */
import SignUp from '@/layouts/sign-up';
import ChangeUserSignUp from '@/layouts/sign-up/change-user-sign-up';
import ExistingCustomerSignUp from '@/layouts/sign-up/existing-customer-sign-up';
import VerifyEmailTips from '@/layouts/sign-up/verify-email-tips';
import VerifyEmail from '@/layouts/sign-up/verify-email';
import ResendEmail from '@/layouts/sign-up/resend-email';
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

const signUpRouters: Array<UserRouter> = [
    {
        path:"/signUp",
        name:"SignUp",
        component:SignUp,
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

export default signUpRouters;