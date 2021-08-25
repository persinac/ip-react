import React from "react";
import {useState} from "@hookstate/core";
import {store} from "../../store";
import {CompanyPriorityListComponent} from "../CompanyPriorityList/CompanyPriorityListComponent";

const HomeComponent = () => {
  const { sequence, recordingStatus } = useState(store);
  const containerStyle = {
    paddingTop: `60px`
  };


  /* Return the component */
  return (
    <div className={'container-fluid'} style={containerStyle}>
      <div className={'row'}>
        <div className={`col-md-4 mb-3`}>
          <h2>Home</h2>
        </div>
      </div>
      <div className={'row'}>
        <div className={`col-md-4 mb-3`}>
          <p>{ recordingStatus.get() }</p>
        </div>
      </div>
      <div className={'row'}>
        <div className={`col-md-4 mb-3`}>
          <CompanyPriorityListComponent />
        </div>
        <div className={`col-md-4 mb-3`}>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;