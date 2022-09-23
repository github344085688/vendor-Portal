/**
 * Created by f on 2022/9/21.
 */
import BaseService from "./_base-service";

class LoginServers extends BaseService {
    getLocationHrefSpId(demo: any) {
        return this.resource$.get<any>(`/apinew/cp/spId?demo=${demo}`);
    }

}
export default new LoginServers();