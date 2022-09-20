import { Vue } from 'vue-class-component';
import Session from '../shared/session';
import { ComponentInternalInstance, getCurrentInstance } from 'vue'
export default class BaseVue extends Vue {
    useCurrentInstance() {
        const { appContext } = getCurrentInstance() as ComponentInternalInstance;
        const globalProperties = appContext.config.globalProperties;
        return globalProperties
    }
    proxy:any = this.useCurrentInstance();
    // $success = this.proxy.$message.success();

    $success(msg: any){
         this.proxy.$message.success(msg) ;
    }
/*
    beforeDestroy() {
        this.unsubcribers.forEach(sb => sb.unsubscribe());
    }

    setCustomerIdByUserSelect(customerId: string) {
        Session.setCustomerIdByUserSelect(customerId);
        // let facility = this.getfacilitiesBySelectedCustomer()[0];
        // if (facility) {
        //     this.setFacilityByUserSelect(facility);
        // }
    }

    getCustomerIdByUserSelect() {
        let customerId = Session.getCustomerIdByUserSelect();
        if (!customerId) {
            customerId = this.getCustomerIds()[0];
            this.setCustomerIdByUserSelect(customerId);
        }
        return customerId;
    }

    setFacilityByUserSelect(facility: any) {
        let facilityId = facility.id;
        if (facilityId) {
            let afcs = Session.getAssignedCompanyFacilities();
            let companyAndFacility = find(afcs, (fc: any) => fc.facilityId == facilityId);
            Session.setCurrentCompanyFacility(companyAndFacility);

        }
        Session.setFacilityByUserSelect(facility);
    }

    getFacilityByUserSelect() {
        let facility = Session.getFacilityByUserSelect();
        if (!facility) {
            facility = this.getfacilitiesBySelectedCustomer()[0];
        }
        return facility;
    }

    getCustomerIds() {
        let customerIds = [];
        // let relatedCustomerIds = Session.getUserRelatedCustomerIds();
        if (relatedCustomerIds && relatedCustomerIds.length > 0) {
            customerIds = relatedCustomerIds;
        }
        return customerIds;
    }

    getAssignedCompanyFacilities() {
        let assignedCompanyFacilities = Session.getAssignedCompanyFacilities();
        let facilities = map(assignedCompanyFacilities, "facility");
        return facilities;
    }
    getfacilitiesBySelectedCustomer() {
        let customerId = Session.getCustomerIdByUserSelect();
        let fcs = Session.getFacilityAndCustomerRelation();
        let assignedCompanyFacilities = Session.getAssignedCompanyFacilities();
        let allFacilities = map(assignedCompanyFacilities, "facility");
        let facilitKeyById = keyBy(allFacilities, 'id');
        let facilityIds = compact(flattenDeep(map(fcs, fc => {
            if (fc.orgId == customerId) {
                return fc.activatedFacilityIds;
            }
        })));
        let facilities: any = [];
        forEach(facilityIds, id => {
            if (facilitKeyById[id]) {
                facilities.push(facilitKeyById[id]);
            }
        });
        return facilities;

    }
    getAssignedInvoiceAppCompanyIds() {
        let getAssignedInvoiceAppCompanyIds = Session.getAssignedInvoiceAppCompanyIds();
        return getAssignedInvoiceAppCompanyIds;
    }

    getAssignedInvoiceCustomerIds() {
        let getAssignedInvoiceCustomerIds = Session.getAssignedInvoiceCustomerIds();
        return getAssignedInvoiceCustomerIds;
    }

    removeFacilityParamAndFillTitleIdsWhenSearch(searchParams: any) {
        if (searchParams.facility) {
            delete searchParams.facility;
        }
        searchParams = this.getParamWithFillRelatedTitleIds(searchParams);
        return searchParams;
    }
    getCustomers() {
        return Session.getUserRelatedCustomers();
    }

    getRelatedOrgsKeyByCustomerId() {
        let userInfo: any = Session.getUserInfo();
        let relatedOrgsKeyByCustomerId = keyBy(userInfo.relatedOrganizations, 'relatedCustomerId');
        return relatedOrgsKeyByCustomerId;
    }

    getRelatedTitleIds(customerId: string) {
        let cId = customerId || this.getCustomerIdByUserSelect();
        let userInfo: any = Session.getUserInfo();
        let relatedOrgsKeyByCustomerId = keyBy(userInfo.relatedOrganizations, 'relatedCustomerId');
        let reletionOrgs = relatedOrgsKeyByCustomerId[cId];
        if (reletionOrgs && compact(reletionOrgs.relatedTitleIds).length > 0) {
            return reletionOrgs.relatedTitleIds;
        }
        return [];
    }

    getParamWithFillRelatedTitleIds(param: any) {
        if (param.titleIds && param.titleIds.length > 0) {
            param.titleIds = param.titleIds;
        } else {
            let titleIds = this.getRelatedTitleIds(param.customerId);
            if (titleIds.length > 0) {
                param.titleIds = titleIds;
            } else {
                delete param.titleIds;
            }
        }
        return param;
    }*/
}