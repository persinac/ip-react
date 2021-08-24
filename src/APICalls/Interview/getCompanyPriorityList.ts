import {EP_DEV, EP_PRODUCTION} from "../../Constants/Endpoints";

const getCompanyPriorityList = (): Promise<any> => {
  return fetch(`${EP_PRODUCTION}/company-priority`, { method: "GET"});
}

export {
  getCompanyPriorityList
};