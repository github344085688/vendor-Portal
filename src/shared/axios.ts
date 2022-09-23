import session from './session';
import axios, { AxiosRequestConfig } from 'axios';
import { useRouter  } from 'vue-router'
let ax = axios.create();

ax.interceptors.request.use(async function (config) {
 /* config.onUploadProgress = p => {
    return 100 * ( p.loaded / p.total );
  };
  config.onDownloadProgress = p => {
    return 100 * ( p.loaded / p.total );
  };*/


    addCompanyAndFacilityIdToHeader(config);
    addTokenToHeader(config);
    await setResponseType(config);
    return config;
  });

  ax.interceptors.response.use(function (response) {
    return response;
  }, function (error) {

    if (error.response.status === 401) {
        session.clean();
        let useRouters:any = useRouter();
        useRouters.replace({name: 'Login'});
    }
    return Promise.reject(error);
  });


  function addTokenToHeader(config: AxiosRequestConfig) {
     config.headers = config.headers || {};
     config.headers.Authorization = session.getUserToken();
  }

  async function  addCompanyAndFacilityIdToHeader(config: AxiosRequestConfig)  {
    let currentCF = await session.getCurrentCompanyFacility();
    config.headers = config.headers || {};
    if (!config.headers["WISE-Company-Id"]) {
        if (config.data && config.data.wiseCompanyId) {
            config.headers["WISE-Company-Id"] = config.data.wiseCompanyId;
        } else {
          if (currentCF) {
                config.headers["WISE-Company-Id"] = currentCF.companyId;
            }
        }
    }

    if (currentCF) {
        config.headers["WISE-Facility-Id"] = currentCF.facilityId;
    }
  }

  async function  setResponseType(config: any) {
    if (config.headers['responseType']) {
      config['responseType'] = config.headers['responseType'];
    }
  }


export default ax;

