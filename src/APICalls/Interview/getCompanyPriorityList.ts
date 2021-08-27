import {EP_DEV, EP_PRODUCTION} from "../../Constants/Endpoints";
import {CompanyPriority} from "../../State";
import {State} from "@hookstate/core";

const getCompanyPriorityList = (): Promise<any> => {
  return fetch(`${EP_PRODUCTION}/company-priority`, { method: "GET"});
}

const insertCompanyPriorityItem = (cp: State<CompanyPriority>): Promise<any> => {
  cp.createdDatetime.set(new Date());
  cp.createdBy.set("Alex");
  cp.modifiedDatetime.set(new Date());
  cp.modifiedBy.set("Alex");
  cp.isActive.set(true);
  const stringy = JSON.stringify(
    {
      company: cp.company.get(),
      priority: cp.priority.get(),
      createdBy: cp.createdBy.get(),
      modifiedBy: cp.modifiedBy.get(),
      isActive: cp.isActive.get(),
    }
  );
  return fetch(
    `${EP_PRODUCTION}/company-priority`,
    {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: stringy
    });
}

export {
  getCompanyPriorityList,
  insertCompanyPriorityItem
};