
import { defineComponent, computed, onUnmounted, reactive, toRefs, watch, ref } from 'vue'

import { Form, Field } from "vee-validate";
import template from "./login.vue";
import './login.scss'
import schema from '@/shared/vee-validate-schema'
interface IPerson {
    readonly id: number
    name: string
    age ? : number
    sex ? : string
};



export default defineComponent({
    mixins: [template],
    components: {
        Form,
        Field
    },
    name:'Login',
    setup () {
        // 切换短信登录
        const isMsgLogin = ref(false)
        // 表单数据对象
        const form = reactive({
            isAgree: true,
            account: null,
            password: null,
            mobile: null,
            code: null
        })

        // vee-validate 校验基本步骤
        // 1. 导入 Form Field 组件 将 form 和 input 进行替换，需要加上name用来指定将来的校验规则函数的
        // 2. Field 需要进行数据绑定，字段名称最好和后台接口需要的一致
        // 3. 定义Field的name属性指定的校验规则函数，Form的validation-schema接受定义好的校验规则是对象
        // 4. 自定义组件需要校验必须先支持v-model 然后Field使用as指定为组件名称
        const mySchema = {
            // 校验函数规则：返回true就是校验成功，返回一个字符串就是失败，字符串就是错误提示
            account: schema.account,
            password: schema.password,
            mobile: schema.mobile,
            code: schema.code,
            isAgree: schema.isAgree
        }

        // 监听isMsgLogin重置表单（数据+清除校验结果）
        const formCom = ref();
        watch(isMsgLogin, () => {
           /* // 重置数据
            form.isAgree = true;
            form.account = null;
            form.password = null;
            form.mobile = null;
            form.code = null;
            // 如果是没有销毁Field组件，之前的校验结果是不会清除  例如：v-show切换的
            // Form组件提供了一个 resetForm 函数清除校验结果
            formCom.value.resetForm()*/
        });

        // setup中获取组件实例 proxy
        // const { proxy } = getCurrentInstance()
        // proxy.$message({ text: '111' })

        // 需要在点击登录的时候对整体表单进行校验

        const login = async () => {
            // Form组件提供了一个 validate 函数作为整体表单校验，当是返回的是一个promise
            const valid: any   = await formCom.value.validate();
            if (valid) {
                try {

                } catch (e) {


                }
            }
        }

        // pause 暂停 resume 开始
        // useIntervalFn(回调函数,执行间隔,是否立即开启)
        const time = ref(0);


        // 1. 发送验证码
        // 1.1 绑定发送验证码按钮点击事件
        // 1.2 校验手机号，如果成功才去发送短信（定义API），请求成功开启60s的倒计时，不能再次点击，倒计时结束恢复
        // 1.3 如果失败，失败的校验样式显示出来
        const send = async () => {

        }

        // 初始化QQ登录按钮 （官方）
        // 1. 准备span有id = qqLoginBtn
        // 2. QC.Login({btnId:"qqLoginBtn"})
        // onMounted(() => {
        //   QC.Login({ btnId: 'qqLoginBtn' })
        // })

        return { isMsgLogin, form, schema: mySchema, formCom, login, send, time }
    }
   /* setup(props) {
        const form = reactive({
            isAgree: true,
            account: null,
            password: null,
            mobile: null,
            code: null
        });
        const user: IPerson = reactive({
            id:1,
            name: 'unis',
            age: 15,
        });
        const getName = computed(() => {
            return "getName invoked";
        });

        const counter = ref(0);
        let  isshowLogin = ref(true);

        const onSignUp = () => {
            counter.value = counter.value + 1
        }

        const minus = () => {
            counter.value = counter.value - 1
        }

        watch(counter, (newValue, oldValue) => {
            console.log('counter 发生了变化，最新的值是：', newValue)
        })

        /!*reactive 和 ref 都是用来定义响应式数据的 reactive更推荐去定义复杂的数据类型 ref 更推荐定义基本类型
         ref 和 reactive 本质我们可以简单地理解为ref是对reactive的二次包装， ref定义的数据访问的时候要多一个.value
         使用ref定义基本数据类型，ref也可以定义数组和对象。*!/
        /!*  watch(active, (val) => {
         if (val) loaded.value = true
         });*!/

        return {
            ...toRefs(user),
            getName,
            counter,
            onSignUp,
            minus
        }
    },*/
});

