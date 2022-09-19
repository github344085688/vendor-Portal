import BaseService from "./_base-service";

class OrganizationService extends BaseService {

    stepRecord(params: any) {
        return this.resource$.post<any>(`/shared/fd-app/customer-on-board/step-record`, params);
    }

    get(organizationId: string) {
        return this.resource$.get<any>(`/shared/fd-app/organization/${organizationId}`);
    }

    createCustomerOnBoard(params: any) {
        return this.resource$.post<any>("/shared/fd-app/customer-on-board/create-account", params);
    }

    getCustomerOnBoard() {
        return this.resource$.get<any>("/shared/bam/customer-on-board/search");
    }

    updateCustomerOnBoard(id: string, update: any) {
        return this.resource$.put<any>(`/shared/fd-app/customer-on-board/update-status/${id}`, update);
    }

    search(params: any) {
        return this.resource$.post<any>("/shared/fd-app/organization/search", params);
    }

    getCreateAccount(params: any) {
        return this.resource$.post<any>("/shared/fd-app/customer-on-board/get-create-account/" + params.customerId + "/" + params.companyId, params);
    }

    createSetupProcessRule(params: any) {
        return this.resource$.post<any>("/shared/fd-app/customer-on-board/setup-process-rule", params);
    }

    getProcessRule(customerId: string) {
        return this.resource$.post<any>(`/shared/fd-app/customer-on-board/get-process-rule/${customerId}`, {});
    }

    searchConfigurationTemplate(params: any) {
        return this.resource$.post<any>("/shared/fd-app/customer-configuration-template/search", params);
    }

    getOrderInterface(customerId: string) {
        return this.resource$.post<any>(`/shared/fd-app/customer-on-board/get-order-interface/${customerId}`, {});
    }

    createOrderInterface(params: any) {
        return this.resource$.post<any>(`/shared/fd-app/customer-on-board/setup-order-interface`, params);
    }

    createTestTraining(params: any) {
        return this.resource$.post<any>(`/shared/fd-app/customer-on-board/test-training/create`, params);
    }

    updateTestTraining(params: any) {
        return this.resource$.put<any>(`/shared/fd-app/customer-on-board/test-training/update`, params);
    }

    getAssignees(params: any) {
        return this.resource$.post<any>("/shared/fd-app/customer-on-board/test-training/assignee", params);
    }

    getSsoUserInfo(params: any) {
        return this.resource$.post<any>("/shared/bam/customer-on-board/get-sso-user-infos", params);
    }

    getLabels() {
        return this.resource$.get<any>("/shared/fd-app/customer-on-board/test-training/labels");
    }

    getTestTraining(params: any) {
        return this.resource$.post<any>("/shared/fd-app/customer-on-board/test-training/get", params);
    }

    getIssueDetails(issueId: string) {
        return this.resource$.get<any>(`/shared/fd-app/customer-on-board/test-training/issue/${issueId}`);
    }

    getTerms() {
        return this.resource$.post<any>(`/shared/bam/billing/pay-and-bill/get-terms`, {});
    }

    getCurrency() {
        return this.resource$.post<any>(`/shared/bam/billing/pay-and-bill/get-currency`, {});
    }

    getBasicInfo(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/get-basic-info`, params);
    }

    getBillingInfoByorgId(orgId: any) {
        return this.resource$.get<any>(`/shared/fd-app/customer-on-board/${orgId}/get-billing-info`);
    }

    submitBillingBasicInfo(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/submit-basic-info`, params);
    }


    getbuildSop(orgId: any) {
        return this.resource$.get<any>(`/shared/fd-app/customer-on-board-sop/get-last-sop/${orgId}`);
    }

    buildSop(params: any) {
        return this.resource$.post<any>(`/shared/fd-app/customer-on-board-sop/build-sop`, params);
    }

    deleteSop(id: string) {
        return this.resource$.delete<any>(`/shared/fd-app/customer-on-board-sop/${id}`);
    }

    searchSop(params: any) {
        return this.resource$.post<any>('/shared/fd-app/customer-on-board-sop/search', params);
    }

    getGoLive(params: any) {
        return this.resource$.post<any>(`/shared/fd-app/customer-on-board-go-live/search`, params);
    }


    confirmGoLive(id: any, params: any) {
        return this.resource$.put<any>(`/shared/fd-app/customer-on-board-go-live/${id}`, params);
    }

    getFollowUp(id: any) {
        return this.resource$.get<any>(`/shared/fd-app/customer-on-board/follow-up/${id}`);
    }

    getFollowUpProject() {
        return this.resource$.get<any>(`/shared/fd-app/customer-on-board/follow-up/project`);
    }

    followUp(params: any) {
        return this.resource$.post<any>(`/shared/fd-app/customer-on-board/follow-up`, params);
    }

    getInsetUrl(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/getAddRateInsetUrl`, params);
    }

    getBillingCategoryInfo(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/getBillingCategoryInfo`, params);
    }

    getDefInvoiceAccountItemTag(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/getDefInvoiceAccountItemTag`, params);
    }

    getQuestionAction(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/getQuestionAction`, params);
    }

    addOrUpdateBillingRule(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/addOrUpdateBillingRule`, params);
    }

    getRuleSetInfo(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/getRuleSetInfo`, params);
    }

    deleteVendorRateSheetByID(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/deleteVendorRateSheetByID`, params);
    }


    deleteRuleSetBySetID(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/deleteRuleSetBySetID`, params);
    }

    getVendorUploadFileByVendorID(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/getVendorUploadFileByVendorID`, params);
    }

    downloadFile(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/downloadFile`, params);
    }

    removeRateSheet(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/deleteVendorRateSheetByID`, params);
    }

    ruleSetDisable(params: any) {
        return this.resource$.post<any>(`/shared/bam/billing/vendor/ruleSetDisable`, params);
    }

    searchFileInfo(params: any) {
        return this.resource$.post<any>(`/shared/file-app/file-info/search`, params);
    }

    searchUserInfo(params: any) {
        return this.resource$.post<any>(`/shared/idm-app/user/search`, params);
    }

    searchExplain() {
        return this.resource$.post<any>(`/shared/fd-app/explain/search`, {});
    }

    searchAroundCustomerId(params: any) {
        return this.resource$.post<any>(`/bam/organization/search-around-customerId`, params);
    }


    searchCarrierAroundCustomerId(params: any) {
        return this.resource$.post<any>(`/bam/carrier/search-around-customerId`, params);
    }


    searchConfiguratiomap(params: any) {
        params['tableName'] = "ManualInputRestritionMap";
        return this.resource$.post<any>(`/bam/fd-app/configuration-map/search`, params);
    }

    searchDataForUrl(url: string, params: any) {
        return this.resource$.post<any>(url, params);
    }

    updateQuestionList(params: any) {
        return this.resource$.post<any>("/shared/fd-app/customer-on-board/question-list/update", params);
    }


    getQuestionList(id: any) {
        return this.resource$.get<any>(`/shared/fd-app/customer-on-board/question-list/${id}`);
    }

    getDataBuild(id: any) {
        return this.resource$.get<any>(`/shared/fd-app/customer-on-board/data-build/${id}`);
    }

    createDataBuild(params: any) {
        return this.resource$.post<any>("/shared/fd-app/customer-on-board/data-build/create", params);
    }

    updateDataBuild(params: any) {
        return this.resource$.post<any>("/shared/fd-app/customer-on-board/data-build/update", params);
    }

    createOrUpdateCompliance(params: any) {
        return this.resource$.post<any>("/shared/fd-app/customer-on-board/compliance/createOrUpdate", params);
    }

    getCompliance(id: any) {
        return this.resource$.get<any>(`/shared/fd-app/customer-on-board/compliance/${id}`);
    }


    searchCompliance(params: any) {
        return this.resource$.put<any>(`/shared/fd-app/customer-on-board/compliance/search`, params);
    }


    searchUsers(params: any) {
        return this.resource$.post<any>(`/shared/idm-app/user/search`, params);
    }


}

export default new OrganizationService();

