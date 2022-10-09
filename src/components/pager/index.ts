import { Options } from 'vue-class-component';
import WiseVue from "../../utils/base-vue";
import template from "./pager.vue";
import { uniq, sortBy } from 'lodash-es';
import DefaultSelect from '@/components/default-select';
@Options({
    mixins: [template],
    components: {
        DefaultSelect,
    },
    props: {
        customizePageSize: {
            type: Number,
            default: 10 ,
        },
        totalCount: {
            type: Number,
            default: 0 ,
        },
        pagerShowCount: {
            type: Number,
            default: 5 ,
        },
        currentPage: {
            type: Number,
            default: 1 ,
        },

        pageOptions: {
            type: Array,
            default: [] ,
        },
    },
    watch: {
        totalCount: {handler: 'watchTotalCount'},
        customizePageSize: {handler: 'watchCustomizePageSize'},
        currentPage: {handler: 'watchCurrentPage'},
    }
})
export default class Pager extends WiseVue {
    customizePageSize!: number;
    totalCount!: number;
    pagerShowCount!: number;
    currentPage!: number;
    pageOptions!: Array<any>;


    pager = {activedPage: 1, totalPage: 0, pagerShowCount: 0, halfPagerShowCount: 0, low: 0, high: 0};
    pageSize = 0;
    inputPage = 1;
    lastPageSize = 0;
    lastTotalCount = 0;
    isShow = false;
    isNext = false;
    stay = false;
    pages: any[] = [];
    pageSizeOptions: any[] = [10, 20, 50];

    public watchTotalCount() {
        if (this.totalCount === 0 || this.lastTotalCount == this.totalCount) return;
        this.reInitialPager();
    }

    public watchCustomizePageSize() {
        this.reRenderWhenPageSizeChange(this.customizePageSize);
    }

    public watchCurrentPage() {
        if (this.currentPage != this.pager.activedPage) {
            if (this.pager.activedPage == this.currentPage)
                return;
            this.pager.activedPage = this.currentPage;
            this.inputPage = this.currentPage;
            this.pages = this.loadPager(this.pager.activedPage);
        }
    }


    public mounted() {
        this.pageSize = this.customizePageSize;
        this.setupPageSizeOptions();
        this.initialPager();
        this.loadDefaultPager();
        if (this.totalCount > this.currentPage) this.isShow = true;
        else this.isShow = false;
    }


    reRenderWhenPageSizeChange(selectPageSize: number) {
        console.log("Page Size change from inside" + selectPageSize);
        if (selectPageSize) {
            this.pageSize = selectPageSize;
        }
        if (this.pageSize === 0 || this.lastPageSize == this.pageSize) return;
        this.reInitialPager();
        this.inputPage = this.pager.activedPage;
        this.isNext = true;
        this.countIsNext();
        this.$emit("reloadContent", {currentPage: this.pager.activedPage, pageSize: this.pageSize});
    }

    private countIsNext() {
        if (this.isNext) setTimeout(() => {
            this.isNext = false;
        }, 3000);
    }

    public loadPage(page: number) {
        this.changeActivePage(page);
    }

    public loadFirstPage() {
        this.changeActivePage(1);
    }

    public loadPrevPage() {
        this.changeActivePage(this.pager.activedPage - 1 > 0 ? this.pager.activedPage - 1 : 1);
    }

    public loadNextPage() {
        this.changeActivePage(this.pager.activedPage + 1 > this.pager.totalPage ? this.pager.totalPage : this.pager.activedPage + 1);
    }

    public loadLastPage() {
        this.changeActivePage(this.pager.totalPage);
    }

    public goToPage() {
        let number = this.inputPage > this.pager.totalPage ? this.pager.totalPage : this.inputPage;
        this.changeActivePage(Number(number));
    }

    public pageSizePage(pageSize: any) {
        this.pageSize = pageSize;
        this.changeActivePage(1, true);
    }


    private changeActivePage(page: number, ispageSize: boolean = false) {
        if (this.pager.activedPage == page && !ispageSize)
            return;
        this.pager.activedPage = page;
        this.inputPage = page;
        this.pages = this.loadPager(this.pager.activedPage);
        this.isNext = true;
        this.countIsNext();
        this.$emit("reloadContent", ({'currentPage': page, 'pageSize': this.pageSize, 'totalCount': this.totalCount}));

    }

    private initialPager() {
        this.pager.pagerShowCount = this.pagerShowCount;
        this.pager.halfPagerShowCount = Math.floor(this.pager.pagerShowCount / 2);
        this.pager.totalPage = Math.ceil(this.totalCount / this.pageSize);
        this.lastTotalCount = this.totalCount;
        this.lastPageSize = this.pageSize;
    }

    private loadDefaultPager() {
        this.pager.activedPage = 1;
        this.pages = this.loadPager(this.pager.activedPage);
    }

    private reInitialPager() {
        this.initialPager();
        if (this.stay) {
            if (this.pager.activedPage > this.pager.totalPage) {
                this.pager.activedPage = 1;
            }
            let reActivePage = this.pager.activedPage;
            this.pager.activedPage = -1;
            this.changeActivePage(reActivePage);
        } else {
            this.pager.activedPage = 1;
            this.pages = this.loadPager(this.pager.activedPage);
        }
    }

    private setupPageSizeOptions() {

        if (this.pageOptions && this.pageOptions.length > 0) {
            this.pageSizeOptions = this.pageOptions;
        } else {
            let defaultPageSizeOptions = [10, 20, 50];
            defaultPageSizeOptions.push(this.pageSize);
            this.pageSizeOptions = sortBy(uniq(defaultPageSizeOptions));
        }
    }

    private loadPager(activedPage: number) {
        let halfPagerShowCount = this.pager.halfPagerShowCount;
        let totalPage = this.pager.totalPage;
        let pagerShowCount = this.pager.pagerShowCount;

        let pages = [];
        let low = (activedPage - halfPagerShowCount <= 1) ? 1 : activedPage + halfPagerShowCount <= totalPage ? activedPage - halfPagerShowCount : totalPage - (pagerShowCount - 1) <= 1 ? 1 : totalPage - (pagerShowCount - 1);
        let high = low + (pagerShowCount - 1) <= totalPage ? low + (pagerShowCount - 1) : totalPage;
        for (let i = low; i <= high; i++) {
            if (i === activedPage) {
                pages.push({"number": i, "active": true});
            } else {
                pages.push({"number": i, "active": false});
            }
        }
        this.pager.low = low;
        this.pager.high = high;
        return pages;
    }
}

