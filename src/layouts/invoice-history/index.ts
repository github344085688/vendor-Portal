import { Options } from 'vue-class-component';
import template from "./invoice-history.vue";
import './invoice-history.scss';
import BaseVue from '../../utils/base-vue';

@Options({
    mixins: [template],
    name: 'InvoiceHistory',
    components: {
    },
    props: {
        propMessage: String
    },
})
export default class InvoiceHistory extends BaseVue {

    public Success() {
        this.$success('sss')

    }

    public Error() {
        this.$errors('sss')
    }

    public Warning() {
        this.$warnings('ssss')
    }

    public Normal() {
        this.$normals('ssss')
    }

    public Self() {
        this.$self('ssss')
    }

    public Reconfirm() {
        this.$reconfirm({
            title: 'Remove Small Parcel',
            content: 'Are You Sure You Want To remove this small parcel? ',
            confirm: 'Yes',
            cancel: 'No',
        })
            .then((ord: any) => {
                console.log(ord);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }


}
