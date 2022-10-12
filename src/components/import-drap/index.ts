import { Options } from 'vue-class-component';
import BaseVue from '@/utils/base-vue';
import template from "./import.vue";
import { forEach, join, keys, find, clone, isArray, map, compact } from 'lodash-es';

@Options({
    mixins: [template],
    name: 'Import',
    props: {
        customerId: {
            type: String,
            default: '',
        },
        height: {
            type: String,
            default: '150px',
        },
        companyId: {
            type: String,
            default: '',
        },
        apiUrl: {
            type: String,
            default: '',
        },
        tag: {
            type: String,
            default: '',
        },
        accept: {
            type: String,
            default: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/pdf,application/msword',
        },
        isDisabled: {
            type: Boolean,
            default: false,
        }
    },
})

export default class ImportDrap extends BaseVue {


    public customerId!: string;
    public height!: string;
    public companyId!: string;
    public accept!: string;
    public apiUrl!: string;
    public tag!: string;
    public isDisabled!: boolean;

    public isLoading: boolean = false;
    public isImage: boolean = false;
    public files: Array<any> = [];
    public fd: any = null;
    public excelDataFile: any = null;
    public file: any = {};
    public message: any = {};
    public fileName: any = {};


    public mounted() {
        let dropbox: any = document.querySelector('.dropbox');
        dropbox.addEventListener('dragenter', this.onDrag, false);
        dropbox.addEventListener('dragover', this.onDrag, false);
        dropbox.addEventListener('drop', this.onDrop, false);
    }

    public uploadFile(file: any) {

        this.files = [];
        this.fd = new FormData();
        this.fileName = clone(file.name);
        this.files.push({
            name: file.name,
            uploadPercentage: 67
        });
        if (this.apiUrl) this.fd.append("uploadForm", file);
        else {
            this.fd.append("myFile", file);
            this.fd.append("app", "fd-app");
        }
        this.fd.append("module", "organization");
        this.fd.append("service", "logofile");
        if (this.tag) {
            this.file = file;
            this.excelDataFile = new FormData();
            this.excelDataFile.append("excelDataFile", file);
            if (this.customerId) this.excelDataFile.append("customerId", this.customerId);
        }

        console.log(this.files);
        this.$forceUpdate();
    }

    public onDrag(e: any) {
        e.stopPropagation();
        e.preventDefault();
    }

    public onDrop(e: any) {
        e.stopPropagation();
        e.preventDefault();
        let dt = e.dataTransfer;
        forEach(dt.files, item => this.uploadFile(item));
    }

    public addImg() {
        let inputDOM: any = this.$refs.inputer;
        forEach(inputDOM.files, (item: any) => {
            if (item.type.indexOf('image') > -1) this.isImage = true;
            this.uploadFile(item);
        });
    }

    public async onUpload() {

        this.isLoading = true;
        if (!this.fd) {
            this.isLoading = false;
            return;
        }
        if (this.apiUrl) {
            /*  fileUploadService.sheetUpload(`${this.apiUrl}/${this.rely}`, this.fd).subscribe(
             (res: any) => {
             if (res) {
             this.message =  res;
             this.succeed('succeed');
             this.initialization();
             }
             },
             err => {
             this.message = {
             error: err
             };
             this.initialization();
             this.error(err);
             }
             );*/
            return;
        }

    }
}
