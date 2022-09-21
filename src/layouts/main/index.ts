import { Options } from 'vue-class-component';
import template from "./login.vue";
import './login.scss';
import baseVue from '../../utils/base-vue';
import useVuelidate from '@vuelidate/core';
import { getCurrentInstance } from 'vue'
import { Watch } from "vue-property-decorator";
import { required, minLength, maxLength, email,sameAs } from '@vuelidate/validators'

@Options({
    validations: {
        formData: {
            firstName: {
                required,
                email,
            },
            passWord: {
                required,
                minLength: minLength(3),
            }
        }
    },
    mixins: [template],
    components: {
    },
    props: {
        propMessage: String
    },
})
export default class Login extends baseVue {



     formData: object = {
        firstName: "ss",
        passWord: "ssa"
    };
  /*  @Watch("message", { immediate: true, deep: true })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChangeValue(newVal: number, oldVal: number) {
        // todo...
        // console.log(newVal);
        if (newVal > 110) {
            this.store.commit("testModule/updateTestData", newVal);
            // console.log(this.store.state.testModule.test);
        }
    }*/
    isshowPassword = true;
    showPassword():void{
        this.isshowPassword = ! this.isshowPassword;
    }
    login = '';
    v$ = useVuelidate();

    // 生命周期
    mounted(){

    }

    signIn(){
        this.$success('success');
        this.$normals('normal');
        this.$errors('error');
        this.$warnings('warning');

        // console.log(this.proxy);
    }

}

/*


import { defineComponent, computed, reactive, toRefs, watch, ref } from 'vue'
import BaseVue from "@/shared/base-vue";

import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

interface IPerson {
    readonly id: number
    name: string
    age ? : number
    sex ? : string
};
export default defineComponent({
    mixins: [template],
    components: {
    },
    name:'Login',
    setup(props) {
        const v$ = useVuelidate();
        const user: IPerson = reactive({
            id:1,
            name: 'unis',
            age: 15,
        });
        const formData  = reactive({
            userName:''
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
        const validations = ()=>{
            return {
                formData: {
                        userName: { required }

                }
            }
        }

        return {
            ...toRefs(user),
            getName,
            counter,
            onSignUp,
            minus,
            formData,
            v$
        }
    },
});

*/
