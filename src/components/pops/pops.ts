import { Options, Vue } from 'vue-class-component';
import template from "./pops.vue";
@Options({
    mixins: [template],
    components: {
    },
    props: {
        msgOueue: String
    },
})
export default class Pops extends Vue {
    msgOueue!: string;


}
